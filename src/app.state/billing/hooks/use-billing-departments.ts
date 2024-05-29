import { useQuery } from '@apollo/client';
import { getFragment } from 'src/apollo/codegen';
import {
  BILLING_DEPARTMENT,
  BILLING_DEPARTMENT_FRAGMENT_FRAGMENT_DOC,
  FETCH_BILLING_DEPARTMENTS_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { useIsAuthenticated } from 'src/app.state/permissions/hooks/authentication.permission';
import { Lazy, LazyState } from 'src/utils/lazy';

interface BillingDepartmentsState {
  billing_departments: Lazy<readonly BILLING_DEPARTMENT[]>;
}

const useBillingDepartments = (): BillingDepartmentsState => {
  const is_authenticated = useIsAuthenticated();
  const { data, loading } = useQuery(FETCH_BILLING_DEPARTMENTS_DOCUMENT, {
    skip: !is_authenticated,
  });

  const buildLazyBillingDepartments = (): Lazy<
    readonly BILLING_DEPARTMENT[]
  > => {
    const billing_departments = getFragment(
      BILLING_DEPARTMENT_FRAGMENT_FRAGMENT_DOC,
      data?.billing_departments.departments,
    );

    if (loading) {
      return {
        state: LazyState.LOADING,
        data: billing_departments ?? undefined,
      };
    }

    if (!billing_departments) {
      return {
        state: LazyState.ERROR,
      };
    }

    return {
      state: LazyState.SUCCESS,
      data: billing_departments,
    };
  };

  return {
    billing_departments: buildLazyBillingDepartments(),
  };
};

export { useBillingDepartments };
