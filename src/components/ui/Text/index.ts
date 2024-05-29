import styled, { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { truncateText } from 'theme/mixins';
import { mapSides } from 'utils';

export interface TextProps {
  colorKey?: keyof DefaultTheme['colors']['text'];
  isBold?: boolean;
  isTruncated?: boolean;
  isUnderlined?: boolean;
  margin?: Parameters<typeof mapSides>[0];
  padding?: Parameters<typeof mapSides>[0];
  size?: keyof DefaultTheme['typography']['fontSize'];
}

const Text = styled.p<TextProps>(
  ({
    colorKey,
    isBold = false,
    isTruncated = false,
    isUnderlined = false,
    margin,
    padding,
    size = 'regular',
    theme,
  }) => css`
    ${isTruncated && truncateText}
    padding: ${padding ? mapSides(padding) : 0};
    margin: ${margin ? mapSides(margin) : 0};
    color: ${!!colorKey && theme.colors.text[colorKey]};
    font-weight: ${isBold && theme.typography.fontWeight.huge};
    font-size: ${theme.typography.fontSize[size]};
    text-decoration: ${isUnderlined && 'underline'};
    letter-spacing: 1px;
    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }

      &:focus,
      &:active {
        outline: 1px solid currentColor;
      }
    }
  `,
);

export default Text;
