import { memo, useCallback, useState } from 'react';

import Table from 'components/table';
import { type MenuItemType } from 'components/ui/Listing/Header/menu';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import Areas from './provider';
import ExpandedContent from './table.item';

const AreasTable = () => {
  const { areas, areas_select, refetch } = Areas.useContext();

  const authorized_to_create = useCanCreateAdmin();

  const [creating_new, setCreatingNew] = useState(false);

  const refetchAreas = useCallback(() => {
    refetch();
    setCreatingNew(false);
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        areas_select={areas_select}
        item={{
          id: -1,
          name: '',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchAreas}
      />
    );
  }

  const menu = authorized_to_create
    ? [
        {
          icon: 'Pencil',
          label: 'CREATE AREA',
          onClick: () => setCreatingNew(true),
          visible: !creating_new,
        } as MenuItemType,
      ]
    : undefined;

  return (
    <Table
      columns_config={table_columns}
      data={areas}
      expandable
      menu={menu}
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent {...{ item, areas_select }} refetch={refetchAreas} />
        ) : null
      }
      total={areas.length}
    />
  );
};

export default memo(AreasTable);
