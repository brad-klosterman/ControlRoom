import { PropsWithChildren, ReactElement } from 'react';

import { Flex } from 'components';
import { Expander } from 'components/ui/Expander';
import styled, { css } from 'styled-components';

// FORM EXPANDER
export type FormExpanderProps = {
  readonly children: ReactElement<PropsWithChildren<FormExpanderItemProps>>[];
};

export type FormExpanderItemProps = {
  expanded?: boolean;
};

const FormExpander = (props: FormExpanderProps) => {
  return (
    <Flex direction="column" fitWidth gap="small">
      <Expander>{props.children}</Expander>
    </Flex>
  );
};

const FormExpanderRow = styled(Flex)<FormExpanderItemProps>(
  ({ expanded, theme }) => css`
    height: 4rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.space.regular};
    cursor: pointer;
    background-color: ${theme.colors.base[400]};
    border: 2px solid ${theme.colors.base[300]};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: ${expanded ? 0 : '0.5rem'};
    border-bottom-right-radius: ${expanded ? 0 : '0.5rem'};
    border-bottom: 2px solid
      ${expanded ? 'transparent' : theme.colors.base[100]};
    &:hover {
      background-color: ${theme.colors.base[300]};
    }
  `,
);

const FormExpanderContent = styled(Flex)(
  ({ theme }) => css`
    gap: ${theme.space.regular};
    width: 100%;
    padding: ${theme.space.large};
    margin-top: -2px;
    background-color: ${theme.colors.bg[500]};
    border: 2px solid ${theme.colors.base[100]};
    border-top: 0;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  `,
);

FormExpander.Row = FormExpanderRow;
FormExpander.Content = FormExpanderContent;

export default FormExpander;
