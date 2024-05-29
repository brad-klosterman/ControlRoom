/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { transition } from 'utils';

import { Wrapper as Unit } from './Unit/styles';
import { Wrapper as Icon } from '../../Icon/styles';
import { Wrapper as IconButton } from '../../IconButton/styles';
import { CSSProperties } from 'react';

export interface WrapperProps {
  busy?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  highlighted?: boolean;
  isTextArea?: boolean;
  small?: boolean;
  marginTop?: boolean;
  style?: CSSProperties;
}

export const Wrapper = styled.div<WrapperProps>(
  ({
    busy,
    disabled,
    error,
    highlighted,
    isTextArea,
    marginTop = true,
    readonly,
    small,
    theme,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: ${marginTop ? '0.5rem' : 0};
    ${small &&
    css`
      margin-top: ${marginTop ? '0.25rem' : 0};
    `}
    ${isTextArea
      ? css`
          flex-direction: column;
          height: 100%;
          padding-top: ${theme.space.small};
          padding-bottom: ${theme.space.small};
        `
      : css`
          height: ${small ? '2.5rem' : '3rem'};
          padding: 0 ${theme.space.small};
        `}
    font-size: ${small ? '0.75rem' : '1rem'};
    background-color: ${theme.colors.base[800]};
    border: 2px solid
      ${error
        ? theme.colors.outline.errorPrimary
        : highlighted
        ? theme.colors.outline.focusPrimary
        : theme.colors.base[200]};
    border-radius: 3px;
    cursor: ${busy
      ? 'wait'
      : `${readonly ? 'default' : disabled ? 'not-allowed' : 'auto'}`};
    transition: ${transition('background-color', 'border-color', 'box-shadow')};

    & > ${/* sc-sel */ Icon} {
      margin: 0 ${theme.space.xxSmall};
    }

    ${/* sc-sel */ Icon},
    ${/* sc-sel */ IconButton} .icon {
      color: ${error
        ? theme.colors.outline.errorPrimary
        : theme.colors.icon.primary};
    }

    ${/* sc-sel */ IconButton} {
      &:active,
      &:hover {
        .icon {
          color: ${error
            ? theme.colors.outline.errorPrimary
            : theme.colors.icon.emphasise};
        }
      }

      &:hover {
        color: ${error
          ? theme.colors.outline.errorPrimary
          : theme.colors.icon.emphasise};
        background: ${error
          ? theme.colors.error[100]
          : theme.colors.primary[500]};
      }

      &:active {
        background: ${error
          ? theme.colors.error[200]
          : theme.colors.primary[500]};
      }

      &:focus {
        background: ${theme.colors.base[800]};
        border: 0 solid
          ${error
            ? theme.colors.outline.errorPrimary
            : theme.colors.outline.focusPrimary};
        outline: none;
        box-shadow: 0 0 0 1px ${error ? theme.colors.error[200] : 'red'};

        .icon {
          color: ${error
            ? theme.colors.outline.errorPrimary
            : theme.colors.icon.emphasise};
        }
      }
    }

    ${/* sc-sel */ Unit} {
      padding: ${small
          ? `calc(${theme.space.small} - 1px)`
          : theme.space.regular}
        ${theme.space.xSmall};
    }

    ${!disabled &&
    css`
      &:focus-within {
        border-color: ${error
          ? theme.colors.outline.errorPrimary
          : theme.colors.primary[800]};
        box-shadow: 0 0 0 1px
          ${error ? theme.colors.error[200] : theme.colors.primary[400]};

        ${/* sc-sel */ Icon},
        ${/* sc-sel */ IconButton} .icon {
          color: ${error
            ? theme.colors.outline.errorPrimary
            : theme.colors.icon.emphasise};
        }
      }
    `}

    input,
    select {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      padding: 0 ${theme.space.small};
      margin: 0;
      color: ${theme.colors.text[error ? 'error' : 'primary']};
      font-size: ${small ? '0.75rem' : '1rem'};
      background: none;
      border: none;
      border-radius: 3px;
      cursor: inherit;
      appearance: none;
      pointer-events: ${disabled || busy ? 'none' : 'auto'};

      &:-webkit-autofill::first-line {
        font-size: 1rem;
      }

      &:first-child {
        margin-left: -${theme.space.small};
      }

      &:last-child {
        margin-right: -${theme.space.small};
      }

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${error
          ? theme.colors.outline.errorPrimary
          : theme.colors.background[800]};

        &:disabled {
          color: ${error ? theme.colors.error[400] : theme.colors.base[700]};
        }
      }
    }
    input[type='time'] {
      color-scheme: dark;
    }
    input[type='number'] {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    input[type='date'] {
      text-transform: uppercase;
      font-size: ${small ? '0.75rem' : '1rem'};

      &::-webkit-datetime-edit-month-field {
      }
      &::-webkit-datetime-edit-day-field {
      }
      &::-webkit-datetime-edit-year-field {
      }

      &::-webkit-clear-button {
      }
      &::-webkit-inner-spin-button {
      }
      &::-webkit-calendar-picker-indicator {
        -webkit-appearance: none;
        font-size: ${small ? '0.75rem' : '1rem'};
        margin: 0;
        color: white;
        &:hover {
          cursor: pointer;
        }
        &:active {
        }
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      font-size: ${small ? '0.75rem' : '1rem'};
      border-radius: 3px;
      -webkit-text-fill-color: ${theme.colors.text[
        error ? 'error' : 'primary'
      ]};
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.base[800]} inset !important;
      transition: background-color 5000s ease-in-out 0s;
    }

    textarea {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      padding: 0 ${theme.space.small};
      margin: 0;
      color: ${theme.colors.text[error ? 'error' : 'primary']};
      font-size: ${small ? '0.75rem' : '1rem'};
      background: none;
      border: none;
      border-radius: 3px;
      cursor: inherit;
      appearance: none;
      pointer-events: ${disabled || busy ? 'none' : 'auto'};
      resize: none;
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${error
          ? theme.colors.outline.errorPrimary
          : theme.colors.base[700]};

        &:disabled {
          color: ${error ? theme.colors.error[400] : theme.colors.base[700]};
        }
      }
    }
  `,
);
