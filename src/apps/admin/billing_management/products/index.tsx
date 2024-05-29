import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { getFragment } from 'codegen';
import {
  FETCH_PRODUCT_TEMPLATES_DOCUMENT,
  PRODUCT_TEMPLATE_CORE_FRAGMENT_DOC,
} from 'codegen/graphql';
import Table from 'components/table';

import NewTemplate from './blank';
import { table_columns } from './config';
import ExpandedContent from './expanded';

const AdminProductsRoute = () => {
  const { currency_options } = useSSPSettingsContext();

  const { data, refetch } = useQuery(FETCH_PRODUCT_TEMPLATES_DOCUMENT, {
    variables: {
      currency: null,
    },
  });

  const product_templates =
    getFragment(
      PRODUCT_TEMPLATE_CORE_FRAGMENT_DOC,
      data?.product_templates.product_templates,
    ) || [];

  const [creating_new, setCreatingNew] = useState(false);

  const refetchProducts = useCallback(async () => {
    setCreatingNew(false);
    await refetch();
  }, []);

  if (creating_new) {
    return (
      <NewTemplate
        currency_options={currency_options}
        onCancel={() => setCreatingNew(false)}
        onComplete={refetchProducts}
      />
    );
  }

  return (
    <Table
      columns_config={table_columns}
      data={[...product_templates]}
      expandable
      loadPages={() => null}
      menu={[
        {
          icon: 'Pencil',
          label: 'CREATE PRODUCT',
          onClick: () => setCreatingNew(true),
          visible: !creating_new,
        },
      ]}
      renderExpanded={product =>
        'id' in product ? (
          <ExpandedContent
            {...{ product }}
            currency_options={currency_options}
            refetch={refetchProducts}
          />
        ) : null
      }
      total={product_templates.length}
    />
  );
};

export default AdminProductsRoute;
