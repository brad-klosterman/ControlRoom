import styled, { css } from 'styled-components';

import type { SkeletonProps } from '.';

function calculateRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type RequiredProps = Pick<
  Required<SkeletonProps>,
  'align' | 'size' | 'variant'
>;

type OptionalProps = Pick<Partial<SkeletonProps>, 'width'>;
type WrapperProps = RequiredProps & OptionalProps;

export const Wrapper = styled.span<WrapperProps>(
  ({ align, size, theme, variant, width }) => css`
    display: flex;
    align-items: center;
    justify-content: ${{
      center: 'center',
      left: 'flex-start',
      right: 'flex-end',
    }[align]};
    width: ${width || '100%'};

    &:before {
      display: block;
      width: ${{
        full: () => 100,
        fullRandom: () => calculateRandomNumber(75, 100),
        large: () => 75,
        largeRandom: () => calculateRandomNumber(50, 75),
        medium: () => 50,
        mediumRandom: () => calculateRandomNumber(25, 50),
        random: () => calculateRandomNumber(0, 100),
        small: () => 25,
        smallRandom: () => calculateRandomNumber(0, 25),
      }[size]()}%;
      height: ${theme.space.xxSmall};
      background-color: ${{
        dark: theme.colors.background[600],
        light: theme.colors.outline.default,
      }[variant]};
      content: '';
    }
  `,
);
