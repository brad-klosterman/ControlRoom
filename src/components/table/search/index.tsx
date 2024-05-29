import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  Controller,
  DeepPartial,
  FieldValues,
  Path,
  PathValue,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { AlarmTypeSelector } from 'apps/admin/alarm_management/types_config/selector';
import { ControlledTransmitterSelector } from 'apps/admin/company_settings/transmitters/selector';
import { RouteName } from 'apps/dashboard/style';
import { Button, Flex, Form } from 'components';
import { useEventListener } from 'utils';
import { removeNullFields } from 'utils/filtering/removeNullFields';
import {
  AdvancedLink,
  Container,
  ExpandedSearch,
} from 'components/table/search/styles';
import { ControlledDatePicker } from 'components/ui/DatePicker/controlled';
import ControlledMultiSelect from 'components/ui/Form/Field/MultiSelect/controlled';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';

import { SearchBarField, SearchBarProps } from './types';

function SearchBar<T extends FieldValues>(props: SearchBarProps<T>) {
  const [advanced_visible, setAdvancedVisible] = useState(
    Boolean(props.default_expanded),
  );

  const default_form_value = useMemo(() => {
    return props.params.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.name]: cur.default_value ?? null,
      }),
      {} as DeepPartial<T>,
    );
  }, []);

  const form = useForm<T>({
    defaultValues: default_form_value,
  });

  const submitForm: SubmitHandler<T> = async values => {
    props.onSearch(removeNullFields(values));
  };

  const clearForm = () => {
    form.reset(default_form_value);
    form.handleSubmit(submitForm)();
  };

  useEffect(() => {
    if (props.stored_params) {
      form.reset({
        ...default_form_value,
        ...props.stored_params,
      });
    }
  }, [props.stored_params]);

  useEffect(() => {
    if (default_form_value && !props.stored_params) {
      form.handleSubmit(submitForm)();
    }
  }, []);

  const fields = useMemo(() => {
    const basic = props.params.filter(
      param => !param.advanced && !param.hidden,
    );
    const advanced = props.params.filter(
      param => param.advanced && !param.hidden,
    );

    const first_row = props.number_of_columns
      ? basic.slice(0, props.number_of_columns - 1)
      : basic;

    const basic_fields =
      props.number_of_columns &&
      basic.slice(props.number_of_columns - 1, basic.length);

    return {
      first_row,
      basic_fields,
      advanced,
    };
  }, [props.params]);

  const buildFields = (array: SearchBarField<T>[]) => {
    return (
      <>
        {array.map(field => {
          if (field.type === 'Input') {
            return (
              <Form.Input
                control={form.control}
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                small
              />
            );
          }

          if (field.type === 'InputNumber') {
            return (
              <Form.Input
                control={form.control}
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                small
                type="number"
              />
            );
          }

          if (field.type === 'Select') {
            return (
              <ControlledSelect
                control={form.control}
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                options={field.options}
                small
              />
            );
          }

          if (field.type === 'MultiSelect') {
            return (
              <ControlledMultiSelect
                control={form.control}
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                options={field.options}
                small
              />
            );
          }

          if (field.type === 'DatePicker') {
            return (
              <ControlledDatePicker
                control={form.control}
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                small
              />
            );
          }

          if (field.type === 'TransmitterSelector') {
            return (
              <ControlledTransmitterSelector
                control={form.control}
                key={`${field.name}-field`}
                name={field.name}
                small
              />
            );
          }

          if (field.type === 'AlarmTypes') {
            return (
              <Controller
                control={form.control}
                key={`${field.name}-field`}
                name={field.name}
                render={({ field: { onChange, value } }) => (
                  <AlarmTypeSelector
                    selected={value}
                    setSelected={v => onChange(v as PathValue<T, Path<T>>)}
                    small
                  />
                )}
              />
            );
          }

          if (field.type === 'MonthPicker') {
            return (
              <ControlledDatePicker
                control={form.control}
                custom_selection_type="start_of_month"
                key={`${field.name}-field`}
                label={field.label}
                name={field.name}
                small
              />
            );
          }

          return null;
        })}
      </>
    );
  };

  const groupFields = (
    arr: SearchBarField<T>[],
    size: number,
  ): SearchBarField<T>[][] => {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % size === 0) {
        res.push([arr[i]]);
      } else {
        res[res.length - 1].push(arr[i]);
      }
    }

    return res;
  };

  useEventListener('keyup', (event: KeyboardEvent | Event) => {
    if ('key' in event && event.key === 'Enter' && props.use_enter_key) {
      form.handleSubmit(submitForm)();
    }
  });

  const buttons = (
    <Flex alignItems="flex-end" fitWidth gap="small">
      <Button
        disabled={form.formState.isLoading}
        onClick={clearForm}
        size="small"
        style={{ width: '100%' }}
        variant="other-secondary"
      >
        CLEAR
      </Button>
      <Button
        //disabled={isEmptyNull(form.formState.dirtyFields)}
        isLoading={form.formState.isLoading}
        onClick={form.handleSubmit(submitForm)}
        size="small"
        style={{ width: '100%' }}
      >
        SEARCH
      </Button>
    </Flex>
  );

  return (
    <AnimatePresence>
      <Container>
        {props.title && (
          <Flex
            fitWidth
            justifyContent="space-between"
            style={{ paddingTop: '2rem' }}
          >
            <RouteName isBold size="displayLarge">
              {props.title}
            </RouteName>
            {fields.advanced.length > 0 && (
              <AdvancedLink
                expanded={advanced_visible}
                onClick={() => setAdvancedVisible(prev => !prev)}
              />
            )}
          </Flex>
        )}
        <Flex alignItems="flex-end" gap="regular" style={{ padding: '2rem 0' }}>
          {buildFields(fields.first_row)}
          {buttons}
        </Flex>
        {fields.basic_fields && props.number_of_columns && (
          <Flex fitWidth gap="xLarge">
            {groupFields(fields.basic_fields, props.number_of_columns).map(
              row => (
                <Flex
                  alignItems="flex-end"
                  fitWidth
                  gap="regular"
                  key={row[0].name}
                  style={{ paddingBottom: '2rem' }}
                >
                  {buildFields(row)}
                </Flex>
              ),
            )}
          </Flex>
        )}
        <AnimatePresence mode="wait">
          {advanced_visible && (
            <ExpandedSearch>
              {groupFields(fields.advanced, fields.first_row.length + 1).map(
                row => (
                  <Flex
                    alignItems="flex-end"
                    fitWidth
                    gap="regular"
                    key={row[0].name}
                    style={{ paddingBottom: '2rem' }}
                  >
                    {buildFields(row)}
                  </Flex>
                ),
              )}
            </ExpandedSearch>
          )}
        </AnimatePresence>
      </Container>
    </AnimatePresence>
  );
}

export default SearchBar;
