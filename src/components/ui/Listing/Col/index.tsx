import type { Property } from 'csstype';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import Text from '../../Text';

export interface ColProps {
  align?: Property.JustifyContent;
  role?: string;
  width?: CSSProperties['width'];
}

export const Col = styled.div.attrs<ColProps>({
  role: 'cell',
})<ColProps>(
  ({
    align,
    theme: {
      space: { regular, xLarge },
    },
    width,
  }) => css`
    display: flex;
    flex: ${width ? `0 0 ${width}` : '1'};
    ${width && `max-width: ${width}`};
    align-items: center;
    justify-content: ${align || 'normal'};
    min-width: 0;
    min-height: 50px;
    padding: 0 ${regular};
    ${Text} {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &:first-child {
      padding-left: ${xLarge};
    }
  `,
);

export default Col;
