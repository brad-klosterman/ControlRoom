import { createContext } from 'react';

import { CUSTOMERS_SEARCH_PARAMS, CUSTOMERS_TABLE_ROW } from 'codegen/graphql';
import { NoticeType } from 'hooks/useListing';
import { VirtualItem } from 'hooks/useVirtualItems';

export type ProviderContext = {
  table: {
    loadPages: () => void;
    notice: NoticeType | undefined;
    onSearch: (variables: {
      search_params?: CUSTOMERS_SEARCH_PARAMS | undefined;
    }) => void;
    search_params: CUSTOMERS_SEARCH_PARAMS | undefined | null;
    updateRowItem: (updated_item: CUSTOMERS_TABLE_ROW) => void;
    renderedItems: (CUSTOMERS_TABLE_ROW | VirtualItem)[];
    total: number;
    mounted: boolean;
  };
};

export const Context = createContext<ProviderContext>({
  table: {
    loadPages: () => null,
    notice: undefined,
    onSearch: () => null,
    search_params: undefined,
    updateRowItem: () => null,
    renderedItems: [],
    total: 0,
    mounted: false,
  },
});
