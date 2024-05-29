import styled, { css } from 'styled-components';
import { transition } from 'utils';

const TOGGLE_SIZE = '1.5rem';
const TOGGLE_PADDING = '0px';

export const Wrapper = styled.label`
  display: inline-flex;
  flex-wrap: no-wrap;
  align-items: center;
`;

export const Input = styled.input`
  /* Hidden but still accessible */
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const Switch = styled.span(
  ({ theme }) => css`
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(${TOGGLE_SIZE} * 2 + 4px);
    height: calc(${TOGGLE_SIZE} + 4px);
    overflow: hidden;
    background-color: ${theme.colors.grey[100]};
    border-radius: ${TOGGLE_SIZE};
    border: 1px solid;
    border-color: ${theme.colors.grey[100]};
    cursor: pointer;
    transition: ${transition('background-color', 'box-shadow')};

    ${/* sc-sel */ Input}[disabled] + & {
      background-color: ${theme.colors.background[200]};
      border-color: ${theme.colors.background[200]};
      cursor: not-allowed;
    }

    ${/* sc-sel */ Input}[aria-invalid='true'] + & {
      background-color: ${theme.colors.error[500]};
      border-color: ${theme.colors.error[500]};
    }

    ${/* sc-sel */ Input}:focus + &,
    ${/* sc-sel */ Input}:active + & {
      // box-shadow: 0 0 0 3px ${theme.colors.background[200]};
    }

    ${/* sc-sel */ Input}:indeterminate + &,
    ${/* sc-sel */ Input}:checked + & {
      background-color: ${theme.colors.primary[500]};
      border-color: ${theme.colors.primary[500]};
    }

    ${/* sc-sel */ Input}[disabled]:indeterminate + &,
    ${/* sc-sel */ Input}[disabled]:checked + & {
      background-color: ${theme.colors.primary[500]};
      border-color: ${theme.colors.primary[500]};
    }

    ${/* sc-sel */ Input}[disabled][aria-invalid='true'] + & {
      background-color: ${theme.colors.error[300]};
      border-color: ${theme.colors.error[300]};
    }

    ${/* sc-sel */ Input}:checked:focus + &,
    ${/* sc-sel */ Input}:checked:active + & {
      // box-shadow: 0 0 0 3px ${theme.colors.primary[200]};
    }

    ${/* sc-sel */ Input}[aria-invalid='true']:focus + &,
    ${/* sc-sel */ Input}[aria-invalid='true']:active + &,
    ${/* sc-sel */ Input}[aria-invalid='true']:checked:focus + &,
    ${/* sc-sel */ Input}[aria-invalid='true']:checked:active + & {
      // box-shadow: 0 0 0 3px ${theme.colors.error[300]};
    }
  `,
);

export const Toggle = styled.span(
  ({ theme }) => css`
    position: relative;
    display: block;
    width: ${TOGGLE_SIZE};
    height: ${TOGGLE_SIZE};
    transform: translate3d(0, 0, 0);
    transition: ${transition('transform')};

    ${/* sc-sel */ Input}:indeterminate + ${/* sc-sel */ Switch} & {
      transform: translate3d(50%, 0, 0);
    }

    ${/* sc-sel */ Input}:checked + ${/* sc-sel */ Switch} & {
      transform: translate3d(100%, 0, 0);
    }

    &::after {
      position: absolute;
      top: ${TOGGLE_PADDING};
      right: ${TOGGLE_PADDING};
      bottom: ${TOGGLE_PADDING};
      left: ${TOGGLE_PADDING};
      display: block;
      background-color: ${theme.colors.background[100]};
      border-radius: 50%;
      content: '';
    }
  `,
);

export const IconWrapper = styled.span(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1px 2px 0px 1px;
    color: ${theme.colors.grey[600]};
    transition: ${transition('color', 'opacity')};

    &:first-child {
      right: 100%;
      justify-content: flex-end;
    }

    &:last-child {
      left: 100%;
      justify-content: flex-start;
      color: ${theme.colors.grey[400]};
    }

    ${/* sc-sel */ Input}:indeterminate + ${/* sc-sel */ Switch} & {
      opacity: 0;
    }

    &:last-child ${/* sc-sel */ Input}[aria-invalid='true'] + ${
      /* sc-sel */ Switch
    } & {
      color: ${theme.colors.background[100]};
    }
  `,
);

export const Content = styled.span(
  ({ theme }) => css`
    display: block;
    margin-left: ${theme.space.regular};
  `,
);
