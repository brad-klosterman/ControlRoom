import { InputState } from 'react-input-mask';

export const maskToDay = ({ nextState }: { nextState: InputState }) => {
  const { value } = nextState || {};

  let amountFormatted = value?.replace?.(/\D/g, '');
  amountFormatted = amountFormatted?.replace?.(/^0+/g, '');

  if (amountFormatted?.length === 0) {
    return {
      ...nextState,
      selection: {
        end: amountFormatted.length,
        start: amountFormatted.length,
      },
      value: null,
    };
  }

  if (amountFormatted?.length < 2) {
    return {
      ...nextState,
      selection: {
        end: amountFormatted.length + 1,
        start: amountFormatted.length + 1,
      },
      value: `${amountFormatted}`,
    };
  } else {
    return {
      ...nextState,
      selection: {
        end: amountFormatted.length,
        start: amountFormatted.length,
      },
      value: amountFormatted,
    };
  }

  return nextState;
};
