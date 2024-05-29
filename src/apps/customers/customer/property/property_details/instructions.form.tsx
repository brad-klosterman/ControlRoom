import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { UPDATE_PROPERTY_DETAILS_PARAMS } from 'codegen/graphql';
import { Checkbox, Flex, Form, Grid, Text } from 'components';
import { ControlledDatePicker } from 'components/ui/DatePicker/controlled';
import { BasicSelect } from 'components/ui/Form/Field/Select/select.components';

import {
  IOptionInstruction,
  PROPERTY_INSTRUCTION_TYPES_OPTIONS,
} from './form.values';

const InstructionsForm = ({ readonly }: { readonly: boolean }) => {
  const form = useFormContext<UPDATE_PROPERTY_DETAILS_PARAMS>();

  const holiday_start = form.watch('instructions.HOLIDAY.validity_start');
  const holiday_end = form.watch('instructions.HOLIDAY.validity_end');

  const [selected_instruction, setSelectedInstruction] =
    useState<IOptionInstruction>(PROPERTY_INSTRUCTION_TYPES_OPTIONS[0]);

  const [holiday_mode_enabled, setHolidayModeEnabled] = useState<boolean>(
    Boolean(holiday_start && holiday_end),
  );

  useEffect(() => {
    if (holiday_start && holiday_end) {
      setHolidayModeEnabled(Boolean(holiday_start && holiday_end));
    }
  }, [holiday_start, holiday_end]);

  const toggleHolidayMode = (value: boolean) => {
    if (!value) {
      form.setValue('instructions.HOLIDAY.validity_start', null);
      form.setValue('instructions.HOLIDAY.validity_end', null);
    }

    setHolidayModeEnabled(value);
  };

  return (
    <>
      <Grid.Cell x={[0, 12]} y={[0, 1]}>
        <Form.Input
          control={form.control}
          disabled={readonly}
          label="Property Code"
          name="code"
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 6]} y={[1, 2]}>
        <Form.Password
          control={form.control}
          disabled={readonly}
          permissions={{ view: !readonly }}
          label="Property Password"
          name="password"
        />
      </Grid.Cell>
      <Grid.Cell x={[6, 12]} y={[1, 2]}>
        <Form.Password
          control={form.control}
          disabled={readonly}
          permissions={{ view: !readonly }}
          label="Duress Password"
          name="duress_password"
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[2, 3]}>
        <BasicSelect<IOptionInstruction>
          id="property-instructions"
          label="Property Instructions"
          options={PROPERTY_INSTRUCTION_TYPES_OPTIONS}
          selected={selected_instruction}
          setSelected={option => setSelectedInstruction(option)}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[3, 4]}>
        {selected_instruction.value === 'AGENT' && (
          <Form.TextArea
            control={form.control}
            disabled={readonly}
            label="Agent Instructions"
            name="instructions.AGENT.note"
          />
        )}
        {selected_instruction.value === 'NOTE' && (
          <Form.TextArea
            control={form.control}
            disabled={readonly}
            label="Note Instructions"
            name="instructions.NOTE.note"
          />
        )}
        {selected_instruction.value === 'RESPONDER' && (
          <Form.TextArea
            control={form.control}
            disabled={readonly}
            label="Responder Instructions"
            name="instructions.RESPONDER.note"
          />
        )}
        {selected_instruction.value === 'KEY' && (
          <Form.TextArea
            control={form.control}
            disabled={readonly}
            label="Key Instructions"
            name="instructions.KEY.note"
          />
        )}
      </Grid.Cell>
      <Grid.Cell direction="column" spacing="regular" x={[0, 12]} y={[4, 5]}>
        <Flex>
          <Checkbox
            onChange={value => toggleHolidayMode(value)}
            value={holiday_mode_enabled}
            disabled={readonly}
          />
          <Text style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
            Enable Holiday Mode
          </Text>
        </Flex>
        {holiday_mode_enabled && (
          <>
            <Form.TextArea
              control={form.control}
              label="Holiday Instruction"
              name="instructions.HOLIDAY.note"
              disabled={readonly}
            />
            <Flex fitWidth gap="regular">
              <ControlledDatePicker
                control={form.control}
                label="Holiday Start Date"
                name="instructions.HOLIDAY.validity_start"
                disabled={readonly}
              />
              <ControlledDatePicker
                control={form.control}
                label="Holiday End Date"
                name="instructions.HOLIDAY.validity_end"
                disabled={readonly}
              />
            </Flex>
          </>
        )}
      </Grid.Cell>
    </>
  );
};

export default InstructionsForm;
