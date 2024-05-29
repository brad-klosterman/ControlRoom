import { AlarmData } from 'apps/tracking/types';
import { Flex, Icon, Text } from 'components/ui';
import { LiveTrackedResponder } from 'src/apps/admin/user_management/responders/responder-tracking';
import { formatDateTime, toUpperSentence } from 'utils';

export const InfoContent = ({ alarm }: { alarm: AlarmData }) => {
  return (
    <Flex direction="column" gap="regular">
      <Flex alignItems="center" gap="small">
        {alarm.type === 'MOBILE_PANIC' ? (
          <Icon.MobilePhone style={{ fontSize: '1.75rem' }} />
        ) : (
          <Icon.House7 style={{ fontSize: '1.75rem' }} />
        )}
        <Text isBold size="displaySmall">
          {alarm.address || `${alarm.position?.lat} ${alarm.position?.lng}`}
        </Text>
      </Flex>
      <Text isBold size="labelLarge">
        {formatDateTime({
          date: alarm.created_at,
          format: 'time',
          locale: 'en-ZA',
        })}
      </Text>
      <Text isBold size="labelLarge">
        TYPE: {alarm.type}
      </Text>
      <Text isBold size="labelLarge">
        STATE: {toUpperSentence(alarm.alarm_state)}
      </Text>
    </Flex>
  );
};

export const ResponderInfo = ({
  responder,
}: {
  responder: LiveTrackedResponder;
}) => {
  return (
    <Flex direction="column" gap="regular">
      <Flex alignItems="center" gap="small">
        <Icon.BrandPerson style={{ fontSize: '1.75rem' }} />
        <Text isBold size="displaySmall">
          {responder.name?.toUpperCase()}
        </Text>
      </Flex>
      <Text isBold size="labelLarge">
        HEADING: {responder.heading}
      </Text>
    </Flex>
  );
};
