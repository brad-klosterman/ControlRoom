// Polyfill for old browsers to use the AbortController
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { useCallback, useEffect, useRef, useState } from 'react';

import useDebounce from './useDebounce';

export type VirtualItem = { isVirtualItem: true };

interface UseVirtualItemsProps<TRow extends Record<string, any>> {
  // Time in ms a user must stop scrolling for the fetch to run
  debounceDelay?: number;
  // The fetch query (can optionally pass in an AbortSignal)
  fetch(
    options: {
      limit: number;
      offset: number;
    },
    signal?: AbortSignal,
  ): void;
  // Array of items
  items?: TRow[];
  // Size of each page
  limit: number;
  // Maximum number of items to render
  total?: number;
}

export default function useVirtualItems<TRow extends Record<string, any>>({
  debounceDelay = 1000,
  fetch,
  items,
  limit,
  total = limit,
}: UseVirtualItemsProps<TRow>) {
  // Abort controller that enables request cancellation
  const abortController = useRef<AbortController>();

  // Number of items to be requested in the next fetch
  const [itemsToLoad, setItemsToLoad] = useState<number>(0);

  // An array of fetched items or virtual items
  const [renderedItems, setRenderedItems] = useState<(TRow | VirtualItem)[]>(
    items || [],
  );

  const reset = (type?: string) => {
    if (type === 'noResults' || type === 'reset') {
      setRenderedItems([...Array(limit).fill({ isVirtualItem: true })]);
      setItemsToLoad(50);
    } else if (type === 'refresh') {
      setRenderedItems([...Array(limit).fill({ isVirtualItem: true })]);
      setItemsToLoad(50);
    } else if (itemsToLoad === 0) {
      setRenderedItems([]);
      setItemsToLoad(0);
    }
  };

  const runFetch = useCallback(
    async (loadSize: number) => {
      if (loadSize <= 0) {
        setRenderedItems(prev => {
          return prev.filter(item => !item.isVirtualItem);
        });
      } else {
        abortController.current = new AbortController();
        const pageNumber = Math.ceil(
          (renderedItems.length - loadSize) / loadSize,
        );
        fetch(
          { limit: loadSize, offset: pageNumber },
          abortController.current?.signal,
        );
      }
    },
    [fetch, renderedItems],
  );

  useDebounce(() => runFetch(itemsToLoad), debounceDelay, [itemsToLoad]);

  const loadPages = () => {
    // Total quota must not be full
    const count = renderedItems.length;

    if (count >= total) return;

    // Abort existing fetch request
    abortController.current?.abort();

    // Calculate the load limit (if greater than total, load the difference)
    const loadLimit = count + limit > total ? total - count : limit;

    // Add virtualised items the rendered items
    setRenderedItems(prev => {
      return [...prev, ...Array(loadLimit).fill({ isVirtualItem: true })];
    });

    setItemsToLoad(toLoad => toLoad + loadLimit);
  };

  useEffect(() => {
    if (items) {
      setRenderedItems(items);
      setItemsToLoad(0);
    }
  }, [items]);

  const updateRowItem = (updated_item: TRow) => {
    const item_index = renderedItems.findIndex(
      row => 'id' in row && row.id === updated_item.id,
    );

    setRenderedItems(prev => {
      prev[item_index] = updated_item;
      return [...prev];
    });
  };

  return {
    loadPages,
    renderedItems,
    updateRowItem,
    reset,
    total,
  };
}
