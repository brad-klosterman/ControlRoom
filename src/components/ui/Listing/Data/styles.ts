import type { Property } from 'csstype';
import { motion } from 'framer-motion';

import { Flex, Icon } from 'components';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ onClick }) => css`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 0;
    width: 100%;
    text-decoration: ${!!onClick && 'underline'};
  `,
);

export type StatusLight =
  | 'success'
  | 'inactive'
  | 'warning'
  | 'error'
  | 'info'
  | true
  | false;

export const Status = styled.div<{ status: StatusLight }>(
  ({ status, theme }) => css`
    flex: 0 0 ${theme.space.regular};
    width: ${theme.space.regular};
    height: ${theme.space.regular};
    margin-right: ${theme.space.small};
    background-color: ${status === true
      ? theme.colors.primary[700]
      : status === false
      ? theme.colors.error[500]
      : {
          error: theme.colors.error[500],
          inactive: theme.colors.grey[100],
          success: theme.colors.primary[700],
          undefined: theme.colors.error[500],
          info: theme.colors.info[500],
          warning: theme.colors.warning[500],
        }[status]};
    border-radius: 50%;
  `,
);

export const Content = styled.div<{ textAlign?: Property.TextAlign }>`
  position: relative;
  min-width: 0;
  width: 100%;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;

export const Menu = styled(motion.div).attrs(({ theme }) => ({
  /* stylelint-disable */
  animate: 'in',
  exit: 'out',
  initial: 'out',
  layout: true,
  transition: { duration: theme.animation.duration },
  variants: {
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 0.95 },
  },
  /* stylelint-enable */
}))(
  ({ theme }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: ${theme.space.small};
    white-space: nowrap;
    background: ${theme.colors.background[100]};
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05), 0 2px 16px rgba(0, 0, 0, 0.08),
      0 2px 6px rgba(0, 0, 0, 0.08);
    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        margin-bottom: ${theme.space.xSmall};

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `,
);

export const PaginationContainer = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    gap: ${theme.space.xSmall};
    margin-right: ${theme.space.small};
    align-items: center;
    justify-content: center;
  `,
);

export const ArrowUp = styled(Icon.ArrowUp)(
  ({ theme }) => css`
    font-size: 0.85rem;
    &:hover {
      color: ${theme.colors.primary[400]};
    }
  `,
);

export const ArrowDown = styled(Icon.ArrowDown)(
  ({ theme }) => css`
    font-size: 0.85rem;
    &:hover {
      color: ${theme.colors.primary[400]};
    }
  `,
);
