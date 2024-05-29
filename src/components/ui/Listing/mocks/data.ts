import type { Property } from 'csstype';
import { ISO_3166_ALPHA_2 } from 'iso-3166-ts';

import { TableDataItem } from '../Data';

interface ColumnConfig<ItemProps extends Record<string, any>> {
  dataProps(datum: ItemProps): TableDataItem;
  header: string;
  info?: string;
  property: any;
  skeletonWidth?: Property.Width;
  sortable?: boolean;
  width?: Property.Width;
}

export const customerCountry = (registeredCompanyCountry: any) =>
  registeredCompanyCountry && ISO_3166_ALPHA_2[registeredCompanyCountry];

export const customerColumns: ColumnConfig<any>[] = [
  {
    dataProps: customer => ({
      label: customer.primaryTradingName || '—',
    }),
    header: 'Trading name',
    property: 'tradingName',
    skeletonWidth: '106px',
    sortable: true,
  },
  {
    dataProps: customer => ({
      label: customer.registeredCompanyName || '—',
      subLabel: customer.registeredCompanyNumber || '—',
    }),
    header: 'Registered name',
    property: 'registeredName',
    skeletonWidth: '206px',
    sortable: true,
  },
  {
    dataProps: customer => {
      let label = '—';

      if (customer.registeredCompanyCountry) {
        label = customerCountry(customer.registeredCompanyCountry);
      }

      return {
        label: label || '—',
      };
    },
    header: 'Country',
    property: 'country',
    skeletonWidth: '48px',
  },
  {
    dataProps: ({ subscriptions }) => {
      const count = subscriptions.length;
      if (!count) return { label: '—' };

      const pending = subscriptions.filter(
        (subscription: any) =>
          subscription && subscription.status === 'Pending',
      ).length;

      const accepted = count - pending;
      let label;
      let subLabel;

      if (count === 1) {
        const [first] = subscriptions;
        label = `${first.planName}${pending ? ' (Pending)' : ''}`;
        subLabel = first.planOperatingCompanyName || undefined;
      } else {
        label = `${
          accepted > 0 ? `${accepted} accepted` : `${pending} pending`
        }`;

        subLabel = accepted > 0 && count > 1 ? `${pending} pending` : undefined;
      }

      const action =
        count > 1
          ? subscriptions.map((subscription: any) => ({
              label: subscription.planName || '',
              status: subscription.status !== 'Pending',
              subLabel: subscription.planOperatingCompanyName || '',
            }))
          : undefined;

      return {
        action,
        label: label || '—',
        status: pending === 0,
        subLabel,
      };
    },
    header: 'Plan',
    property: 'plan',
    skeletonWidth: '109px',
  },
];

export const cardStatus = (props: any) => {
  const { subscriptions } = props;
  let label = '—';
  let subLabel;
  let status;
  const count = subscriptions.length;

  if (count) {
    const pending = subscriptions.filter(
      (subscription: any) => subscription && subscription.status === 'Pending',
    ).length;

    const accepted = count - pending;

    if (count === 1) {
      const [first] = subscriptions;
      label = first.planName || label;
      subLabel = pending ? 'Pending' : undefined;
    } else {
      label = `${accepted > 0 ? `${accepted} accepted` : `${pending} pending`}`;
      subLabel = accepted > 0 && count > 1 ? `${pending} pending` : undefined;
    }

    status = pending === 0;
  }

  return { label, status, subLabel };
};
