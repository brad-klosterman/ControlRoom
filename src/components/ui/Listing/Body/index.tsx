import React from 'react';

import * as S from './styles';
import InfiniteScroll from '../../InfiniteScroll';
import { RowFC } from '../Row';

export interface BodyProps<TRow extends Record<string, any>> {
  children(item: TRow, index: number): React.ReactElement<RowFC>;
  data: readonly TRow[];
  expandable?: boolean;
  onExpansionChange?: (event: React.SyntheticEvent, keys: string[]) => void;
  loadPages(): void;
  size?: number;
  total?: number;
}

const Body = <TRow extends Record<string, any>>({
  children,
  data,
  expandable = false,
  onExpansionChange,
  loadPages,
  size,
  total,
}: BodyProps<TRow>) => (
  <S.Wrapper>
    <InfiniteScroll<(typeof data)[number]>
      {...{ expandable, onExpansionChange }}
      fetchMore={loadPages}
      items={data}
      limit={size}
      total={total}
    >
      {children}
    </InfiniteScroll>
  </S.Wrapper>
);

export default Body;
