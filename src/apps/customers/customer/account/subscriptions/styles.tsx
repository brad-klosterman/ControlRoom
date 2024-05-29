import { ReactElement, ReactNode, useEffect } from 'react';

import { Button, Flex, Grid } from 'components';
import { useExpanderContext } from 'components/ui/Expander';
import { FormExpanderItemProps } from 'components/ui/Form/form.expander';
import styled, { css } from 'styled-components';

export const CancelCreating = styled(Button)(
  () => css`
    position: absolute;
    right: 0;
    top: 0;
    border-color: transparent;
  `,
);

export const TableHeaderWrap = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    padding: 0 ${theme.space.xLarge};
  `,
);

export const TableHeader = (props: { children: ReactNode }) => (
  <TableHeaderWrap>
    <Grid spacing="regular">{props.children}</Grid>
  </TableHeaderWrap>
);

export const RowWrap = styled(Flex)<{
  expanded?: boolean;
}>(
  ({ expanded, theme }) => css`
    height: 5rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.space.xLarge};
    cursor: pointer;
    background: ${expanded ? theme.colors.base[400] : theme.colors.base[500]};
    border: 2px solid ${theme.colors.base[100]};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: ${expanded ? 0 : '0.5rem'};
    border-bottom-right-radius: ${expanded ? 0 : '0.5rem'};
    border-bottom: 2px solid
      ${expanded ? 'transparent' : theme.colors.base[100]};
    &:hover {
      background-color: ${theme.colors.base[400]};
    }
    .seon-ui-expander-arrow {
      color: ${theme.colors.base[100]};
    }
  `,
);

export const ContentWrap = styled(Flex)(
  ({ theme }) => css`
    flex-direction: row;
    gap: ${theme.space.xLarge};
    width: 100%;
    padding: ${theme.space.xLarge};
    margin-top: -2px;
    background-color: ${theme.colors.bg[400]};
    border: 2px solid ${theme.colors.base[100]};
    border-top: 0;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  `,
);

export const InvoiceContainer = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    gap: ${theme.space.xLarge};
    width: 100%;
    padding: ${theme.space.xLarge};
    border: 2px solid ${theme.colors.base[100]};
    border-radius: 3px;
  `,
);

export const TitleWrap = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.space.regular} 0;
    flex-direction: column;
    gap: ${theme.space.small};
  `,
);

export const InvoiceHeader = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    border-top: 2px solid ${theme.colors.outline.default};
    border-bottom: 2px solid ${theme.colors.outline.default};
    padding: ${theme.space.large} ${theme.space.small};
    justify-content: space-between;
  `,
);

export const InvoiceItems = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    padding: ${theme.space.xSmall} ${theme.space.large};
    gap: ${theme.space.xLarge};
  `,
);

export const InvoiceItemRow = styled(Flex)(
  () => css`
    width: 100%;
    justify-content: space-between;
  `,
);

export const InvoiceFooter = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    border-top: 2px solid ${theme.colors.outline.default};
    border-bottom: 2px solid ${theme.colors.outline.default};
    padding: ${theme.space.large} ${theme.space.small};
    gap: ${theme.space.regular};
  `,
);

export const InvoiceFooterRow = styled(Flex)(
  () => css`
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `,
);

export const ExpanderRow = styled(Flex)<FormExpanderItemProps>(
  ({ expanded, theme }) => css`
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.space.regular};
    cursor: pointer;
    background-color: ${theme.colors.base[400]};
    border: 2px solid ${theme.colors.base[300]};
    border-bottom: 2px solid
      ${expanded ? 'transparent' : theme.colors.base[100]};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: ${expanded ? 0 : '3px'};
    border-bottom-right-radius: ${expanded ? 0 : '3px'};
    &:hover {
      background-color: ${theme.colors.base[300]};
    }
  `,
);

export const ExpanderContent = styled(Flex)(
  ({ theme }) => css`
    gap: ${theme.space.regular};
    width: 100%;
    padding: ${theme.space.large};
    margin-top: -2px;
    background-color: ${theme.colors.bg[500]};
    border: 2px solid ${theme.colors.base[100]};
    border-top: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  `,
);

export const InvoiceExpanderContent = (props: {
  children: ReactElement;
  editing_subscription: boolean;
}) => {
  const { setExpandedKeys } = useExpanderContext();

  useEffect(() => {
    if (props.editing_subscription) setExpandedKeys(['0', '1', '2']);
  }, [props.editing_subscription]);

  return <ExpanderContent>{props.children}</ExpanderContent>;
};
