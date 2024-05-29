import React from 'react';
import { FieldValues } from 'react-hook-form';
import { Flex, Skeleton } from 'components';
import { NoticeType } from 'hooks/useListing';
import { Menu } from 'components/table/header';
import { HeaderColumns } from 'components/table/header/styles';
import Listing from 'components/ui/Listing';
export { default as Expanded } from './expanded';
import { VirtualItem } from 'hooks/useVirtualItems';

import SearchBar from './search';
import { Container } from './styles';
import { TableProps } from './types';

const Table = <
  TRowData extends Record<string, any>,
  TSearchParams extends FieldValues,
>({
  columns_config,
  data,
  expandable,
  onExpansionChange,
  loadPages,
  menu,
  notice,
  onSelectRow,
  page_size = 50,
  renderExpanded,
  search,
  total,
}: TableProps<TRowData | VirtualItem, TSearchParams>) => {
  return (
    <Container>
      {search && <SearchBar {...search} />}
      <HeaderColumns expandable={Boolean(menu || expandable)}>
        {columns_config.map(col => (
          <Listing.Header.Col
            align={col.align}
            key={col.property}
            label={col.header}
            property={col.property}
            width={col.width}
          />
        ))}
        {menu && <Menu items={menu} />}
      </HeaderColumns>
      {!notice ? (
        <Listing.Body
          data={data}
          {...{ expandable, onExpansionChange }}
          loadPages={loadPages ? loadPages : () => null}
          size={page_size}
          total={total}
        >
          {(item, index) => (
            <React.Fragment key={index}>
              <Listing.Row
                expandable={expandable}
                onClick={onSelectRow ? () => onSelectRow(item) : undefined}
                right_padding={Boolean(menu)}
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
              return (
                <Flex fitWidth style={{ height: '100%' }}>
                  <Listing.Notice content="" title="NO RESULTS FOUND" />
                </Flex>
              );
            default:
              return <></>;
          }
        })()
      )}
      {/*<Footer />*/}
    </Container>
  );
};

export default Table;
