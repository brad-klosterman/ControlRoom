import styled, { css } from 'styled-components';

function calculateWidth(viewBox: string) {
  const [, , width, height] = viewBox.split(' ');
  return parseFloat(width) / parseFloat(height);
}

export type Mode = 'dark' | 'light';

interface SvgProps {
  mode: string;
  viewBox: string;
}

export const Svg = styled.svg<SvgProps>(
  ({ mode, theme, viewBox }) => css`
    display: block;
    width: ${calculateWidth(viewBox)}em;
    // height: 3em;
    overflow: hidden;
    color: ${mode === 'light'
      ? theme.colors.background[100]
      : theme.colors.primary[600]};
  `,
);
