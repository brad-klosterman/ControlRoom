import { useMutation } from '@apollo/client';
import { memo, useState } from 'react';
import { OnlineResponder } from 'apps/admin/user_management/responders/types';
import useLiveResponders from 'apps/admin/user_management/responders/useLiveResponders';
import {
  ActionButtons,
  Button,
  Module,
} from 'apps/alarms/components/alarm.expander/content/styles';
import {
  ALARM_SOURCE,
  ALARM_STACK,
  ASSIGN_RESPONDER_DOCUMENT,
  COORDINATES,
  Maybe,
  MUTATION_ASSIGN_RESPONDER_ARGS,
} from 'codegen/graphql';
import useResponseStatus from 'hooks/use.response-status';
import { mapSeonToGoogleCoordinates } from 'src/utils/geospatial';
import { Form, Text } from 'components/ui';

import ResponderRow from './row';
import { OfflineRow } from './styles';

const Responders = (props: {
  alarm_coordinates: Maybe<COORDINATES> | undefined;
  alarm_id: number;
  alarm_source: ALARM_SOURCE;
  alarm_stack: ALARM_STACK;
  onDispatched(): void;
  onBack(): void;
}) => {
  const { live_responders } = useLiveResponders({
    destination_coordinates: mapSeonToGoogleCoordinates(
      props.alarm_coordinates,
    ),
  });

  // filter only AVAILABLE responders for mobile panics
  // there is an issue with pending delegations for mobile panics
  const responders =
    props.alarm_source === 'USER_APP'
      ? live_responders.filter(responder => responder.status === 'AVAILABLE')
      : live_responders;

  const [selected_responder, setSelectedResponder] =
    useState<OnlineResponder | null>(null);

  const [dispatching_offline, setDispatchingOffline] = useState(
    live_responders.length === 0,
  );

  const onInputName = (name: string) => {
    if (name === '') {
      setSelectedResponder(null);
    } else {
      setSelectedResponder({
        id: -1,
        name,
        status: 'AVAILABLE',
      });
    }
  };

  const { errorAlert, successAlert } = useResponseStatus({
    id: `${props.alarm_id}_alarm_responder`,
  });

  const [assign_responder_alarm, { loading }] = useMutation(
    ASSIGN_RESPONDER_DOCUMENT,
    {
      onCompleted: async data => {
        const successful = data?.assign_responder;

        if (successful) successAlert('SUCCESSFULLY ASSIGNED RESPONDER');
      },
      onError: () => {
        errorAlert('ERROR ASSIGNING RESPONDER');
      },
    },
  );

  const onDispatchResponder = async () => {
    const variables: MUTATION_ASSIGN_RESPONDER_ARGS = {
      alarm_id: props.alarm_id,
      alarm_source: props.alarm_source,
      reassigning: props.alarm_stack === 'ENROUTE',
      responder_id: selected_responder?.id,
    };

    if (dispatching_offline && selected_responder) {
      variables.offline_name = selected_responder.name;
    }

    assign_responder_alarm({
      variables,
    }).then(() => {
      props.onDispatched();
    });
  };

  const onFocusOfflineInput = () => {
    setDispatchingOffline(prev => !prev);
    setSelectedResponder(null);
  };

  return (
    <>
      <Module>
        {responders.map(responder => (
          <ResponderRow
            key={responder.id}
            onSelect={selectedValue => {
              setSelectedResponder(selectedValue);
              setDispatchingOffline(false);
            }}
            responder={responder}
            selected={selected_responder?.id === responder.id}
          />
        ))}
        <OfflineRow
          is_selected={dispatching_offline}
          onClick={onFocusOfflineInput}
        >
          <Text
            margin={{ bottom: dispatching_offline ? 'xxSmall' : 'none' }}
            style={{ lineHeight: 1 }}
          >
            DISPATCH OFFLINE RESPONDER
          </Text>
          {dispatching_offline && (
            <Form.Field>
              <Form.Field.Input
                autoComplete="off"
                id="input"
                name="input"
                onChange={e => onInputName(e.target.value)}
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                placeholder="Responders Name"
              />
            </Form.Field>
          )}
        </OfflineRow>
      </Module>
      <ActionButtons>
        <Button
          isLoading={loading}
          onClick={props.onBack}
          variant="other-secondary"
        >
          BACK
        </Button>
        <Button
          disabled={!selected_responder}
          isLoading={loading}
          onClick={onDispatchResponder}
        >
          DISPATCH RESPONDER
        </Button>
      </ActionButtons>
    </>
  );
};

export default memo(Responders);
