import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { getFragment } from 'codegen';
import {
  DISCOUNT_TEMPLATE_CORE_FRAGMENT_DOC,
  FETCH_DISCOUNT_TEMPLATES_DOCUMENT,
} from 'codegen/graphql';
import Table from 'components/table';

import NewTemplate from './blank';
import { table_columns } from './config';
import ExpandedContent from './expanded';

const AdminDiscountsRoute = () => {
  const { currency_options } = useSSPSettingsContext();

  const { data, refetch } = useQuery(FETCH_DISCOUNT_TEMPLATES_DOCUMENT, {
    variables: {
      currency: null,
    },
  });

  const discount_templates =
    getFragment(
      DISCOUNT_TEMPLATE_CORE_FRAGMENT_DOC,
      data?.discount_templates.discount_templates,
    ) || [];

  const [creating_new, setCreatingNew] = useState(false);

  const refetchDiscounts = useCallback(async () => {
    setCreatingNew(false);
    await refetch();
  }, []);

  if (creating_new) {
    return (
      <NewTemplate
        currency_options={currency_options}
        onCancel={() => setCreatingNew(false)}
        onComplete={refetchDiscounts}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={[...discount_templates]}
      expandable
      loadPages={() => null}
      menu={[
        {
          icon: 'Pencil',
          label: 'CREATE DISCOUNT',
          onClick: () => setCreatingNew(true),
          visible: !creating_new,
        },
      ]}
      renderExpanded={discount =>
        'id' in discount ? (
          <ExpandedContent
            {...{ discount }}
            currency_options={currency_options}
            refetch={refetchDiscounts}
          />
        ) : null
      }
      total={discount_templates.length}
    />
  );
};

export default AdminDiscountsRoute;
