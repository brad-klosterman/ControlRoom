import { CORE_ALARM_INCIDENT_REPORT_FRAGMENT } from 'codegen/graphql';
import { Icon, Text } from 'components';
import { toUpperSentence } from 'utils';

import { Container, ItemInner, Row, TextWrap } from './styles';

const IncidentReport = (props: {
  incident_report: CORE_ALARM_INCIDENT_REPORT_FRAGMENT;
}) => {
  const {
    // @ts-ignore
    __typename,
    alarm_id,
    created_at,
    description,
    home_alarm_id,
    id,
    incident_report_images,
    updated_at,
    ...checklist
  } = props.incident_report;
  return (
    <>
      <Container>
        {Object.entries(checklist).map(([key, value]) => (
          <Row label={key} value={Boolean(value)} />
        ))}
      </Container>
      {description && (
        <TextWrap>
          <ItemInner>
            <Icon.Pencil colorKey={'emphasise'} />
            <Text size="labelRegular" style={{ lineHeight: 1 }}>
              NOTES: {toUpperSentence(description)}
            </Text>
          </ItemInner>
        </TextWrap>
      )}
    </>
  );
};

export default IncidentReport;

/*

  id
  alarm_id
  home_alarm_id
  description
  false_alarm
  all_in_order
  damage
  handed_over_to_police_or_ems
  incident_report_images
  property_accessed
  vagrants_in_area
  possible_intrusion
  no_visible_intrusion
  open_door
  open_garage
  open_window
  created_at
  updated_at

 */
