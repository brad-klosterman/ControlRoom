import { memo, useCallback, useState } from 'react';

import Table from 'components/table';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import ExpandedContent from './expanded';
import { useAlarmTypesContext } from './provider';

const AlarmTypesTable = () => {
  const { alarm_types, refetch } = useAlarmTypesContext();
  const authorized_to_create = useCanCreateAdmin();
  const [creating_new, setCreatingNew] = useState(false);

  const refetchAlarmTypes = useCallback(() => {
    refetch();
    setCreatingNew(false);
  }, []);

  if (creating_new) {
    return (
      <ExpandedContent
        item={{
          id: -1,
          priority: 9,
          sends_push_notifications: false,
          history: false,
          non_emc: false,
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchAlarmTypes}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={alarm_types}
      expandable
      menu={
        authorized_to_create
          ? [
              {
                icon: 'Pencil',
                label: 'CREATE ALARM TYPE',
                onClick: () => setCreatingNew(true),
                visible: !creating_new,
              },
            ]
          : undefined
      }
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent {...{ item }} refetch={refetchAlarmTypes} />
        ) : null
      }
      total={alarm_types.length}
    />
  );
};

export default memo(AlarmTypesTable);
