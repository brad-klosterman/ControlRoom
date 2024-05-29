import React from 'react';

import { ArrowUp, ArrowDown, PaginationContainer } from './styles';

export type DataPaginationProps = {
  current: number;
  total: number;
  onChangeIndex: (page: number) => void;
};

export const DataPagination = ({
  current,
  onChangeIndex,
  total,
}: DataPaginationProps) => {
  if (total === 1) return null;

  const onNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onChangeIndex(current !== total - 1 ? current + 1 : 0);
  };

  const onPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onChangeIndex(current !== 0 ? current - 1 : total - 1);
  };

  return (
    <PaginationContainer>
      <ArrowUp onClick={onPrev} />
      <ArrowDown onClick={onNext} />
    </PaginationContainer>
  );
};
