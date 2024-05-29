import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Flex, Text } from 'components';

const TitleContainer = styled(Flex)(
  () => css`
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  `,
);

const ContentGridHeader = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.space.large};
    gap: ${theme.space.large};
    width: 100%;
    border-top: 2px solid ${theme.colors.base[100]};
    border-bottom: 2px solid ${theme.colors.base[100]};
  `,
);

const ContentGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 ${theme.space.large};
    gap: ${theme.space.large};
    width: 100%;
  `,
);

const ContentGridCell = styled.div(
  () => css`
    width: 100%;
    overflow: hidden;
  `,
);

const ViewJSONLink = styled(Text)(
  ({ theme }) => css`
    color: ${theme.colors.text.emphasise};
    font-size: ${theme.typography.fontSize.displaySmall};
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  `,
);

const ModalContentContainer = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.base[300]};
    margin-top: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
  `,
);

const ModalContentInner = styled(Flex)(
  () => css`
    width: 100%;
    height: 100%;
    max-height: 60vh;
    inset: 0;
    overflow-y: auto;
    scrollbar-gutter: stable;
    pre {
      margin: 2rem;
      line-height: 1.5;
      font-size: 1.25rem;
      font-family: 'Inter', 'Arial', sans-serif;
    }
  `,
);

const JSONModalContent = (props: { children: ReactElement }) => {
  return (
    <ModalContentContainer>
      <ModalContentInner>{props.children}</ModalContentInner>
    </ModalContentContainer>
  );
};

export {
  TitleContainer,
  ContentGridHeader,
  ContentGrid,
  ContentGridCell,
  ViewJSONLink,
  JSONModalContent,
};
