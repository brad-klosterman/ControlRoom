import { memo, useEffect, useRef } from 'react';

import { InteractionStatesProps } from 'auxiliary';
import { PROPERTY_PROFILE_KEYHOLDER_FRAGMENT } from 'codegen/graphql';
import { Grid } from 'components';
import { Flex, Icon, Text } from 'components/ui';
import { Expander, useExpanderNodeContext } from 'components/ui/Expander';

import * as S from './styles';

export interface KeyholderRowProps extends InteractionStatesProps {
  dropIndex: number;
  handleDragEnd: (event: Event) => void;
  handleDragEnter: (event: Event) => void;
  handleDragLeave: (event: Event) => void;
  index: number;
  keyholder: PROPERTY_PROFILE_KEYHOLDER_FRAGMENT;
  onDragStart: (event: Event) => void;
  is_dragging_disabled?: boolean;
}

const KeyholderRow = ({
  active,
  dropIndex,
  handleDragEnd,
  handleDragEnter,
  handleDragLeave,
  index,
  is_dragging_disabled,
  keyholder,
  onDragStart,
  ...rest
}: KeyholderRowProps) => {
  const { isOpen } = useExpanderNodeContext();
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (is_dragging_disabled) {
      return;
    }

    const dragRef = nodeRef.current;

    if (dragRef) {
      dragRef.addEventListener('dragenter', handleDragEnter);
      dragRef.addEventListener('dragleave', handleDragLeave);
      dragRef.addEventListener('dragstart', onDragStart);
      dragRef.addEventListener('dragend', handleDragEnd);
    }

    return () => {
      if (dragRef) {
        dragRef.removeEventListener('dragenter', handleDragEnter);
        dragRef.removeEventListener('dragleave', handleDragLeave);
        dragRef.removeEventListener('dragstart', onDragStart);
        dragRef.removeEventListener('dragend', handleDragEnd);
      }
    };
  }, [handleDragEnd, handleDragEnter, handleDragLeave, onDragStart]);

  return (
    <>
      {dropIndex === index && <S.Divider />}
      <S.Row
        {...{
          ...rest,
          draggable: !is_dragging_disabled,
          is_expanded: isOpen,
          ref: nodeRef,
        }}
      >
        <Grid spacing="regular" style={{ width: '100%' }}>
          <Grid.Cell
            alignItems="center"
            spacing="regular"
            x={[0, 3]}
            y={[0, 1]}
          >
            {!is_dragging_disabled && (
              <Icon.Menu style={{ fontSize: '2rem', marginTop: '-0.2rem' }} />
            )}
            <Text size="displayRegular">{index + 1}</Text>
            <Flex direction="column">
              <Text isTruncated size="displayRegular">
                {keyholder?.name?.toUpperCase()}
              </Text>
              <Text colorKey="secondary" isTruncated size="displaySmall">
                {keyholder?.description?.toUpperCase()}
              </Text>
            </Flex>
          </Grid.Cell>
          <Grid.Cell
            alignItems="center"
            spacing="regular"
            x={[3, 6]}
            y={[0, 1]}
          >
            <Flex direction="column" gap="xSmall">
              {keyholder.mobile_phone && (
                <Flex alignItems="center" gap="xSmall">
                  <Icon.MobilePhone style={{ fontSize: '1.5rem' }} />
                  <Text size="displayRegular">{keyholder.mobile_phone}</Text>
                </Flex>
              )}
              {keyholder.landline_phone && (
                <Flex alignItems="center" gap="xSmall">
                  <Icon.Phone style={{ fontSize: '1.5rem' }} />
                  <Text size="displayRegular">{keyholder.landline_phone}</Text>
                </Flex>
              )}
            </Flex>
          </Grid.Cell>
          <Grid.Cell
            alignItems="center"
            spacing="regular"
            x={[6, 9]}
            y={[0, 1]}
          >
            <Flex direction="column" gap="xSmall">
              <Flex alignItems="center" gap="xSmall">
                {keyholder?.user_app_id ? <Icon.Tick /> : <Icon.Cross />}
                <Text>REGISTERED FOR USER APP</Text>
              </Flex>
              <Flex alignItems="center" gap="xSmall">
                {keyholder?.triggered_panics_allowed ? (
                  <Icon.Tick />
                ) : (
                  <Icon.Cross />
                )}
                <Text>MOBILE APP ALARMS ENABLED</Text>
              </Flex>
            </Flex>
          </Grid.Cell>
          <Grid.Cell
            alignItems="center"
            spacing="regular"
            x={[9, 12]}
            y={[0, 1]}
          >
            <Flex direction="column" gap="xSmall">
              <Flex alignItems="center" gap="xSmall">
                {keyholder?.sms_notifications_enabled ? (
                  <Icon.Tick />
                ) : (
                  <Icon.Cross />
                )}
                <Text>SMS NOTIFICATIONS ENABLED</Text>
              </Flex>
              <Flex alignItems="center" gap="xSmall">
                {keyholder?.push_notifications_enabled ? (
                  <Icon.Tick />
                ) : (
                  <Icon.Cross />
                )}
                <Text>PUSH NOTIFICATIONS ENABLED</Text>
              </Flex>
            </Flex>
          </Grid.Cell>
        </Grid>

        <Expander.Arrow />
      </S.Row>
    </>
  );
};

export default memo(KeyholderRow);
//
// <Flex direction="column" gap="xxSmall">
//   <Text size="displayRegular">{keyholder.name}</Text>
//   <Text colorKey="secondary" size="labelLarge">
//     {keyholder.description}
//   </Text>
// </Flex>

// <Grid spacing="xxSmall">
//   <Grid.Cell x={[0, 4]} y={[0, 1]}>
//     <Text size="displayRegular">
//       {keyholder.name || keyholder.description}
//     </Text>
//   </Grid.Cell>
//   <Grid.Cell x={[0, 4]} y={[1, 2]}>
//     <>
//       {keyholder.mobile_phone && (
//         <S.IconWrap>
//           <Icon.MobilePhone colorKey="secondary" />
//           <Text colorKey="secondary" size="displaySmall">
//             {keyholder.mobile_phone}
//           </Text>
//         </S.IconWrap>
//       )}
//       {keyholder.landline_number && (
//         <S.IconWrap>
//           <Icon.Phone colorKey="secondary" />
//           <Text colorKey="secondary" size="displaySmall">
//             {keyholder.landline_number}
//           </Text>
//         </S.IconWrap>
//       )}
//     </>
//   </Grid.Cell>
//
//   <Grid.Cell alignItems="center" x={[4, 8]} y={[0, 1]}>
//     <KeyholderServices
//       isEnabled={Boolean(keyholder.registering_for_user_app_enabled)}
//       label="Registering For User App Enabled"
//     />
//   </Grid.Cell>
//   <Grid.Cell alignItems="center" x={[4, 8]} y={[1, 2]}>
//     <KeyholderServices
//       isEnabled={Boolean(keyholder.push_notifications_enabled)}
//       label="Push Notifications Enabled"
//     />
//   </Grid.Cell>
//   <Grid.Cell alignItems="center" x={[8, 12]} y={[0, 1]}>
//     <KeyholderServices
//       isEnabled={Boolean(keyholder.triggered_panics_allowed)}
//       label="Triggering Mobile Alarms Allowed"
//     />
//   </Grid.Cell>
//   <Grid.Cell alignItems="center" x={[8, 12]} y={[1, 2]}>
//     <KeyholderServices
//       isEnabled={Boolean(keyholder.sms_notifications_enabled)}
//       label="SMS Notifications Enabled"
//     />
//   </Grid.Cell>
// </Grid>
