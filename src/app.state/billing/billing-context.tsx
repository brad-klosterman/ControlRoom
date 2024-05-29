import { ReactNode, createContext, useContext } from 'react';
import { BILLING_DEPARTMENT } from 'src/apollo/codegen/graphql';
import { Lazy, LazyState } from 'src/utils/lazy';
import { useBillingDepartments } from './hooks';

interface BillingContextState {
  billing_departments: Lazy<readonly BILLING_DEPARTMENT[]>;
}

const BillingContext = createContext<{
  state: BillingContextState;
}>({
  state: {
    billing_departments: {
      state: LazyState.UN_INITIALIZED,
    },
  },
});

const BillingProvider = ({ children }: { children: ReactNode }) => {
  const { billing_departments } = useBillingDepartments();

  return (
    <BillingContext.Provider
      value={{
        state: {
          billing_departments,
        },
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

const useBillingContext = () => {
  const { state } = useContext(BillingContext);
  return { state };
};

export { BillingProvider, useBillingContext };
