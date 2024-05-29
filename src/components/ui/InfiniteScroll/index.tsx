import { SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactElement } from 'react';

import { useIsomorphicLayoutEffect } from 'hooks';
import styled from 'styled-components';
import { findScrollParents } from 'utils';

import { Expander } from '../Expander';

const Box = styled.div`
  height: 0;
`;

export interface InfiniteScrollProps<TRow extends Record<string, any>> {
  children(item: TRow, index: number): ReactElement;
  expandable: boolean;
  onExpansionChange?: (event: SyntheticEvent, keys: string[]) => void;
  fetchMore(): void;
  items: readonly TRow[];
  limit?: number;
  total?: number;
}

const InfiniteScroll = <TRow extends Record<string, any>>({
  children,
  items = [],
  fetchMore,
  limit = 50,
  total = limit,
  expandable,
  onExpansionChange,
}: InfiniteScrollProps<TRow>) => {
  // the last page we have items for
  const lastPage = useMemo(
    () => Math.floor(items.length / limit),
    [items.length, limit],
  );

  // the pages we are rendering
  const [renderPageBounds, setRenderPageBounds] = useState(0);
  // the heights of the pages, approximated after we render the first page
  // and then updated for pages that have rendered
  const [pageHeights, setPageHeights] = useState<number[]>([]);
  // what we're waiting for fetchMore to give us
  const [pendingLength, setPendingLength] = useState(0);

  const belowMarkerRef = useRef<HTMLDivElement>(null);

  const initialTotal = useRef(total);
  const previousLength = useRef(0);

  const reset = () => {
    setRenderPageBounds(0);
    setPageHeights([]);
    setPendingLength(0);
  };

  // Reset on clear of items
  useEffect(() => {
    if (items.length < previousLength.current) {
      reset();
    }

    previousLength.current = items.length;
  }, [items, limit]);

  // Reset on total change
  useEffect(() => {
    if (total !== initialTotal.current) {
      reset();
    }
  }, [total, initialTotal]);

  // scroll and resize handling
  useEffect(() => {
    let scrollParents: ReturnType<typeof findScrollParents>;

    const evaluate = () => {
      if (!scrollParents) return;
      const scrollParent = scrollParents[0];

      // Determine the scroll position of the scroll container
      let top = 0;
      let height = 0;

      if (scrollParent === document) {
        top = document.documentElement.scrollTop || document.body.scrollTop;
        height = window.innerHeight;
      } else if ('scrollTop' in scrollParent) {
        top = scrollParent.scrollTop;
        const rect = scrollParent.getBoundingClientRect();
        ({ height } = rect);
      }

      const offset = height / 4; // so we preload when the user scrolls slowly

      // Use the pageHeights to determine what pages we should render based
      // on the current scroll window.
      let nextBeginPage = 0;
      let index = 0;
      let pagesHeight = pageHeights[index] || 0;

      while (pageHeights[index + 1] && pagesHeight < top - offset) {
        index += 1;
        nextBeginPage += 1;
        pagesHeight += pageHeights[index];
      }

      let nextEndPage = nextBeginPage;

      while (
        pageHeights[index] !== undefined &&
        pagesHeight < top + height + offset
      ) {
        index += 1;
        nextEndPage += 1;
        // when we haven't rendered the nextEndPage and we aren't replacing,
        // we might not have a height for it yet
        pagesHeight += pageHeights[index] || 0;
      }

      // when not replacing, never shrink bounds
      nextBeginPage = 0;
      nextEndPage = Math.max(renderPageBounds, nextEndPage);

      if (nextEndPage !== renderPageBounds) {
        setRenderPageBounds(nextEndPage);
      }
    };

    let timer: NodeJS.Timeout;

    const debounce = () => {
      clearTimeout(timer);
      timer = setTimeout(evaluate, 10);
    };

    // might not be there yet or might have already rendered everything
    if (belowMarkerRef.current) {
      scrollParents = findScrollParents(belowMarkerRef.current);
      scrollParents.forEach(sp => sp.addEventListener('scroll', debounce));
    }

    window.addEventListener('resize', debounce);
    evaluate();

    return () => {
      if (scrollParents) {
        scrollParents.forEach(sp => sp.removeEventListener('scroll', debounce));
      }

      window.removeEventListener('resize', debounce);
      clearTimeout(timer);
    };
  }, [pageHeights, renderPageBounds, limit, total]);

  useEffect(() => {
    if (
      renderPageBounds === lastPage &&
      (items.length > pendingLength || items.length < limit)
    ) {
      // remember we've asked for more, so we don't keep asking if it takes
      // a while
      setPendingLength(items.length + 1);
      fetchMore();
    }
  }, [
    items.length,
    lastPage,
    fetchMore,
    pendingLength,
    renderPageBounds,
    limit,
  ]);

  // calculate and keep track of page heights
  useIsomorphicLayoutEffect(() => {
    // if don't have a belowMarker, we must have rendered everything already
    if (!belowMarkerRef.current) return;

    // calculate page heights for rendered pages
    const { parentNode } = belowMarkerRef.current;
    const rendered = parentNode?.children as HTMLCollection;

    // ensure we've rendered the state we have
    // above? + items in rendered pages + below === rendered DOM elements length
    if ((renderPageBounds + 1) * limit + 1 === rendered.length) {
      let nextPageHeights;

      // size through each page
      let index = 0;
      let lastBottom;

      while (index <= renderPageBounds) {
        const topIndex = index * limit;
        const bottomIndex = Math.min(topIndex + limit - 1, rendered.length - 1);

        // we use lastBottom for top to ensure grid layouts work
        const top =
          lastBottom !== undefined
            ? lastBottom
            : (rendered.item(topIndex)?.getBoundingClientRect().top as number);

        const { bottom } = rendered
          .item(bottomIndex)
          ?.getBoundingClientRect() as DOMRect;

        const height = bottom - top;

        if (bottom && (!pageHeights || pageHeights[index] !== height)) {
          if (!nextPageHeights) nextPageHeights = [...(pageHeights || [])];
          nextPageHeights[index] = height;
        }

        lastBottom = bottom;
        index += 1;
      }

      if (nextPageHeights) setPageHeights(nextPageHeights);
    }
  }, [lastPage, pageHeights, renderPageBounds, limit]);

  const lastIndex = Math.min((renderPageBounds + 1) * limit, items.length) - 1;

  const result = [];

  items.slice(0, lastIndex + 1).forEach((item, index) => {
    const child = children(item, index);
    result.push(child);
  });

  const marker = (
    <Box key="below" ref={belowMarkerRef || undefined}>
      <Box></Box>
      <Box></Box>
    </Box>
  );

  if (renderPageBounds < lastPage) {
    result.push(marker);
  }

  if (expandable) {
    return <Expander {...{ onExpansionChange }}>{result}</Expander>;
  }

  return <>{result}</>;
};

export default InfiniteScroll;
