import { normalize } from 'styled-normalize';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    ${normalize};

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      text-decoration: none;
      border: none;
      outline: none;
    }

    html,
    body {
      height: 100%;
    }

    body {
      overscroll-behavior: none;
      color: ${theme.colors.text.primary};
      font-size: ${theme.typography.baseFontSize};
      text-rendering: optimizeLegibility;
      background-color: rgba(40, 46, 49, 1);
    }

    a {
      color: inherit;
    }
  `,
);

export default GlobalStyle;
