import { useCallback, useMemo, useState } from 'react';

import Areas from 'apps/admin/company_settings/areas/provider';
import Decoders from 'apps/admin/company_settings/decoders/provider';
import { TRANSMITTER_STATUS_OPTIONS } from 'apps/admin/company_settings/transmitters/form.values';
import { getFragment } from 'codegen';
import {
  CORE_TRANSMITTER_FRAGMENT,
  FETCH_TRANSMITTERS_DOCUMENT,
  FETCH_TRANSMITTERS_QUERY,
  CORE_TRANSMITTER_FRAGMENT_DOC,
  QUERY_TRANSMITTERS_ARGS,
  FETCH_TRANSMITTERS_PARAMS,
} from 'codegen/graphql';
import Table from 'components/table';
import { SearchBarField } from 'components/table/search/types';
import { useListing } from 'hooks';
import { useCanCreateAdmin } from 'src/app.state/permissions/hooks/create-admin.permission';

import { table_columns } from './config';
import ExpandedContent from './expanded';

export const TransmittersRoute = () => {
  const { areas_select } = Areas.useContext();
  const { decoders_name_select } = Decoders.useContext();

  const table = useListing<
    FETCH_TRANSMITTERS_QUERY,
    QUERY_TRANSMITTERS_ARGS,
    CORE_TRANSMITTER_FRAGMENT
  >({
    document: FETCH_TRANSMITTERS_DOCUMENT,
    response_map: {
      getItems: d => {
        const items =
          getFragment(
            CORE_TRANSMITTER_FRAGMENT_DOC,
            d?.transmitters?.transmitters,
          ) || [];
        return [...items]; // todo implement proper fragment cache
      },
      getTotal: d => d?.transmitters?.pagination.count || 0,
    },
    size: 50,
    startPage: 1,
    vars: {},
  });

  const authorized_to_create = useCanCreateAdmin();
  const [creating_new, setCreatingNew] = useState(false);

  const refetchTransmitters = useCallback(() => {
    //refetch();
    setCreatingNew(false);
  }, []);

  const search_config = useMemo<
    SearchBarField<FETCH_TRANSMITTERS_PARAMS>[]
  >(() => {
    const search_fields: SearchBarField<FETCH_TRANSMITTERS_PARAMS>[] = [
      {
        name: 'name',
        type: 'Input',
        label: 'Transmitter ID',
      },
      {
        name: 'statuses',
        type: 'MultiSelect',
        label: 'Transmitter Status',
        options: TRANSMITTER_STATUS_OPTIONS,
      },
      {
        name: 'area_ids',
        type: 'MultiSelect',
        label: 'Areas',
        options: areas_select,
      },
      {
        name: 'decoder_name',
        type: 'Select',
        label: 'Decoder',
        options: decoders_name_select,
      },
    ];

    return search_fields;
  }, [areas_select, decoders_name_select]);

  if (creating_new) {
    return (
      <ExpandedContent
        area_selects={areas_select}
        decoder_names={decoders_name_select}
        item={{
          id: -1,
          number: '',
        }}
        onCancelCreating={() => setCreatingNew(false)}
        refetch={refetchTransmitters}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={table.renderedItems}
      expandable
      loadPages={table.loadPages}
      menu={
        authorized_to_create
          ? [
              {
                icon: 'Pencil',
                label: 'CREATE TRANSMITTER',
                onClick: () => setCreatingNew(true),
                visible: !creating_new,
              },
            ]
          : undefined
      }
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent
            area_selects={areas_select}
            decoder_names={decoders_name_select}
            item={item}
            refetch={refetchTransmitters}
          />
        ) : null
      }
      search={{
        params: search_config,
        onSearch(search_params) {
          table.onSearch({ search_params });
        },
      }}
      total={table.total}
    />
  );
};
