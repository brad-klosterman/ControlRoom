import { ReducerActions } from './types/voip.actions.types';
import { VoipState } from './types/voip.state.types';

export function VoipReducer(
  state: VoipState,
  action: ReducerActions,
): VoipState {
  switch (action.type) {
    case 'STORE_AGENT_VOIP': {
      return {
        ...state,
        agent: action.payload.voip,
        enabled: action.payload.enabled,
      };
    }
    case 'STORE_ACTIVE_CALL': {
      return {
        ...state,
        active_call: action.payload,
      };
    }
    default:
      return state;
  }
}
