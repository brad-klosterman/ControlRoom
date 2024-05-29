import { DocumentNode, useApolloClient } from '@apollo/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getOperationName } from '@apollo/client/utilities';
import { useState } from 'react';

import useVirtualItems from './useVirtualItems';

export enum NoticeType {
  noResults = 'noResults',
}

interface UseListingProps<
  Query extends Record<string, any>,
  Vars extends Record<string, any>,
  TRow extends Record<string, any>,
> {
  docName?: string;
  document: DocumentNode;
  headers?: Record<string, any>;
  response_map?: {
    getItems?: (data: Query) => TRow[];
    getTotal?: (data: Query) => number;
  };
  size?: number;
  startPage?: number;
  vars: Partial<Vars>;
}

export default function useListing<
  Query extends Record<string, any>,
  Vars extends Record<string, any>,
  TRow extends Record<string, any>,
>({
  docName,
  document,
  headers,
  response_map,
  size = 50,
  startPage = 1,
  vars: default_search_variables,
}: UseListingProps<Query, Vars, TRow>) {
  const name = docName || (getOperationName(document) as keyof Query);
  const [search_variables, setSearchVariables] = useState({});
  const [sortBy, setSortBy] = useState('');
  const [mounted, setMounted] = useState(false);
  const [notice, setNotice] = useState<NoticeType>();
  const [results, setResults] = useState<TRow[]>();
  const [total, setTotal] = useState<number>(size);

  const client = useApolloClient();

  const { loadPages, renderedItems, reset, updateRowItem } =
    useVirtualItems<TRow>({
      fetch: async ({ offset }, signal) => {
        setNotice(undefined);

        const variables = {
          ...default_search_variables,
          page: offset + startPage,
          per_page: size,
          ...search_variables,
          pagination: {
            page: offset + startPage,
            per_page: size,
          },
          sortBy,
        };

        const { data } = await client.query({
          context: {
            fetchOptions: {
              signal,
            },
            headers,
          },
          query: document,
          variables,
        });

        let response_items: TRow[] = [];
        let response_total = 0;

        if (response_map?.getItems) {
          response_items = response_map.getItems(data);
        } else {
          response_items = data[name].results;
        }

        if (response_map?.getTotal) {
          response_total = response_map.getTotal(data);
        } else {
          response_total = data[name].totalResults;
        }

        setResults(prevState =>
          prevState && offset > 0
            ? [...prevState, ...response_items]
            : response_items,
        );

        setTotal(response_total);
        if (response_total === 0) setNotice(NoticeType.noResults);
        setMounted(true);
      },
      items: results,
      limit: size,
      total,
    });

  const resetQuery = () => {
    setSearchVariables({});
    setSortBy('');
    setNotice(undefined);
    setResults(undefined);
    setTotal(size);
    reset('reset');
  };

  const onSort = (property: string) => () => {
    switch (sortBy) {
      case `+${property}`:
        setSortBy(`-${property}`);
        break;
      case `-${property}`:
        setSortBy('');
        break;
      default:
        setSortBy(`+${property}`);
        break;
    }

    // uncomment and adjust to use api to sort
    // setNotice(undefined);
    // reset();
  };

  const onSearch = (variables: any) => {
    setMounted(false);
    setSearchVariables(variables);
    reset(notice);
    // setNotice(undefined);
  };

  const onRefetchSearch = () => {
    // setMounted(false);
    setSearchVariables(prev => prev);
    reset('refresh');
    // setNotice(undefined);
  };

  return {
    loadPages,
    mounted,
    notice,
    onSearch,
    onRefetchSearch,
    updateRowItem,
    onSort,
    renderedItems,
    reset: resetQuery,
    search_variables,
    setNotice,
    sortBy,
    total,
  };
}
