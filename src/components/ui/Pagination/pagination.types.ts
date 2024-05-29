export interface PaginationPages {
  current_page: number;
  total_pages: number;
}

export type PaginationProps = PaginationPages & {
  onChangePage: (page: number) => void;
};
