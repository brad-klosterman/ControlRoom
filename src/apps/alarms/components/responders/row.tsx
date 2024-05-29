import { LiveTrackedResponder } from 'apps/admin/user_management/responders/types';
import { Text } from 'components';

import { Row, Status, Details } from './styles';

const ResponderRow = ({
  onSelect,
  responder,
  selected,
}: {
  selected: boolean;
  onSelect(responder: LiveTrackedResponder): void;
  responder: LiveTrackedResponder;
}) => {
  if (responder.status === 'INACTIVE') {
    return null;
  }

  return (
    <Row is_selected={selected} onClick={() => onSelect(responder)}>
      <Status status={responder.status || 'OCCUPIED'} />
      <Details>
        <Text style={{ lineHeight: 1 }}>{responder.name.toUpperCase()}</Text>
        {responder.km_distance_to_destination ? (
          <Text style={{ lineHeight: 1 }}>
            {Math.round(responder.km_distance_to_destination) === 0
              ? '<1'
              : Math.round(
                  responder.km_distance_to_destination,
                ).toString()}{' '}
            KM
          </Text>
        ) : (
          <Text style={{ lineHeight: 1 }}>Unknown Distance</Text>
        )}
      </Details>
    </Row>
  );
};

export default ResponderRow;
