import { ReactNode } from 'react';

import { Button as ButtonUI, Flex, Title as TitleUI } from 'components';
import styled, { css } from 'styled-components';
import { ISpace } from 'theme/space';

export const Main = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    width: 100%;
    margin-top: -3px;
    background: ${theme.colors.bg[700]};
    border: 4px solid ${theme.colors.base[400]};
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    overflow: hidden;
  `,
);

export const Title = styled(TitleUI).attrs(() => ({
  colorKey: 'secondary',
  size: 'displaySmall',
}))`
  line-height: 1;
`;

export const FlexContent = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    background: ${theme.colors.bg[400]};
    border-radius: 0.5rem;
    overflow: hidden;
  `,
);

export const Scrollable = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);

export const Module = (props: { children: ReactNode; gap?: keyof ISpace }) => {
  return (
    <FlexContent>
      <Scrollable>
        <Flex direction="column" gap={props.gap || 'xxSmall'}>
          {props.children}
        </Flex>
      </Scrollable>
    </FlexContent>
  );
};

export const ActionButtons = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 3rem;
    gap: ${theme.space.regular};
  `,
);

export const Button = styled(ButtonUI)(
  () => css`
    width: 100%;
    padding: 0;
  `,
);
