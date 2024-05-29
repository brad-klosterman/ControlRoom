import { memo, useCallback, useState } from 'react';

import Table from 'components/table';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import ExpandedContent from './expanded';
import { useUsersContext } from './provider';

const UsersTable = () => {
  const { agents: users, refetch } = useUsersContext();
  const authorized_to_create = useCanCreateAdmin();
  const [creating_new, setCreatingNew] = useState(false);

  const refetchUsers = useCallback(() => {
    refetch().then(() => {
      setCreatingNew(false);
    });
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        item={{
          id: -1,
          name: '',
          updated_at: '',
          created_at: '',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchUsers}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={users}
      expandable
      menu={
        authorized_to_create
          ? [
              {
                icon: 'Pencil',
                label: 'CREATE USER',
                onClick: () => setCreatingNew(true),
                visible: !creating_new,
              },
            ]
          : undefined
      }
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent {...{ item }} refetch={refetchUsers} />
        ) : null
      }
      total={users.length}
    />
  );
};

export default memo(UsersTable);
