import React from 'react';
import { Modal, Text } from 'components/ui';
import Customer from '@customers/customer';
import { fetchReport } from 'utils/download_documents/fetchReport';
import { API_ROOT } from 'src/apollo/config/endpoints';

/**
 * Customer Report Modal
 *
 */
const useCustomerReportModal = () => {
  const modal = React.useContext(Modal.Context);

  const CustomerContext = Customer.useContext();
  const { customer } = CustomerContext;

  const AUDIT_TRAIL_OPTIONS = [
    { label: 'YES', value: 'true' },
    { label: 'NO', value: 'false' },
  ];

  async function handleDownloadCustomerReport(params: {
    with_audit_trail: 'true' | 'false';
  }) {
    await fetchReport({
      filename: `Customer PDF Report: ${customer?.account_description}`,
      link: `${API_ROOT}/v3/service_provider/mis/billing-accounts/${customer?.id}/overview-report?audit_trail=${params.with_audit_trail}`,
    });
  }

  return {
    open() {
      if (customer?.id)
        modal.open({
          title: 'CUSTOMER PDF REPORT',
          subtitle: `Account: ${customer.account_description}.`,
          info: 'Would you like to include an audit trail with the report?',
          form: [
            {
              label: 'Include Audit Trail',
              name: 'with_audit_trail',
              type: 'Select',
              options: AUDIT_TRAIL_OPTIONS,
              default_value: 'true',
              required: true,
            },
          ],
          actions: [{ type: 'cancel' }, { type: 'confirm', text: 'DOWNLOAD' }],
          async onConfirm(form) {
            handleDownloadCustomerReport(form).then(modal.close);
          },
        });
    },
  };
};

export { useCustomerReportModal };
