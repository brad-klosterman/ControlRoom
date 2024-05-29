import { useState } from 'react';

import CancelReason from 'apps/alarms/components/alarm.cancel';
import {
  end_right,
  start_right,
} from 'apps/alarms/components/alarm.expander/grid';
import AssignAgent from 'apps/alarms/components/assign_agent';
import Keyholders from 'apps/alarms/components/keyholders';
import VerifyPassword from 'apps/alarms/components/password';
import Responders from 'apps/alarms/components/responders';
import { useAlarmsState } from 'apps/alarms/state/provider';
import {
  ALARM_KEYHOLDER_LOG_FRAGMENT,
  ALARM_SOURCE,
  ALARM_STACK,
  ALARM_STATE,
  COORDINATES,
  Maybe,
  PROPERTY_KEYHOLDER,
  SECURITY_QUESTION_ANSWER,
} from 'codegen/graphql';
import { Grid } from 'components';
import Icon from 'components/ui/Icon';
import { RequiresManageAlarmsPermission } from 'src/app.state/permissions/hooks/manage-alarms.permission';

import { ActionButtons, Button, Module, Title } from './styles';

type ContentRightView =
  | 'unassigned'
  | 'keyholders'
  | 'responders'
  | 'verify_password'
  | 'cancel_reason';

const titles: Record<
  ContentRightView,
  { label: string; icon: keyof typeof Icon }
> = {
  unassigned: {
    label: 'REVIEW INFORMATION & INSTRUCTIONS',
    icon: 'Info',
  },
  keyholders: {
    label: 'CALL KEYHOLDERS IN ORDER',
    icon: 'Phone',
  },
  responders: {
    label: 'AVAILABLE RESPONDERS',
    icon: 'MapPin',
  },
  verify_password: {
    label: 'VERIFY PASSWORD',
    icon: 'Padlock',
  },
  cancel_reason: {
    label: 'SELECT A CANCEL REASON',
    icon: 'ListUnordered',
  },
};

