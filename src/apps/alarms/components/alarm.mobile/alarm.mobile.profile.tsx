import {
  FlexContent,
  Title,
} from 'apps/alarms/components/alarm.expander/content/styles';
import { end_left } from 'apps/alarms/components/alarm.expander/grid';
import {
  ImageContainer,
  UserDescription,
} from 'apps/alarms/components/alarm.mobile/styles';
import { ALARM_CUSTOMER_FRAGMENT, Maybe } from 'codegen/graphql';
import { Grid, Text } from 'components';
import { ProfilePlaceholder } from 'images';

const mergeTitle = (
  title: string | null | undefined,
  name: string | null | undefined,
) => {
  if (name && title) return `${title} ${name}`;

  return name || '';
};

const AlarmMobileProfile = ({
  customer,
  instructions_acknowledged,
  profile_picture,
  visible,
}: {
  visible: boolean;
  profile_picture: Maybe<string> | undefined;
  instructions_acknowledged: boolean;
  customer: ALARM_CUSTOMER_FRAGMENT | undefined | null;
}) => {
  if (!visible) return null;

  return (
    <>
      <Grid.Cell x={[0, end_left]} y={[1, 2]}>
        <FlexContent gap="xLarge">
          <ImageContainer>
            <img
              alt=""
              src={profile_picture ?? ProfilePlaceholder}
              style={{
                borderRadius: '4px',
                // maxWidth: '24rem',
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </ImageContainer>
        </FlexContent>
      </Grid.Cell>
      {instructions_acknowledged && (
        <>
          <Grid.Cell x={[0, end_left]} y={[2, 3]}>
            <Title icon="Person">USER DETAILS</Title>
          </Grid.Cell>
          <Grid.Cell x={[0, end_left]} y={[3, 4]}>
            <UserDescription>
              <Text>
                {mergeTitle(
                  customer?.contact.title,
                  `${customer?.contact.first_name} ${customer?.contact.last_name}`,
                ).toUpperCase()}
              </Text>
              <Text>
                {customer?.contact.mobile_phone ||
                  customer?.contact.landline_phone}
              </Text>
            </UserDescription>
          </Grid.Cell>
        </>
      )}
    </>
  );
};

export default AlarmMobileProfile;
