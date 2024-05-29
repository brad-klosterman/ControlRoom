import { useEffect, useState } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import Field from 'components/ui/Form/Field';
import Lookup from 'components/ui/Form/Field/Lookup/index';
import FieldGroup from 'components/ui/Form/FieldGroup';
import Label from 'components/ui/Form/Label';
import styled from 'styled-components';

import Icon from '../../../Icon';
import Text from '../../../Text';
import Error from '../../Error';
import Option from '../../Options/Option';

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export interface SelectProps<T extends FieldValues>
  extends UseControllerProps<T> {
  errorMessage?: string;
  fetchOnStart?: boolean;
  label?: string;
  onFetch: () => any;
  placeholder?: string;
  small?: boolean;
}

const ControlledLookup = <T extends FieldValues>({
  control,
  errorMessage,
  fetchOnStart = false,
  label,
  name,
  onFetch,
  placeholder,
  rules,
  small = false,
}: SelectProps<T>) => {
  const [options, setOptions] = useState([]);
  const [allOptions, setAllOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const fetchOptions = async (searchTerm: string) => {
    try {
      const response = await onFetch();
      setAllOptions(response || []);

      setOptions(
        response
          ? response.filter(
              (res: { label: string }) =>
                res.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
            )
          : [],
      );
    } catch {
      // eslint-disable-next-line no-console
      console.error('error fetching options');
    }
  };

  useEffect(() => {
    if (fetchOnStart) {
      fetchOptions('');
    }
  }, []);

  const request = async (searchTerm: string) => {
    setLoading(true);
    setOptions([]);

    if (allOptions.length === 0) {
      await fetchOptions(searchTerm);

      setLoading(false);
    } else {
      setOptions(
        allOptions.filter(
          (res: { label: string }) =>
            res.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
        ),
      );

      setLoading(false);
    }
  };

  const currentValue = value ? `${value}` : '';

  return (
    <FieldGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field small={small}>
        <Lookup
          id={name}
          minCharacters={1}
          name={name}
          onSearch={request}
          options={options}
          placeholder={placeholder}
          selected={value}
          setSelected={onChange}
          value={currentValue}
        >
          {(
            items: any[],
            selectValue: (arg0: any) => any,
            activeIndex: any,
          ) => (
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
                    <Option
                      active={activeIndex === index}
                      key={`${option.value}-${index}`}
                      onClick={() => selectValue(option)}
                      selected={option.value === value}
                    >
                      {option.label}
                    </Option>
                  );
                })}
            </>
          )}
        </Lookup>
      </Field>
      {invalid && <Error>{error?.message || ''}</Error>}
      {errorMessage && <Error>{errorMessage}</Error>}
    </FieldGroup>
  );
};

export default ControlledLookup;
