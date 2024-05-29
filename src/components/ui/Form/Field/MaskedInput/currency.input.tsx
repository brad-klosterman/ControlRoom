import { InputState } from 'react-input-mask';

// also used for percentage
export const maskToCurrency = ({ nextState }: { nextState: InputState }) => {
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
      value: `${amountFormatted}`,
    };
  }

  if (amountFormatted?.length <= 2) {
    return {
      ...nextState,
      selection: {
        end: amountFormatted.length + 2,
        start: amountFormatted.length + 2,
      },
      value: `0.${amountFormatted}`,
    };
  }

  const amountFormattedWithDot = amountFormatted?.replace?.(
    /(?=\d{2})(\d{2})$/,
    '.$1',
  );

  const amountFormattedWithComma = amountFormattedWithDot?.replace?.(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1,',
  );

  if (amountFormattedWithComma) {
    return {
      ...nextState,
      selection: {
        end: amountFormattedWithComma.length + 3,
        start: amountFormattedWithComma.length + 3,
      },
      value: `${amountFormattedWithComma}`,
    };
  }

  return nextState;
};
