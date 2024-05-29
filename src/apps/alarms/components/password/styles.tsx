import { Button } from 'components';
import { Flex, Text } from 'components/ui';
import styled, { css } from 'styled-components';

const Wrap = styled(Flex)<{
  selected: boolean;
  locked: boolean;
  dangerous: boolean;
}>(
  ({ dangerous, locked, selected, theme }) => css`
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    gap: 0.25rem;
    padding-left: ${theme.space.regular};
    background-color: ${theme.colors.base[800]};
    border: 2px solid transparent;
    &:first-of-type {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    &:last-of-type {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    cursor: pointer;
    button {
      width: 7rem;
      padding: 0 0 0 2px;
      border: 0;
      &:hover {
        box-shadow: none;
        color: ${theme.colors.text.primary};
        background-color: ${dangerous
          ? theme.colors.error[500]
          : theme.colors.primary[500]};
      }
    }
    ${selected &&
    css`
      border-color: ${dangerous
        ? theme.colors.error[500]
        : theme.colors.primary[500]};
    `}
    ${!locked &&
    css`
      &:hover {
        border-color: ${dangerous
          ? theme.colors.error[500]
          : theme.colors.primary[500]};
      }
    `}
  `,
);

export const Row = (props: {
  selected: boolean;
  locked: boolean;
  option: string;
  onClick(): void;
  onVerify(): void;
  dangerous: boolean;
  isLoading?: boolean;
}) => {
  return (
    <Wrap
      dangerous={props.dangerous}
      locked={props.locked}
      onClick={props.onClick}
      selected={props.selected}
    >
      <Text>{props.option}</Text>
      {props.selected && (
        <Button
          isLoading={props.isLoading}
          onClick={props.onVerify}
          size="small"
          variant={props.dangerous ? 'dangerous' : 'primary'}
        >
          {props.dangerous ? 'CONTINUE' : 'VERIFY'}
        </Button>
      )}
    </Wrap>
  );
};
