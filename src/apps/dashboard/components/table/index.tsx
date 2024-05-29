import React from 'react';
import { FieldValues } from 'react-hook-form';

import { Skeleton } from 'components';
import Listing from 'components/ui/Listing';
import ListingMenu from 'components/ui/Listing/Header/menu';
import { NoticeType } from 'hooks/useListing';
export { default as Expanded } from './expanded';
import { VirtualItem } from 'hooks/useVirtualItems';

import { Container } from './styles';
import { TableProps } from './types';

const Table = <
  TRowData extends Record<string, any>,
  TSearchParams extends FieldValues,
>({
  columns_config,
  data,
  expandable,
  flex = true,
  loading,
  loadPages,
  menu,
  notice,
  onSelectRow,
  page_size = 50,
  renderExpanded,
  total,
}: TableProps<TRowData | VirtualItem, TSearchParams>) => {
  const virtual_items: VirtualItem[] = loading
    ? [...Array(page_size).fill({ isVirtualItem: true })]
    : [];

  return (
    <Container flex={flex}>
      {/*{search_params && (*/}
      {/*  <SearchBar control={search_form.control} fields={search_params} />*/}
      {/*)}*/}
      <Listing>
        <ListingMenu items={menu} />
        <Listing.Header expandable={expandable}>
          {columns_config.map(col => (
            <Listing.Header.Col
              align={col.align}
              key={col.property}
              label={col.header}
              property={col.property}
              width={col.width}
              //sortedBy={services_table!.sortBy}
              //onSort={sortable ? services_table!.onSort : undefined}
            />
          ))}
        </Listing.Header>
        {!notice ? (
          <Listing.Body
            data={loading ? virtual_items : data}
            expandable={expandable}
            loadPages={loadPages ? loadPages : () => null}
            size={page_size}
            total={total}
          >
            {(item, index) => (
              <React.Fragment key={index}>
                <Listing.Row
                  expandable={expandable}
                  onClick={() => (onSelectRow ? onSelectRow(item) : null)}
                >
                  {columns_config.map(col => (
                    <Listing.Col
                      align={col.align}
                      key={col.property}
                      width={col.width}
                    >
                      {'isVirtualItem' in item ? (
                        <Skeleton size="medium" />
                      ) : (
                        <Listing.Data data={col.dataProps(item)} />
                      )}
                    </Listing.Col>
                  ))}
                </Listing.Row>
                {'isVirtualItem' in item ? (
                  <Skeleton size="medium" />
                ) : (
                  expandable && renderExpanded?.(item)
                )}
              </React.Fragment>
            )}
          </Listing.Body>
        ) : (
          (() => {
            switch (notice) {
              case NoticeType.noResults:
                return <Listing.Notice content="" title="No Items Found" />;
              default:
                return <></>;
            }
          })()
        )}
      </Listing>
    </Container>
  );
};

export default Table;
