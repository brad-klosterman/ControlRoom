import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { OnlineResponder } from 'apps/admin/user_management/responders/types';
import {
  ALARM_SOURCE,
  ALARM_STACK,
  ASSIGN_RESPONDER_DOCUMENT,
  MUTATION_ASSIGN_RESPONDER_ARGS
} from 'codegen/graphql';
import useResponseStatus from 'hooks/use.response-status';

const useAlarmResponders = (props: {
  alarm_id: number;
  alarm_source: ALARM_SOURCE;
  onDispatchComplete(): void;
  onStartAssigning(): void;
  alarm_stack: ALARM_STACK;
}) => {
  const [responders_visible, setRespondersVisible] = useState(false);

  const [selected_responder, setSelectedResponder] =
    useState<OnlineResponder | null>(null);

  const dispatch_button_disabled = responders_visible
    ? !selected_responder
    : false;

  const dispatching_offline = selected_responder?.id === -1;

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'alarm_responder'
  });

  const [assign_responder_alarm] = useMutation(ASSIGN_RESPONDER_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.assign_responder;

      if (successful) successAlert('SUCCESSFULLY ASSIGNED RESPONDER');
    },
    onError: () => {
      errorAlert('ERROR ASSIGNING RESPONDER');
    }
  });

  const assignResponder = async () => {
    if (!responders_visible) {
      props.onStartAssigning();
      setRespondersVisible(true);
    } else {
      const variables: MUTATION_ASSIGN_RESPONDER_ARGS = {
        alarm_id: props.alarm_id,
        alarm_source: props.alarm_source,
        reassigning: props.alarm_stack === 'ENROUTE',
        responder_id: selected_responder?.id
      };

      if (dispatching_offline) {
        variables.offline_name = selected_responder.name;
      }

      assign_responder_alarm({
        variables
      }).then(() => {
        setRespondersVisible(false);
        props.onDispatchComplete();
      });
    }
  };

  return {
    selected_responder,
    setSelectedResponder,
    responders_visible,
    setRespondersVisible,
    assignResponder,
    dispatch_button_disabled
  };
};

export default useAlarmResponders;
