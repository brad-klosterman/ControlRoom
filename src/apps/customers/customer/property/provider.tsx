/* eslint-disable sort-keys-fix/sort-keys-fix */
import { useLazyQuery } from '@apollo/client';
import { memo, ReactNode, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  CUSTOMER_PROPERTY_ROUTE,
  PROPERTY_PROFILE_ROUTE,
} from 'apps/customers/API';
import { CustomerRouteParams } from 'apps/customers/customer/types';
import { getFragment } from 'codegen';
import { CUSTOMER_PROFILE_PROPERTY_FRAGMENT } from 'codegen/graphql';

import { Actions, Context, PropertiesOBJ } from './types';
import { useCustomer } from '../provider';

const PropertyProvider = (props: { children: ReactNode }) => {
  const route_params = useParams<CustomerRouteParams>();

  const [fetch_property, { loading }] = useLazyQuery(CUSTOMER_PROPERTY_ROUTE);
  const { customer } = useCustomer();

  const properties = customer
    ? [...getFragment(PROPERTY_PROFILE_ROUTE, customer.properties)]
    : [];

  const [propertiesOBJ, setPropertiesOBJ] = useState<PropertiesOBJ>(
    [...properties].reduce<PropertiesOBJ>((acc, cur) => {
      acc[cur.id] = cur;

      return acc;
    }, {}),
  );

  const getProperties = async () =>
    customer
      ? [...getFragment(PROPERTY_PROFILE_ROUTE, customer.properties)].reduce<
          Promise<PropertiesOBJ>
        >(async (acc, cur) => {
          const object = await acc;

          fetch_property({
            variables: { property_id: cur.id },
          }).then(res => {
            object[cur.id] = getFragment(
              PROPERTY_PROFILE_ROUTE,
              res.data?.customer_property.property,
            ) as CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
          });

          return object;
        }, Promise.resolve({}))
      : {};

  useEffect(() => {
    getProperties().then(rs => setPropertiesOBJ(rs));
  }, [customer]);

  // SELECTED PROPERTY
  const property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT =
    propertiesOBJ &&
    route_params.property_id &&
    propertiesOBJ[route_params.property_id];

  // DISPATCH ACTIONS HANDLER
  const actions: Actions = {
    FETCH_PROPERTY: async params => {
      if (params.id) {
        fetch_property({
          variables: { property_id: params.id },
        }).then(res => {
          const fetched = getFragment(
            PROPERTY_PROFILE_ROUTE,
            res.data?.customer_property.property,
          );

          if (fetched)
            setPropertiesOBJ(prev => ({
              ...prev,
              [params.id as number]: fetched,
            }));
        });
      }

      return true;
    },
  };

  const dispatch = <
    A extends keyof Actions,
    TParams extends Actions[A] extends (p: infer P) => any ? P : undefined,
  >(
    action: A,
    params: TParams,
  ) => {
    return (actions[action] as (params: TParams) => Promise<boolean>)(params);
  };

  return (
    <Context.Provider
      value={{
        customer_id: customer?.id,
        dispatch,
        property,
        loading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useProperty = () => {
  return useContext(Context);
};

export default memo(PropertyProvider);
