/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createContext } from 'react';

import { CUSTOMER_PROFILE_PROPERTY_FRAGMENT } from 'codegen/graphql';

export type Actions = {
  FETCH_PROPERTY(params: { id: number | null | undefined }): Promise<boolean>;
};

type Dispatch = <
  A extends keyof Actions,
  TParams extends Actions[A] extends (p: infer P) => any ? P : undefined,
>(
  action: A,
  params: TParams,
) => Promise<boolean>;

export const Context = createContext<ProviderContext>({
  customer_id: null,
  dispatch: async () => true,
  property: undefined,
  loading: true,
});
export type PropertiesOBJ = Record<number, CUSTOMER_PROFILE_PROPERTY_FRAGMENT>;

export type ProviderContext = {
  customer_id: number | null | undefined;
  dispatch: Dispatch;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT | undefined;
  loading: boolean;
};
