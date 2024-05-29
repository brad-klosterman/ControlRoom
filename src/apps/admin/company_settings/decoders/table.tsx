import { memo, useCallback, useState } from 'react';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';
import Table from 'components/table';
import { type MenuItemType } from 'components/ui/Listing/Header/menu';

import { table_columns } from './config';
import Decoders from './provider';
import ExpandedContent from './table.item';

const DecodersTable = () => {
  const { decoders, refetch } = Decoders.useContext();

  const authorized_to_create = useCanCreateAdmin();

  const [creating_new, setCreatingNew] = useState(false);

  const refetchDecoders = useCallback(() => {
    refetch();
    setCreatingNew(false);
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        item={{
          id: -1,
          name: '',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchDecoders}
      />
    );
  }

  const menu = authorized_to_create
    ? [
        {
          icon: 'Pencil',
          label: 'CREATE DECODER',
          onClick: () => setCreatingNew(true),
          visible: !creating_new,
        } as MenuItemType,
      ]
    : undefined;

  return (
    <Table
      columns_config={table_columns}
      data={decoders}
      expandable
      menu={menu}
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent {...{ item }} refetch={refetchDecoders} />
        ) : null
      }
      total={decoders.length}
    />
  );
};

export default memo(DecodersTable);
