import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Flex } from 'components';
import { maskToCurrency } from 'components/ui/Form/Field/MaskedInput/currency.input';
import { ControlledMaskedInput } from 'components/ui/Form/Field/MaskedInput/masked-input.controlled';
import styled from 'styled-components';

import { default as ControlledMultiSelect } from './Field/MultiSelect/controlled';
import { IOption } from './Options';
import Grid from '../Grid';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

import Form from './index';

export const Controlled = () => {
  const [formValues, setFormValues] = useState('');

  const options = [
    {
      label: 'OPTION 1',
      value: '1'
    },
    {
      label: 'OPTION 2',
      value: '2'
    },
    {
      label: 'OPTION 3',
      value: '3'
    },
    {
      label: 'OPTION 4',
      value: '4'
    },
    {
      label: 'OPTION 5',
      value: '5'
    }
  ];

  interface IControlledForm {
    controlledCurrency: string;
    controlledInput: string;
    controlledMultiSelect: string[];
  }

  const { control, handleSubmit } = useForm<IControlledForm>({
    defaultValues: {
      controlledCurrency: '10000',
      controlledInput: '',
      controlledMultiSelect: ['1', '2', '4']
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });

  const onSubmit: SubmitHandler<IControlledForm> = payload => {
    setFormValues(JSON.stringify(payload));
  };

  return (
    <Flex>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: '4rem', width: '900px' }}
      >
        <Grid spacing="large">
          <Grid.Cell x={[0, 6]} y={[0, 1]}>
            <ControlledMultiSelect
              {...{ control }}
              label="Controlled Multi Select"
              name="controlledMultiSelect"
              options={options}
            />
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[0, 1]}>
            <Form.Input
              {...{ control }}
              label="Controlled Input"
              name="controlledInput"
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 6]} y={[1, 2]}>
            <ControlledMaskedInput
              {...{ control }}
              beforeMaskedStateChange={maskToCurrency}
              label="Controlled Multi Select"
              mask="999999999999"
              maskPlaceholder={null}
              name="controlledCurrency"
            />
          </Grid.Cell>

          <Grid.Cell x={[0, 12]} y={[4, 5]}>
            <Button fullWidth onClick={handleSubmit(onSubmit)}>
              SUBMIT FORM
            </Button>
          </Grid.Cell>
        </Grid>
      </Form>
      <Flex style={{ padding: '4rem', width: '900px' }}>
        <Text size="displayRegular">{formValues}</Text>
      </Flex>
    </Flex>
  );
};

export const Input = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);
export const InputTime = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input
          id="input"
          name="input"
          placeholder="Placeholder"
          type="time"
        />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const TextArea = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Text Area</Form.Label>
      <Form.Field isTextArea>
        <Form.Field.TextArea
          id="input"
          name="input"
          placeholder="Placeholder"
          rows={10}
        />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const Disabled = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field disabled>
        <Form.Field.Input id="input" name="input" placeholder="Disabled" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const Error = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Error" />
      </Form.Field>
      <Form.Error>This is an error</Form.Error>
    </Form.FieldGroup>
  </Form>
);

export const IconInput = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Icon Input" />
        <Icon.Cross colorKey="default" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const IconInputWithError = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Icon Input" />
        <Icon.Cross colorKey="default" />
      </Form.Field>
      <Form.Error>This is an error</Form.Error>
    </Form.FieldGroup>
  </Form>
);

export const IconButtonInput = () => {
  const [value, setValue] = useState<string>('Input value');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label htmlFor="input">Form Input</Form.Label>
        <Form.Field>
          <Form.Field.Input
            id="input"
            name="input"
            onChange={onChange}
            placeholder="Icon Button Input"
            value={value}
          />
          <IconButton.Cross label="Close" onClick={() => setValue('')} />
        </Form.Field>
      </Form.FieldGroup>
    </Form>
  );
};

export const IconButtonInputWithError = () => {
  const [value, setValue] = useState<string>('input value');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label htmlFor="input">Form Input</Form.Label>
        <Form.Field>
          <Form.Field.Input
            id="input"
            name="input"
            onChange={onChange}
            placeholder="Icon Button Error Input"
            value={value}
          />
          <IconButton.Cross label="Close" onClick={() => setValue('')} />
        </Form.Field>
        <Form.Error>This is an error</Form.Error>
      </Form.FieldGroup>
    </Form>
  );
};

export const InputWithMask = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.MaskedInput
          id="input"
          mask="99/99/9999"
          name="input"
          placeholder="Placeholder"
        />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const InputWithCurrencyMask = () => {
  const [value, setValue] = useState('');
  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label htmlFor="input">Form Input</Form.Label>
        <Form.Field>
          <Form.Field.MaskedInput
            alwaysShowMask={false} // Don't use dots and commas
            beforeMaskedStateChange={maskToCurrency}
            mask="9999999999"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </Form.Field>
      </Form.FieldGroup>
    </Form>
  );
};

