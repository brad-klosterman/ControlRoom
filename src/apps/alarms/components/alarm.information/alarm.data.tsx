import { memo } from 'react';

import { getFragment } from 'codegen';
import {
  CORE_ALARM_FRAGMENT,
  CORE_TRANSMITTER_FRAGMENT_DOC,
} from 'codegen/graphql';
import { Text } from 'components/ui';

import { InfoBox, InfoLabel, Information, InfoValue } from './styles';

const AlarmData = ({
  alarm,
}: {
  alarm: CORE_ALARM_FRAGMENT | null | undefined;
}) => {
  const triggered_transmitter = getFragment(
    CORE_TRANSMITTER_FRAGMENT_DOC,
    alarm?.triggered_transmitter,
  );
  return (
    <Information>
      <InfoBox>
        <InfoLabel>ALARM ID</InfoLabel>
        <InfoValue>{alarm?.id}</InfoValue>
      </InfoBox>
      <InfoBox>
        <InfoLabel>AREA</InfoLabel>
        <InfoValue>{triggered_transmitter?.area?.name || '-'}</InfoValue>
      </InfoBox>
      <InfoBox>
        <InfoLabel>PROPERTY</InfoLabel>
        <InfoValue>{alarm?.property.type}</InfoValue>
      </InfoBox>
      <InfoBox>
        <InfoLabel>DECODER</InfoLabel>
        <InfoValue>{triggered_transmitter?.decoder?.name || '-'}</InfoValue>
      </InfoBox>
      <InfoBox>
        <InfoLabel>TRANSMITTER</InfoLabel>
        <InfoValue>{triggered_transmitter?.number || '-'}</InfoValue>
      </InfoBox>
    </Information>
  );
};

export default memo(AlarmData);
