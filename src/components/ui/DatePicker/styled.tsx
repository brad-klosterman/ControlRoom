import styled, { css } from 'styled-components';
import transition from 'utils/transition';

export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    user-select: none;
    position: relative;
    width: 100%;
  `,
);

export const CalendarContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    background: ${theme.colors.base[800]};
    border: 1px solid ${theme.colors.outline.default};
    border-radius: 0.5rem;
    margin-top: 4px;
    top: 4.5rem; // todo small
    z-index: 5;
    width: calc(100% + 2px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    box-sizing: border-box;
    height: 21em;
    min-width: 300px;
    &:focus {
      outline: none;
    }
  `,
);

export const Navigation = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    color: ${theme.colors.primary[500]};
  `,
);

export const Prev = styled.div(
  () => css`
    cursor: pointer;
    svg {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
    }
  `,
);

export const Next = styled.div(
  () => css`
    cursor: pointer;
    svg {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
    }
  `,
);

type InputProps = {
  busy?: boolean;
  disabled?: boolean;
  error?: string;
  highlighted?: boolean;
  small?: boolean;
  marginTop?: boolean;
};

export const InputContainer = styled.div<InputProps>(
  ({
    busy,
    disabled,
    error,
    highlighted,
    marginTop = true,
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
    height: ${small ? '2.5rem' : '3rem'};
    padding: 0 ${theme.space.small} 0 0;
    font-size: ${small ? '0.75rem' : '1rem'};
    background-color: ${theme.colors.base[800]};
    border: 2px solid
      ${error
        ? theme.colors.outline.errorPrimary
        : highlighted
        ? theme.colors.outline.focusPrimary
        : theme.colors.base[200]};
    border-radius: 3px;
    cursor: ${busy ? 'wait' : `${disabled ? 'not-allowed' : 'auto'}`};
    transition: ${transition('background-color', 'border-color', 'box-shadow')};
    &:focus-within {
      border-color: ${error
        ? theme.colors.outline.errorPrimary
        : theme.colors.primary[800]};
      box-shadow: 0 0 0 1px
        ${error ? theme.colors.error[200] : theme.colors.primary[400]};
    }

    input {
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
      appearance: none;
      pointer-events: ${disabled || busy ? 'none' : 'auto'};

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
      cursor: pointer;
    }

    .calendar-icon {
      cursor: ${busy ? 'wait' : `${disabled ? 'not-allowed' : 'pointer'}`};
      fill: ${theme.colors.text.primary};
      position: absolute;
      top: 50%;
      right: 10px;
      height: 1.3em;
      transform: translateY(-50%);
    }
  `,
);

export const Table = styled.table(
  () => css`
    border-collapse: collapse;
    width: 100%;
    tbody {
      padding-top: 1em;
    }
  `,
);

export const Header = styled.thead(
  () => css`
    th {
      width: auto;
      border-bottom: 1px solid #2e2e2e;
      color: #999;
      font-size: 0.9em;
      text-align: center;
      vertical-align: middle;
      padding: 0;
      height: 2em;
      cursor: default;
    }
  `,
);

export const TRSpace = styled.tr(
  () => css`
    height: 0.5rem;
  `,
);

export const Today = styled.span(
  ({ theme }) => css`
    cursor: pointer;
    opacity: 0.6;
    font-weight: 700;
    font-size: 0.75em;
    text-transform: uppercase;
    padding: 1rem;
    display: block;
    &:hover {
      opacity: 1;
      color: ${theme.colors.primary[600]};
    }
  `,
);

export const Clear = styled.span(
  ({ theme }) => css`
    cursor: pointer;
    opacity: 0.6;
    font-weight: 700;
    font-size: 0.75em;
    text-transform: uppercase;
    padding: 1rem;
    display: block;
    &:hover {
      opacity: 1;
      color: ${theme.colors.error[700]};
    }
  `,
);

export const YearContainer = styled.div(
  () => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 2.5em);
    grid-gap: 5px;
  `,
);

export const MonthContainer = styled.div(
  () => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 2.5em);
    margin-top: 45px;
    grid-gap: 10px;
  `,
);

export const YearMonth = styled.div<{ selected: boolean; disabled?: boolean }>(
  ({ selected, disabled, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 0.875em;
    border: rgba(40, 167, 69, 0.17) 1px solid;
    border-radius: 5px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled
      ? theme.colors.text.secondary
      : theme.colors.text.emphasise};
    ${!disabled &&
    css`
      &:hover {
        background-color: rgba(40, 167, 69, 0.17);
        color: ${theme.colors.text.emphasise};
      }
    `}
    ${selected &&
    css`
      background-color: rgba(40, 167, 69, 0.17);
      color: ${theme.colors.text.emphasise};
    `}
  `,
);

export const Day = styled.td<{
  today: boolean;
  off_month: boolean;
  selected: boolean;
  selecting_disabled: boolean;
}>(
  ({ off_month, selected, selecting_disabled, theme, today }) => css`
    width: 14.2857142857%;
    box-sizing: border-box;
    //background: $selectable-background-color;
    color: ${theme.colors.text.primary};
    font-size: 0.875em;
    text-align: center;
    vertical-align: middle;
    //padding: 5px;
    border-collapse: collapse;
    cursor: ${selecting_disabled ? 'not-allowed' : 'pointer'};
    height: 2.5em;
    transition: background-color 0.05s ease;
    border-radius: 3px;
    border: 1px inset transparent;
    ${today &&
    css`
      font-weight: 600;
      background-color: rgba(255, 255, 255, 0.1);
    `}
    ${selected &&
    css`
      color: ${theme.colors.text.emphasise};
      background-color: rgba(40, 167, 69, 0.17);
    `}
    ${(off_month || selecting_disabled) &&
    css`
      opacity: 0.5;
    `}
    ${!selecting_disabled &&
    css`
      &:hover {
        color: ${theme.colors.text.emphasise};
        background-color: rgba(40, 167, 69, 0.17);
      }
    `}
  `,
);

export const Button = styled.button(
  ({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.outline.focusPrimary};
    border: ${theme.colors.primary[500]} 1px solid;
    border-radius: 5px;
    height: 2.5em;
    padding: 0 1em;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.primary[400]};
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.primary[100]},
        inset 0 0 0 2 ${theme.colors.primary[300]};
    }
  `,
);
