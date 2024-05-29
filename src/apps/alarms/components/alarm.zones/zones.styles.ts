import { Text } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    scrollbar-gutter: stable;
    border-radius: 0.5rem;
  `
);

export const RowInner = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    min-height: 4rem;
    margin: 0 ${theme.space.regular};
    // padding-left: ${theme.space.xxSmall};
    border-bottom: 2px solid ${theme.colors.base[100]};
  `
);

export const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 4rem;
    background: ${theme.colors.base[400]};
    &:last-of-type {
      ${RowInner} {
        border-bottom: none;
      }
    }
  `
);

export const Indicator = styled.div<{
  isNew: boolean;
}>(
  ({ isNew, theme }) => css`
    display: flex;
    width: 3px;
    height: 100%;
    background: ${isNew ? theme.colors.error[500] : 'transparent'};
  `
);

export const Time = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 6rem;
    border-right: solid 3px;
    border-right-color: ${theme.colors.base[100]};
    padding: ${theme.space.small} 0;
  `
);

export const TimeText = styled(Text)(
  () => css`
    text-align: justify;
    text-justify: inter-word;
    line-height: 1;
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 ${theme.space.regular};
    gap: ${theme.space.xxSmall};
  `
);
