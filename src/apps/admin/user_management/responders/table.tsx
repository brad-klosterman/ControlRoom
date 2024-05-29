import { memo, useCallback, useState } from 'react';

import Table from 'components/table';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import ExpandedContent from './expanded';
import { useRespondersContext } from './provider';

const RespondersRoute = () => {
  const { refetch, responders } = useRespondersContext();
  const authorized_to_create = useCanCreateAdmin();
  const [creating_new, setCreatingNew] = useState(false);

  const refetchResponders = useCallback(() => {
    refetch();
    setCreatingNew(false);
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        item={{
          id: -1,
          name: '',
          email: '',
          updated_on: '',
          created_on: '',
          password: '',
          area_ids: [],
          status: 'INACTIVE',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetch}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={responders}
      expandable
      menu={
        authorized_to_create
          ? [
              {
                icon: 'Pencil',
                label: 'CREATE RESPONDER',
                onClick: () => setCreatingNew(true),
                visible: !creating_new,
              },
            ]
          : undefined
      }
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent item={item} refetch={refetchResponders} />
        ) : null
      }
      total={responders.length}
    />
  );
};

export default memo(RespondersRoute);
