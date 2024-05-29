import styled, { css } from 'styled-components';
import { media } from 'theme/mixins';

import type { MarkdownProps } from '.';

type WrapperProps = Pick<Required<MarkdownProps>, 'isLongForm'>;

export const Wrapper = styled.span<WrapperProps>(
  ({ isLongForm, theme }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:nth-child(n + 2) {
        margin-top: ${isLongForm ? theme.space.large : theme.space.regular};
      }
    }

    ul,
    ol {
      margin-left: 1rem;
    }

    p,
    ul,
    ol {
      &:nth-child(n + 2) {
        margin-top: ${isLongForm ? theme.space.small : theme.space.xSmall};
      }
    }

    li {
      &:nth-child(n + 2) {
        margin-top: ${theme.space.xxSmall};
      }
    }

    a {
      text-decoration: underline;

      ${media.hover} {
        &:hover {
          text-decoration: none;
        }
      }
    }
  `,
);