const ContentRight = (props: {
  alarm_id: number;
  property_id: Maybe<number>;
  alarm_source: ALARM_SOURCE;
  alarm_state: ALARM_STATE;
  alarm_stack: ALARM_STACK;
  alarm_coordinates: Maybe<COORDINATES> | undefined;
  keyholders: Maybe<PROPERTY_KEYHOLDER[]> | undefined;
  keyholder_logs: ALARM_KEYHOLDER_LOG_FRAGMENT[];
  property_password: string | null | undefined;
  customer_verified_password: boolean;
  assigned_to_user: boolean;
  onRemovedFromStack(): void;
  onUserAssigned(): void;
}) => {
  const {
    alarm_coordinates,
    alarm_id,
    alarm_source,
    alarm_stack,
    assigned_to_user,
    keyholder_logs,
    keyholders,
    property_id,
    property_password,
  } = props;
  const [is_form_loading, setIsFormLoading] = useState(false);
  const [view, setView] = useState<ContentRightView>(
    assigned_to_user ? 'keyholders' : 'unassigned',
  );

  const [password_state, setPasswordState] = useState<
    (SECURITY_QUESTION_ANSWER | 'not_answered') | 'not_available'
  >(
    props.customer_verified_password
      ? 'correct'
      : props.property_password
      ? 'not_answered'
      : 'not_available',
  );

  const [cancel_reason, setCancelReason] = useState<string | null>(null);

  const { actions } = useAlarmsState();

  const onAssignUser = async () => {
    setIsFormLoading(true);
    try {
      await actions.acknowledgeAlarmInstructions({
        alarm_id,
        alarm_source,
      });

      setView('keyholders');
      props.onUserAssigned();
    } finally {
      setIsFormLoading(false);
    }
  };

  const onResponderDispatched = () => {
    setView('keyholders');

    if (alarm_stack === 'EMERGENCY') {
      props.onRemovedFromStack();
    }
  };

  const setAlarmPasswordState = (answer: SECURITY_QUESTION_ANSWER) => {
    setPasswordState(answer);
    setView('cancel_reason');
  };

  const onCancelAlarm = async () => {
    if (cancel_reason) {
      setIsFormLoading(true);

      try {
        await actions.cancelAlarm({
          alarm_id,
          alarm_source,
          cancel_reason,
        });

        props.onRemovedFromStack();
      } finally {
        setIsFormLoading(false);
      }
    }
  };

  const can_complete_alarm = [
    'RESPONDER_SAVED_PROPERTY',
    'ALARM_COMPLETED',
    'KEYHOLDER_CANCELLED',
  ].includes(props.alarm_state);

  const completeAlarm = async () => {
    setIsFormLoading(true);
    try {
      await actions.closeAlarm({
        alarm_id,
        alarm_source,
        close_reason: 'completed',
      });
      props.onRemovedFromStack();
    } finally {
      setIsFormLoading(false);
    }
  };

  const moveToEmergency = async () => {
    setIsFormLoading(true);
    try {
      await actions.increaseAlarm({
        alarm_id,
        alarm_stack: 'NON_EMERGENCY',
      });

      props.onRemovedFromStack();
    } finally {
      setIsFormLoading(false);
    }
  };

  const getResponderButtonText = () => {
    if (alarm_stack === 'EMERGENCY') {
      return 'DISPATCH RESPONDER';
    }

    if (can_complete_alarm) {
      return 'RE-DISPATCH RESPONDER';
    }

    return 'SUBSTITUTE RESPONDER';
  };

  const should_show_responder_button =
    props.alarm_state !== 'KEYHOLDER_CANCELLED';

  const ShowResponderButton = (
    <Button
      isLoading={is_form_loading}
      onClick={() => setView('responders')}
      variant={alarm_stack === 'EMERGENCY' ? 'primary' : 'secondary'}
    >
      {getResponderButtonText()}
    </Button>
  );

  const CompleteButton = (
    <Button onClick={completeAlarm} isLoading={is_form_loading}>
      COMPLETE
    </Button>
  );

  const ShowCancelFormButton = (
    <Button
      onClick={() => {
        if (password_state === 'not_answered') {
          setView('verify_password');
        } else {
          setView('cancel_reason');
        }
      }}
      variant="delete"
    >
      CANCEL ALARM
    </Button>
  );

  const ConfirmCancelButton = (
    <Button
      disabled={!cancel_reason}
      isLoading={is_form_loading}
      onClick={onCancelAlarm}
      variant="dangerous"
    >
      CONFIRM CANCEL
    </Button>
  );

  const IncreaseButton = (
    <Button
      isLoading={is_form_loading}
      onClick={moveToEmergency}
      variant="delete"
    >
      MOVE TO EMERGENCY
    </Button>
  );

  const LogAwayButton = (
    <Button
      isLoading={is_form_loading}
      onClick={completeAlarm}
      variant="other-secondary"
    >
      LOG AWAY
    </Button>
  );

  const BackButton = (
    <Button
      isLoading={is_form_loading}
      onClick={() => setView('keyholders')}
      variant="other-secondary"
    >
      BACK
    </Button>
  );

  return (
    <>
      <Grid.Cell x={[start_right, end_right]} y={[0, 1]}>
        <Title icon={titles[view].icon}>{titles[view].label}</Title>
      </Grid.Cell>
      <Grid.Cell
        spacing="xLarge"
        style={{ flexDirection: 'column' }}
        x={[start_right, end_right]}
        y={[1, view === 'unassigned' ? 2 : 4]}
      >
        {(() => {
          switch (view) {
            case 'unassigned':
              return (
                <>
                  <AssignAgent />
                  <RequiresManageAlarmsPermission>
                    <ActionButtons>
                      <Button
                        isLoading={is_form_loading}
                        onClick={onAssignUser}
                      >
                        ACKNOWLEDGE INSTRUCTIONS
                      </Button>
                    </ActionButtons>
                  </RequiresManageAlarmsPermission>
                </>
              );
            case 'keyholders':
              return (
                <>
                  <Module>
                    <Keyholders
                      {...{
                        alarm_id,
                        keyholder_logs,
                        keyholders,
                        property_id,
                        property_password,
                      }}
                      setAlarmPasswordState={state => setPasswordState(state)}
                    />
                  </Module>
                  {alarm_stack !== 'NON_EMERGENCY' && (
                    <ActionButtons>
                      {can_complete_alarm
                        ? CompleteButton
                        : ShowCancelFormButton}
                      {should_show_responder_button && ShowResponderButton}
                    </ActionButtons>
                  )}
                  {alarm_stack === 'NON_EMERGENCY' && (
                    <ActionButtons>
                      {IncreaseButton}
                      {LogAwayButton}
                    </ActionButtons>
                  )}
                </>
              );
            case 'responders':
              return (
                <Responders
                  {...{
                    alarm_id,
                    alarm_stack,
                    alarm_source,
                    alarm_coordinates,
                  }}
                  onBack={() => setView('keyholders')}
                  onDispatched={onResponderDispatched}
                />
              );
            case 'verify_password':
              return (
                <>
                  <Module>
                    <VerifyPassword
                      alarm_id={alarm_id}
                      alarm_source={alarm_source}
                      locked={password_state !== 'not_answered'}
                      property_password={property_password}
                      setAlarmPasswordState={setAlarmPasswordState}
                      variant="property_owner"
                    />
                  </Module>
                  <ActionButtons>{BackButton}</ActionButtons>
                </>
              );
            case 'cancel_reason':
              return (
                <>
                  <CancelReason
                    {...{ setCancelReason, cancel_reason, password_state }}
                  />
                  <ActionButtons>
                    {BackButton}
                    {ConfirmCancelButton}
                  </ActionButtons>
                </>
              );
            default:
              return null;
          }
        })()}
      </Grid.Cell>
    </>
  );
};

export default ContentRight;
