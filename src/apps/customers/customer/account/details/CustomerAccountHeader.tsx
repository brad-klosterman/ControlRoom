import React from 'react';
import { Button, Flex, Icon, Text } from 'components';
import { getLuxonDate } from 'utils';
import Customer from '@customers/customer';
import { ScheduledStatusChangeInfo } from 'components/status-change-info';

/**
 * CustomerAccountHeader
 *
 */
const CustomerAccountHeader = (props: {
  actionHandler: {
    downloadCustomerReport(): void;
  };
}) => {
  const CustomerContext = Customer.useContext();
  const { customer, creating_customer } = CustomerContext;

  if (creating_customer) {
    return (
      <Flex style={{ marginBottom: '2.5rem' }}>
        <Text colorKey="warning" isBold size="displayRegular">
          PENDING CUSTOMER
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      gap="xxLarge"
      style={{ marginBottom: '2.5rem' }}
    >
      <Flex fitWidth gap="small" direction="column">
        <Text isBold size="displayRegular">
          JOINED ON {getLuxonDate(customer?.system_status?.created_on)}
        </Text>
        <ScheduledStatusChangeInfo
          scheduled_status_changes={customer?.scheduled_status_changes}
          current_status={customer?.system_status?.status}
          style={{ width: '100%', marginTop: '1.5rem' }}
        />
      </Flex>
      <Flex fitWidth justifyContent="flex-end">
        <Button
          onClick={props.actionHandler.downloadCustomerReport}
          variant="other-secondary"
          size="small"
        >
          <Icon.Download
            style={{
              marginRight: '0.5rem',
            }}
          />{' '}
          CUSTOMER PDF REPORT
        </Button>
      </Flex>
    </Flex>
  );
};

export { CustomerAccountHeader };
