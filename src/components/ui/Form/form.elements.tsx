import { Button, Flex, Grid, Icon, Text } from 'components';
import styled, { css } from 'styled-components';

export const FormGrid = styled(Grid).attrs(() => ({
  spacing: 'xxLarge',
}))`
  width: 100%;
  height: 100%;
`;

export const FormGridCol = styled(Grid).attrs(() => ({
  spacing: 'regular',
}))`
  width: 100%;
`;

export const Add = (props: {
  onClick(): void;
  disabled?: boolean;
  text?: string;
}) => {
  return (
    <Flex alignItems="flex-end">
      <Button
        disabled={props.disabled}
        onClick={props.onClick}
        style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}
        variant="other-secondary"
      >
        <Icon.Plus />
        {props.text && props.text}
      </Button>
    </Flex>
  );
};

export const Update = (props: {
  onClick(): void;
  disabled?: boolean;
  text?: string;
}) => {
  return (
    <Flex alignItems="flex-end">
      <Button
        disabled={props.disabled}
        onClick={props.onClick}
        variant="secondary"
      >
        {props.text || 'UPDATE'}
      </Button>
    </Flex>
  );
};

export const Delete = (props: {
  onClick(): void;
  disabled?: boolean;
  text?: string;
  size?: 'small' | 'regular' | 'large' | undefined;
}) => {
  return (
    <Flex alignItems="flex-end">
      <Button
        disabled={props.disabled}
        onClick={props.onClick}
        // size={props.size}
        style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}
        variant="delete"
      >
        <Icon.Trash />
        {props.text && props.text}
      </Button>
    </Flex>
  );
};

export const Actions = styled.div<{
  visible?: boolean;
}>(
  ({ theme, visible = true }) => css`
    display: ${visible ? 'flex' : 'none'};
    gap: ${theme.space.regular};
    justify-content: flex-end;
    width: 100%;
  `,
);

export const Save = styled(Button).attrs(() => ({
  variant: 'primary',
}))`
  padding: 0;
  width: 100%;
  max-width: 7rem;
`;

export const Cancel = styled(Button).attrs(() => ({
  variant: 'delete',
}))`
  padding: 0;
  width: 100%;
  max-width: 7rem;
`;

export const Label = styled(Text).attrs(() => ({
  as: 'label',
  colorKey: 'secondary',
  size: 'regular',
}))`
  margin-bottom: 0.5rem;
`;

export const Divider = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.outline.default};
  `,
);
