import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import {
  FETCH_TRANSMITTERS_DOCUMENT,
  TRANSMITTER,
  TRANSMITTER_STATUS,
} from 'codegen/graphql';
import { Form, Text } from 'components';
import { IOptionNumber } from 'components/ui/Form/Options';
import Icon from 'components/ui/Icon';
import IconButton from 'components/ui/IconButton';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
`;

export interface TransmitterSelectorPayload {
  selected_option?: IOptionNumber;
  selected_transmitter?: TRANSMITTER;
}

export const TransmitterSelector = ({
  selected_transmitter_id,
  selectTransmitter,
  small = false,
  statuses,
}: {
  selected_transmitter_id?: number | undefined;
  selectTransmitter(payload: TransmitterSelectorPayload): void;
  statuses?: TRANSMITTER_STATUS[];
  small?: boolean;
}) => {
  const [transmitter_selects, setTransmitterSelects] = useState<
    IOptionNumber[]
  >([]);

  const [transmitters, setTransmitters] = useState<TRANSMITTER[]>([]);

  const [fetch_transmitters, { loading }] = useLazyQuery(
    FETCH_TRANSMITTERS_DOCUMENT,
    {
      onCompleted: data => {
        const successful_request = data?.transmitters?.success;
        const fetched_transmitters = data?.transmitters?.transmitters;

        if (successful_request) {
          setTransmitters(fetched_transmitters as TRANSMITTER[]);

          setTransmitterSelects(
            (fetched_transmitters as TRANSMITTER[]).reduce(
              (acc: IOptionNumber[], { decoder, id, number }: TRANSMITTER) => {
                if (id) {
                  return [
                    ...acc,
                    {
                      label: `${number} (${decoder?.name})`,
                      value: id,
                    },
                  ];
                }

                return acc;
              },
              [],
            ),
          );
        }
      },
    },
  );

  const searchTransmitters = async (search_string: string) => {
    await fetch_transmitters({
      variables: {
        pagination: {
          page: 1,
          per_page: 150,
        },
        search_params: {
          name: search_string,
          statuses,
        },
      },
    });
  };

  const onSelectTransmitter = (option?: IOptionNumber) => {
    if (option) {
      const selected_transmitter_payload = transmitters.find(
        transmitter => transmitter.id === option.value,
      );

      selectTransmitter({
        selected_option: option,
        selected_transmitter: selected_transmitter_payload,
      });
    } else {
      selectTransmitter({
        selected_option: undefined,
        selected_transmitter: undefined,
      });
    }
  };

  return (
    <Form.FieldGroup>
      <Form.Label htmlFor="transmitter-selector" small={small}>
        Transmitter (type 3 char)
      </Form.Label>
      <Form.Field small={small}>
        <Form.Field.Lookup
          minCharacters={3}
          name="transmitter-selector"
          onSearch={searchTransmitters}
          options={transmitter_selects}
          placeholder=""
          required={true}
          selected={transmitter_selects.find(
            option => option.value === selected_transmitter_id,
          )}
          setSelected={option => {
            onSelectTransmitter(option);
          }}
        >
          {(items, selectValue, activeIndex) => (
            <>
              {loading && (
                <div>
                  <Info>
                    <Icon.Loading />
                  </Info>
                </div>
              )}
              {!loading && items.length <= 0 && (
                <div>
                  <Info>
                    <IconButton.MagnifyingGlass label="Search" />
                    <Text margin={{ left: 'small' }}>No Results</Text>
                  </Info>
                </div>
              )}
              {items.length > 0 &&
                !loading &&
                items.map((option, index) => {
                  return (
                    <Form.Option
                      active={activeIndex === index}
                      key={option.value}
                      onClick={() => selectValue(option)}
                      selected={option.value === selected_transmitter_id}
                    >
                      <Text>{option.label}</Text>
                    </Form.Option>
                  );
                })}
            </>
          )}
        </Form.Field.Lookup>
      </Form.Field>
    </Form.FieldGroup>
  );
};

export interface ControlledTransmitterProps<T extends FieldValues>
  extends UseControllerProps<T> {
  disabled?: boolean;
  small?: boolean;
  statuses?: TRANSMITTER_STATUS[];
}

export const ControlledTransmitterSelector = <T extends FieldValues>({
  control,
  disabled = false,
  name,
  rules,
  small = false,
  statuses,
}: ControlledTransmitterProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const selectTransmitter = (payload: TransmitterSelectorPayload) => {
    onChange(payload.selected_option?.value as PathValue<T, Path<T>>);
  };

  return (
    <TransmitterSelector
      selected_transmitter_id={value}
      selectTransmitter={selectTransmitter}
      small={small}
      statuses={statuses}
    />
  );
};
