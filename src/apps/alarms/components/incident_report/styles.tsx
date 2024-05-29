import { Icon, Text } from 'components';
import styled, { css } from 'styled-components';
import { toUpperSentence } from 'utils';

export const Container = styled.div(
  ({ theme }) => css`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: ${theme.space.small};
  `,
);

export const ItemWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-basis: 33.33333%;
    width: 100%;
    //padding: ${theme.space.small} ${theme.space.small} 0 ${theme.space.small};
  `,
);

export const TextWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    //padding: ${theme.space.small} ${theme.space.small} 0 ${theme.space.small};
  `,
);

export const ItemInner = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.base[600]};
    border-radius: 0.5rem;
    padding: ${theme.space.small};
    gap: ${theme.space.xSmall};
  `,
);

export const Row = (props: { label: string; value: boolean }) => {
  if (!props.value) return null;
  return (
    <ItemWrap>
      <ItemInner>
        {props.value ? (
          <Icon.Tick colorKey={'emphasise'} />
        ) : (
          <Icon.Cross colorKey={'error'} />
        )}
        <Text size="labelRegular" style={{ lineHeight: 1 }}>
          {toUpperSentence(props.label)}
        </Text>
      </ItemInner>
    </ItemWrap>
  );
};
