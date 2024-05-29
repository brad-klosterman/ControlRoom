import { useEffect } from 'react';

import { useProperty } from 'apps/customers/customer/property/provider';
import { Flex, Text } from 'components';
import { Label } from 'components/ui/Form/form.elements';
import { RequiresSuspendCustomersPermission } from 'src/app.state/permissions/hooks/suspend-customers.permission';
import { useFormattedTimer } from 'src/utils/date.utils/use.formatted-timer';
import { PropertyStatusTag } from 'src/components/properties';
import { getFragment } from 'src/apollo/codegen';
import { SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC } from 'src/apollo/codegen/graphql';
import {
  ScheduledStatusChangeInfo,
  CurrentStatusChangeInfo,
} from 'src/components/status-change-info';

const PropertyStatus = () => {
  const { dispatch, property } = useProperty();
  const refetchProperty = () => {
    dispatch('FETCH_PROPERTY', { id: property?.id });
  };
  const { startTimer, stopTimer, formatted_time } = useFormattedTimer({
    onTimerEnd: refetchProperty,
  });

  useEffect(() => {
    // Only refetch property if on the initial load, testing is enabled
    // This is just to update to the most recent time
    if (property?.testing_enabled && property?.testing_time) {
      refetchProperty();
    }
  }, []);

  useEffect(() => {
    if (property?.testing_enabled && property?.testing_time) {
      startTimer(property.testing_time);
    } else {
      stopTimer();
    }
  }, [property?.testing_enabled, property?.testing_time]);

  const scheduled_status_change = getFragment(
    SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC,
    property?.scheduled_status_changes,
  );
  return formatted_time ? (
    <Flex
      alignItems="center"
      direction="column"
      fitWidth
      gap="xxSmall"
      justifyContent="flex-start"
      style={{ height: '4.65rem' }}
    >
      <Text colorKey="warning" size="displayRegular">
        PROPERTY TESTING ENABLED
      </Text>
      <Text colorKey="warning" size="displaySmall">
        {formatted_time} Remaining
      </Text>
    </Flex>
  ) : (
    <RequiresSuspendCustomersPermission>
      <Label>Property Status</Label>
      <PropertyStatusTag status={property?.status} />
      {property && (
        <CurrentStatusChangeInfo
          entity={property}
          style={{ marginTop: '1rem', width: '100%' }}
        />
      )}
      {scheduled_status_change && (
        <ScheduledStatusChangeInfo
          scheduled_status_changes={scheduled_status_change}
          current_status={property?.status}
          style={{ marginTop: '1rem', width: '100%' }}
        />
      )}
      <Text></Text>
    </RequiresSuspendCustomersPermission>
  );
};

export default PropertyStatus;
