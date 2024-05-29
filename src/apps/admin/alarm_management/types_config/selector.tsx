import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { SelectorInfo } from 'apps/admin/alarm_management/types_config/styles';
import { getFragment } from 'codegen';
import {
  CORE_ALARM_TYPE_FRAGMENT,
  CORE_ALARM_TYPE_FRAGMENT_DOC,
  FETCH_ALARM_TYPES_DOCUMENT,
} from 'codegen/graphql';
import { Flex } from 'components';
import Form from 'components/ui/Form';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

export type AlarmTypeOption = {
  id: number;
  label: string;
  sub_label: string;
  value: string;
};

export const AlarmTypeSelector = (props: {
  selected: string | undefined;
  small?: boolean;
  null_value_text?: string;
  setSelected?(value: string | null): void;
  setSelectedLabel?(value: string): void;
}) => {
  const [search_string, setSearchString] = useState('');
  const [options, setOptions] = useState<AlarmTypeOption[]>([]);
  const [loading, setLoading] = useState(false);

  const createOptions = (
    alarm_types: readonly CORE_ALARM_TYPE_FRAGMENT[],
  ): AlarmTypeOption[] => {
    return alarm_types.map(a => ({
      id: a.id,
      label: a.description ?? '',
      sub_label: a.alarm_type_name ?? '',
      value: a.description ?? a.alarm_type_name ?? '',
    }));
  };

  useQuery(FETCH_ALARM_TYPES_DOCUMENT, {
    onCompleted: data => {
      const found_types = getFragment(
        CORE_ALARM_TYPE_FRAGMENT_DOC,
        data?.alarm_types.alarm_types,
      );

      setOptions(createOptions(found_types));
    },
    variables: {
      pagination: {
        page: 1,
        per_page: 500,
      },
    },
  });

  const onSelect = (option: AlarmTypeOption) => {
    if (props.setSelected) props.setSelected(option?.value ?? null);
    if (props.setSelectedLabel) props.setSelectedLabel(option?.label);
    setSearchString('');
  };

  const getFilteredOptions = () => {
    if (!search_string) return options;

    return options.filter(option =>
      option.label.toLowerCase().includes(search_string.toLowerCase()),
    );
  };

  const filtered_options = getFilteredOptions();

  return (
    <Form.FieldGroup>
      <Form.Label htmlFor="alarm_type_selector" small={props.small}>
        Alarm Type
      </Form.Label>
      <Form.Field small={props.small}>
        <Form.Field.Lookup<AlarmTypeOption>
          minCharacters={1}
          name="alarm_type_selector"
          onSearch={setSearchString}
          options={filtered_options}
          placeholder=""
          selected={filtered_options.find(
            option => option?.value === props.selected,
          )}
          setSelected={onSelect}
          null_value_text={props.null_value_text}
        >
          {(items, selectValue, activeIndex) => (
            <>
              {loading && (
                <div>
                  <SelectorInfo>
                    <Icon.Loading />
                  </SelectorInfo>
                </div>
              )}
              {!loading && items.length <= 0 && (
                <div>
                  <SelectorInfo>
                    <Icon.MagnifyingGlass />
                    <Text color="secondary" margin={{ left: 'small' }}>
                      NO RESULTS
                    </Text>
                  </SelectorInfo>
                </div>
              )}
              {items.length > 0 &&
                !loading &&
                items.map((option, index) => {
                  return (
                    <Form.Option
                      active={activeIndex === index}
                      key={`${option?.value}-${index}`}
                      onClick={() => selectValue(option)}
                      selected={option?.value === props.selected}
                    >
                      <Flex direction="column" fitWidth gap="small">
                        <Text size="labelRegular">{option.label}</Text>
                        {/*<Text color="secondary" size="labelSmall">*/}
                        {/*  {option.sub_label}*/}
                        {/*</Text>*/}
                      </Flex>
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
