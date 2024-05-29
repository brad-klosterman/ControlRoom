import styled, { css } from 'styled-components';
import { media } from 'theme/mixins';

export interface OptionProps {
  active: boolean;
  onClick?(e?: MouseEvent): void;
  selected: boolean;
  showBorder?: boolean;
}

export const Option = styled.div<OptionProps>(
  ({ active, selected, showBorder, theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${theme.space.small} ${theme.space.regular};
    gap: ${theme.space.regular};
    color: ${!active ? 'inherit' : 'inherit'};
    //font-weight: ${selected ? 900 : 300};
    text-align: left;
    background: ${!selected
      ? theme.colors.base[800]
      : `${theme.colors.base[600]} !important`};
    border: 0;
    cursor: pointer;

    ${media.hover} {
      &:hover {
        background: ${!selected
          ? theme.colors.base[400]
          : `${theme.colors.base[400]} !important`};
      }
    }

    &:active {
      background: ${!selected
        ? theme.colors.base[500]
        : `${theme.colors.base[600]} !important`};

      // .icon {
      //   position: absolute;
      //   top: 50%;
      //   right: ${theme.space.regular};
      //   color: ${theme.colors.text.emphasise};
      //   transform: translateY(-50%);
      // }
    }

    ${showBorder &&
    css`
      display: block;
      border-bottom: 1px solid ${theme.colors.outline.default};

      &:last-of-type {
        border-bottom: none;
      }
    `}
  `
);

export default Option;
