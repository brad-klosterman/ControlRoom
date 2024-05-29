import React, { ReactNode } from 'react';

import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const ExpandedContainer = styled.div<{
  full_border?: boolean;
}>(
  ({ full_border = false, theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space.large};
    background: ${theme.colors.table.content};
    border-top: ${full_border ? '4px' : 0} solid ${theme.colors.table.border};
    border-right: 4px solid ${theme.colors.table.border};
    border-left: 4px solid ${theme.colors.table.border};
    border-bottom: 4px solid ${theme.colors.table.border};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  `
);

export const ExpandedInner = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    gap: ${theme.space.large};
    padding: ${theme.space.xxLarge};
  `
);

const Expanded = (props: { children: ReactNode; full_border?: boolean }) => {
  return (
    <ExpandedContainer full_border={props.full_border}>
      {props.children}
    </ExpandedContainer>
  );
};

Expanded.Inner = ExpandedInner;

export default Expanded;
