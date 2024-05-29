import type { Property } from 'csstype';

import styled, { css } from 'styled-components';
import { media } from 'theme/mixins';
import { transition } from 'utils';

import Text from '../../Text';
import { ColProps } from '../Col';
import { Status } from '../Data/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: ${theme.space.large} 0;
    background-color: ${theme.colors.background[100]};
    border-bottom: 1px solid ${theme.colors.outline.default};
    transition: ${transition('background-color')};

    ${media.hover} {
      &:hover {
        background: ${theme.colors.background[200]};
      }
    }
  `,
);

export const Col = styled.div<ColProps>(
  ({ align, theme, width }) => css`
    display: flex;
    flex: ${width ? `0 0 ${width}` : '1'};
    ${width && `max-width: ${width}`};
    align-items: center;
    justify-content: ${align || 'normal'};
    min-width: 0;
    padding: 0 ${theme.space.large};

    ${Text} {
      display: block;
    }

    ${Status} {
      margin: 0 0 0 ${theme.space.small};
    }
  `,
);

export const Content = styled.div<{ textAlign?: Property.TextAlign }>`
  position: relative;
  min-width: 0;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;
