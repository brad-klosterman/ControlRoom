import { RESPONDER_STATUS } from 'codegen/graphql';
import { Text } from 'components';

import { ResponderStatus, Row } from './styles';

export const ResponderRow = (props: {
  selected: boolean;
  onSelect(): void;
  name: string;
  status: RESPONDER_STATUS;
}) => {
  return (
    <Row onClick={props.onSelect} selected={props.selected}>
      <ResponderStatus status={props.status} />
      <Text isTruncated size="labelSmall" style={{ lineHeight: 1 }}>
        {props.name.toUpperCase()} ({props.status})
      </Text>
    </Row>
  );
};
