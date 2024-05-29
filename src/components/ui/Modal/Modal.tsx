import { memo, useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';

import { AlarmTypeSelector } from '@admin/alarm_management/types_config/selector';
import { maskToCurrency } from 'components/ui/Form/Field/MaskedInput/currency.input';
import ControlledMultiSelect from 'components/ui/Form/Field/MultiSelect/controlled';

import Button, { ButtonVariants } from '../Button';
import Form from '../Form';

import ModalProvider from './provider';
import {
  ModalOverlay,
  ModalContainer,
  ModalBoxAnimated,
  ModalInner,
  ModalContent,
  ModalActionButtons,
  ModalFormContent,
} from './styles';
import type { ModalActionButton } from './types';
import { DEFAULT_MODAL_Z_INDEX } from './modal.config';
import { ModalTitle } from './ModalTitle';

const ModalComponent = () => {
  const { close, content, isOpen } = ModalProvider.useContext();

  const [is_submit_loading, setIsSubmitLoading] = useState(false);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (isOpen && content?.form?.length) {
      reset(
        content.form.reduce(
          (acc, cur) => ({
            ...acc,
            [cur.name]: cur.default_value,
          }),
          {} as FieldValues,
        ),
      );
    } else {
      reset();
    }
  }, [isOpen, content?.form]);

  const isConfirmationAction = (action: ModalActionButton): boolean => {
    return action.type === 'confirm' || action.type === 'confirm_dangerous';
  };

  // This is potentially coupled with the parent.
  //
  // Ideally, the determination of this loading should
  // be tied with the action or have a stronger interface
  // for it to be clear. This is not ideal and could lead
  // to confusion or bugs.
  //
  // However, without a complete refactor, this is the only way in a short term...
  const isActionLoading = (action: ModalActionButton): boolean => {
    return isConfirmationAction(action) && is_submit_loading;
  };

  const onActionButtonClick = (action: ModalActionButton) => {
    if (action.handleClick) {
      action.handleClick();
    }

    if (content?.onConfirm && isConfirmationAction(action)) {
      setIsSubmitLoading(true);

      handleSubmit(content.onConfirm)().finally(() => {
        setIsSubmitLoading(false);
      });
    }

    if (action.type === 'cancel') {
      close();
      reset();
    }
  };

  const getActionButtonVariant = (
    button_config: ModalActionButton,
  ): ButtonVariants | undefined => {
    if (button_config.variant) {
      return button_config.variant;
    }

    if (button_config.type) {
      switch (button_config.type) {
        case 'confirm':
          return 'primary';
        case 'confirm_dangerous':
          return 'dangerous';
        case 'cancel':
          return 'other-secondary';
        case 'delete':
          return 'dangerous';
      }
    }

    return undefined;
  };

  const getActionButtonText = (
    button_config: ModalActionButton,
  ): string | undefined => {
    if (button_config.text) {
      return button_config.text;
    }

    if (button_config.type) {
      switch (button_config.type) {
        case 'confirm':
          return 'CONFIRM';
        case 'confirm_dangerous':
          return 'CONFIRM';
        case 'cancel':
          return 'CANCEL';
        case 'delete':
          return 'DELETE';
      }
    }

    return undefined;
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay z_index={DEFAULT_MODAL_Z_INDEX} />
      <AnimatePresence>
        <ModalContainer z_index={DEFAULT_MODAL_Z_INDEX + 1}>
          <ModalBoxAnimated>
            <ModalInner>
              <ModalTitle
                title={content?.title}
                subtitle={content?.subtitle}
                info={content?.info}
              />
              {content?.component && content.component()}
              {!!content?.form?.length && (
                <ModalContent layout>
                  <ModalFormContent>
                    {content.form.map(field => {
                      if (field.type === 'Input') {
                        return (
                          <Form.Input
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'Select') {
                        return (
                          <Form.Select
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            options={field.options}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'MultiSelect') {
                        return (
                          <ControlledMultiSelect
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            options={field.options}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'DatePicker') {
                        return (
                          <Form.DatePicker
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'MonthPicker') {
                        return (
                          <Form.DatePicker
                            {...{ control }}
                            custom_selection_type="start_of_month"
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'Currency') {
                        return (
                          <Form.MaskedInput
                            beforeMaskedStateChange={maskToCurrency}
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            mask="9999999999999999999"
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'AlarmTypes') {
                        return (
                          <Controller
                            {...{ control }}
                            key={`${field.name}-field`}
                            name={field.name}
                            render={({ field: { onChange, value } }) => (
                              <AlarmTypeSelector
                                selected={value}
                                setSelected={v => onChange(v ?? null)}
                              />
                            )}
                          />
                        );
                      }

                      if (field.type === 'TextArea') {
                        return (
                          <Form.TextArea
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                          />
                        );
                      }

                      if (field.type === 'Time') {
                        return (
                          <Form.Input
                            {...{ control }}
                            key={`${field.name}-field`}
                            label={field.label}
                            name={field.name}
                            rules={{
                              required: field.required,
                            }}
                            type="time"
                          />
                        );
                      }

                      return null;
                    })}
                  </ModalFormContent>
                </ModalContent>
              )}
              {content?.actions?.length && (
                <ModalActionButtons layout>
                  {content.actions.map((action: ModalActionButton, index) => (
                    <Button
                      disabled={action.type === 'confirm' && !formState.isValid}
                      isLoading={isActionLoading(action)}
                      key={index + 'modal_field'}
                      onClick={() => onActionButtonClick(action)}
                      style={{ minWidth: '14rem' }}
                      variant={getActionButtonVariant(action)}
                    >
                      {getActionButtonText(action)}
                    </Button>
                  ))}
                </ModalActionButtons>
              )}
            </ModalInner>
          </ModalBoxAnimated>
        </ModalContainer>
      </AnimatePresence>
    </>
  );
};

export default memo(ModalComponent);
