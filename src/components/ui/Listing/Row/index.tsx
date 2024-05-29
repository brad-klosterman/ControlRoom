import React, { memo } from 'react';
import type { ReactElement } from 'react';

import * as S from './styles';
import { Expander, useExpanderNodeContext } from '../../Expander';
import { ColProps } from '../Col';
import Data from '../Data';

interface RowProps {
  children:
    | typeof Data
    | ReactElement<ColProps>
    | Array<typeof Data | ReactElement<ColProps>>;
  expandable?: boolean;
  right_padding?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  variant?: 'default' | 'analytics';
  is_error?: boolean;
  hover?: boolean;
}

export interface RowFC {
  (props: RowProps): ReactElement<any, any>;
}

const Row: RowFC = ({
  children,
  expandable = false,
  is_error = false,
  onClick,
  right_padding = false,
  variant = 'default',
}) => {
  const { isOpen } = useExpanderNodeContext();

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (onClick) onClick(e);
  }

  return (
    <S.Wrapper
      is_error={is_error}
      is_open={Boolean(expandable && isOpen)}
      highlight={true}
      onClick={handleClick}
      role="row"
      variant={variant}
      clickable={Boolean(onClick)}
    >
      {children}
      {expandable && (
        <Expander.Arrow style={{ justifyContent: 'center', width: '4rem' }} />
      )}
      {!expandable && right_padding && <div style={{ width: '4rem' }}></div>}
    </S.Wrapper>
  );
};

export default memo(Row);
