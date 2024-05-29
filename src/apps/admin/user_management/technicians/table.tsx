import { memo, useCallback, useState } from 'react';

import Table from 'components/table';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import ExpandedContent from './expanded';
import { useTechniciansContext } from './provider';

const TechniciansTable = () => {
  const { refetch, technicians } = useTechniciansContext();
  const authorized_to_create = useCanCreateAdmin();
  const [creating_new, setCreatingNew] = useState(false);

  const refetchTechnicians = useCallback(() => {
    refetch();
    setCreatingNew(false);
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        item={{
          id: -1,
          name: '',
          active: true,
          available: false,
          phone_number: '',
          updated_at: '',
          created_at: '',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchTechnicians}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={technicians}
      expandable
      menu={
        authorized_to_create
          ? [
              {
                icon: 'Pencil',
                label: 'CREATE TECHNICIAN',
                onClick: () => setCreatingNew(true),
                visible: !creating_new,
              },
            ]
          : undefined
      }
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent {...{ item }} refetch={refetchTechnicians} />
        ) : null
      }
      total={technicians.length}
    />
  );
};

export default memo(TechniciansTable);
