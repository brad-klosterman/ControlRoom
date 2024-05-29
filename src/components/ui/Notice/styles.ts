import type { ComponentPropsWithoutRef } from 'react';

import styled, { css, DefaultTheme, StyledProps } from 'styled-components';

export interface NoticeStyleProps extends ComponentPropsWithoutRef<'div'> {
  variant?: Variant;
}

export interface VariantStyle {
  background: string;
  color: string;
}

export type Variant = 'primary' | 'warning' | 'error';

export type NoticeVariants = {
  [variant in Variant]: VariantStyle;
};

export const getVariant = (
  { error, primary, text, warning }: DefaultTheme['colors'],
  variant: Variant,
): VariantStyle =>
  ({
    error: {
      background: error[100],
      color: error[700],
    },
    primary: {
      background: primary[100],
      color: text.emphasise,
    },
    warning: {
      background: warning[200],
      color: warning[900],
    },
  }[variant]);

export const getVariantStyle = ({
  theme,
  variant = 'primary',
}: StyledProps<NoticeStyleProps>) => {
  const variantStyles = getVariant(theme.colors, variant);
  return css`
    color: ${variantStyles.color};
    background: ${variantStyles.background};
  `;
};

export const Wrapper = styled.div<NoticeStyleProps>(
  ({ theme, variant }) => css`
    position: relative;
    padding: ${theme.space.xSmall} ${theme.space.small} ${theme.space.xSmall}
      calc(${theme.space.xLarge} + 4px);
    border-radius: 3px;
    ${getVariantStyle({ theme, variant })}

    svg {
      position: absolute;
      top: 50%;
      left: calc((${theme.space.xLarge} / 2) + 2px);
      transform: translate(-50%, -50%);
    }
  `,
);
