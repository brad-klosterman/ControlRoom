import { Icon, Text } from 'components';

import { Row } from './styles';

export const AlarmRow = (props: {
  selected: boolean;
  onSelect(): void;
  address: string;
  type: string | null | undefined;
}) => {
  return (
    <Row gap="xSmall" onClick={props.onSelect} selected={props.selected}>
      {props.type === 'MOBILE_PANIC' ? (
        <Icon.MobilePhone style={{ fontSize: '1.25rem' }} />
      ) : (
        <Icon.House7 style={{ fontSize: '1.25rem' }} />
      )}
      <Text isTruncated size="labelSmall" style={{ lineHeight: 1 }}>
        {props.address}
      </Text>
    </Row>
  );
};
