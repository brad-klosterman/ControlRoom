/* eslint-disable @typescript-eslint/no-throw-literal */
import { useMutation } from '@apollo/client';

import useResponseStatus from 'hooks/use.response-status';
import {
  ACKNOWLEDGE_ALARM_INSTRUCTIONS_DOCUMENT,
  ALARM_SOURCE,
  ALARM_STACK,
  ASSIGN_RESPONDER_DOCUMENT,
  CANCEL_ALARM_DOCUMENT,
  CLOSE_ALARM_DOCUMENT,
  INCREASE_ALARM_DOCUMENT,
  MUTATION_ASSIGN_RESPONDER_ARGS,
  MUTATION_CANCEL_ALARM_ARGS,
  MUTATION_CLOSE_ALARM_ARGS,
  MUTATION_INCREASE_ALARM_ARGS,
  MUTATION_UPDATE_ALARM_NOTES_ARGS,
  UPDATE_ALARM_NOTES_DOCUMENT,
} from 'src/apollo/codegen/graphql';

interface UseMutateAlarmsActions {
  acknowledgeAlarmInstructions: (args: {
    alarm_id: number;
    alarm_source: ALARM_SOURCE;
  }) => Promise<void>;
  updateAlarmNotes: (args: MUTATION_UPDATE_ALARM_NOTES_ARGS) => Promise<void>;
  cancelAlarm: (args: MUTATION_CANCEL_ALARM_ARGS) => Promise<void>;
  closeAlarm: (args: MUTATION_CLOSE_ALARM_ARGS) => Promise<void>;
  dispatchAlarm: (args: MUTATION_ASSIGN_RESPONDER_ARGS) => Promise<void>;
  increaseAlarm: (
    args: MUTATION_INCREASE_ALARM_ARGS & {
      alarm_stack: ALARM_STACK;
    },
  ) => Promise<void>;
}

const useAlarmMutations = (): UseMutateAlarmsActions => {
  const { errorAlert, successAlert } = useResponseStatus();

  const [acknowledge_alarm_instructions] = useMutation(
    ACKNOWLEDGE_ALARM_INSTRUCTIONS_DOCUMENT,
  );

  const [update_alarm_notes] = useMutation(UPDATE_ALARM_NOTES_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.update_alarm_notes;

      if (successful) {
        successAlert('Successfully Saved Alarm Notes');
      }
    },
    onError: error => {
      console.error(error);
      errorAlert('Error Saving Alarm Notes');
    },
  });

  const [dispatch_alarm] = useMutation(ASSIGN_RESPONDER_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.assign_responder;

      if (successful) {
        successAlert('Successfully Dispatched Alarm');
      }
    },
    onError: error => {
      console.error(error);
      errorAlert('Error Dispatching Alarm');
    },
  });

  const [cancel_alarm] = useMutation(CANCEL_ALARM_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.cancel_alarm;

      if (successful) {
        successAlert('Successfully Cancelled Alarm');
      }
    },
    onError: error => {
      console.error(error);
      errorAlert('Error Cancelling Alarm');
    },
  });

  const [close_alarm] = useMutation(CLOSE_ALARM_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.close_alarm;

      if (successful) {
        successAlert('Successfully Closed Alarm');
      }
    },
    onError: error => {
      console.error(error);
      errorAlert('Error Closing Alarm');
    },
  });

  const [increase_alarm] = useMutation(INCREASE_ALARM_DOCUMENT, {
    onCompleted: async data => {
      const successful = data?.increase_alarm;

      if (successful) {
        successAlert('Successfully Increased Alarm');
      }
    },
    onError: error => {
      console.error(error);
      errorAlert('Error Increasing Alarm');
    },
  });

  return {
    acknowledgeAlarmInstructions: async (args: {
      alarm_id: number;
      alarm_source: ALARM_SOURCE;
    }): Promise<void> => {
      try {
        const { data } = await acknowledge_alarm_instructions({
          variables: args,
        });
        const successful = data?.acknowledge_alarm_instructions;

        if (successful) {
          successAlert('Acknowledged Instructions', {
            id: args.alarm_id + 'acknowledged_instructions',
          });
        }
      } catch (error: any) {
        errorAlert('Could Not Acknowledge Instructions', {
          id: args.alarm_id + 'error_acknowledged_instructions',
        });
      }
    },
    updateAlarmNotes: async (
      args: MUTATION_UPDATE_ALARM_NOTES_ARGS,
    ): Promise<void> => {
      await update_alarm_notes({
        variables: args,
      });
    },
    cancelAlarm: async (args: MUTATION_CANCEL_ALARM_ARGS): Promise<void> => {
      await cancel_alarm({
        variables: args,
      });
    },
    closeAlarm: async (args: MUTATION_CLOSE_ALARM_ARGS): Promise<void> => {
      await close_alarm({
        variables: args,
      });
    },
    dispatchAlarm: async (
      args: MUTATION_ASSIGN_RESPONDER_ARGS,
    ): Promise<void> => {
      await dispatch_alarm({
        variables: args,
      });
    },
    increaseAlarm: async (
      args: MUTATION_INCREASE_ALARM_ARGS & { alarm_stack: ALARM_STACK },
    ): Promise<void> => {
      await increase_alarm({
        variables: args,
      });
    },
  };
};

export type { UseMutateAlarmsActions };
export { useAlarmMutations };
