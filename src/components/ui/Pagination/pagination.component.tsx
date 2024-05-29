import { PaginationProps } from 'components/ui/Pagination/pagination.types';

import * as S from './pagination.styles';
import IconButton from '../IconButton';

const Pagination = ({
  current_page,
  onChangePage,
  total_pages,
}: PaginationProps) => {
  if (total_pages === 1) return null;

  return (
    <S.Container>
      <IconButton.ArrowLeft
        label=""
        onClick={() => onChangePage(current_page !== 1 ? current_page - 1 : 1)}
      />

      {[...Array(total_pages)].map((_el, index) => (
        <S.Index
          active={index + 1 === current_page}
          key={index}
          onClick={() => onChangePage(index + 1)}
        >
          {index + 1}
        </S.Index>
      ))}

      <IconButton.ArrowRight
        label=""
        onClick={() =>
          onChangePage(
            current_page !== total_pages ? current_page + 1 : total_pages,
          )
        }
      />
    </S.Container>
  );
};

export default Pagination;