export const InputWithUnitLeft = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Unit>$</Form.Field.Unit>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const InputWithUnitRight = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
        <Form.Field.Unit>$</Form.Field.Unit>
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const SmallInput = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field small>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const SmallInputWithUnitLeft = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field small>
        <Form.Field.Unit>$</Form.Field.Unit>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const SmallInputWithUnitRight = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field small>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
        <Form.Field.Unit>$</Form.Field.Unit>
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const InputWithInfo = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
      <Form.Info>Info here</Form.Info>
    </Form.FieldGroup>
  </Form>
);

export const InputWithInfoAndError = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field>
        <Form.Field.Input id="input" name="input" placeholder="Placeholder" />
      </Form.Field>
      <Form.Info>Info here</Form.Info>
    </Form.FieldGroup>
  </Form>
);

export const BusyInput = () => (
  <Form>
    <Form.FieldGroup>
      <Form.Label htmlFor="input">Form Input</Form.Label>
      <Form.Field busy>
        <Form.Field.Input
          disabled
          id="input"
          name="input"
          placeholder="Placeholder"
        />
        <Icon.Loading colorKey="default" />
      </Form.Field>
    </Form.FieldGroup>
  </Form>
);

export const Select = () => {
  const options = [
    {
      label: 'first Value',
      value: '1'
    },
    {
      label: 'second Value',
      value: '2'
    },
    {
      label: 'third Value',
      value: '3'
    },
    {
      label: 'forth Value',
      value: '4'
    },
    {
      label: 'fifth Value',
      value: '5'
    }
  ];

  const [selected, setSelected] = useState<IOption>();

  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label htmlFor="input">Form Input</Form.Label>
        <Form.Field>
          <Form.Field.Select<IOption>
            id="input"
            name="input"
            options={options}
            placeholder="Placeholder"
            selected={selected}
            setSelected={item => {
              setSelected(item);
            }}
            value={selected?.value || ''}
          >
            {(items, selectValue, activeIndex) =>
              items.length &&
              items.map((option, index) => (
                <Form.Option
                  active={activeIndex === index}
                  key={option.value}
                  onClick={() => selectValue(option)}
                  selected={option.value === selected?.value}
                >
                  {option.label}
                </Form.Option>
              ))
            }
          </Form.Field.Select>
        </Form.Field>
      </Form.FieldGroup>
      <p>{`Value: ${selected?.value}`}</p>
    </Form>
  );
};

type Address = {
  address: string;
  label: string;
  value: string;
};

const promise = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          address: '100 Road, Town, City, County, RI73 3R3',
          label: 'A Company',
          value: '1000000001'
        },
        {
          address: '101 Road, Town, City, County, RI73 3R3',
          label: 'AA Company',
          value: '1000000002'
        },
        {
          address: '102 Road, Town, City, County, RI73 3R3',
          label: 'AAA Company',
          value: '1000000003'
        },
        {
          address: '103 Road, Town, City, County, RI73 3R3',
          label: 'AAAA Company',
          value: '1000000004'
        }
      ]);
    }, 1000);
  });

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Lookup = () => {
  const [options, setOptions] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Address>();

  const request = async (string: string) => {
    setLoading(true);
    setOptions([]);
    const results = await promise();
    setLoading(false);

    setOptions(
      (results as Address[]).filter(res => res.label.indexOf(string) > -1)
    );
  };

  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label htmlFor="input">Form Input</Form.Label>
        <Form.Field>
          <Form.Field.Lookup<Address>
            name="input"
            onSearch={request}
            options={options}
            placeholder="Placeholder"
            selected={selected}
            setSelected={option => {
              setSelected(option);
            }}
            value={selected?.value || ''}
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
                      <IconButton.MagnifyingGlass disabled label="Search" />
                      <Text color="secondary" margin={{ left: 'small' }}>
                        No Results
                      </Text>
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
                        selected={option.value === selected?.value}
                      >
                        <Text>{option.label}</Text>
                        <Text as="span" color="secondary">
                          {option.value}
                        </Text>
                        <Text as="span" color="secondary">
                          {option.address}
                        </Text>
                      </Form.Option>
                    );
                  })}
              </>
            )}
          </Form.Field.Lookup>
        </Form.Field>
      </Form.FieldGroup>
      <p>{`Value: ${selected?.value}`}</p>
    </Form>
  );
};

export default {
  component: Form,
  title: 'Components/Form'
} as Meta;
