import { CURRENCY_CODES } from 'src/apollo/codegen/graphql';
import { Flex, Text } from 'components';
import { withCurrency } from 'src/utils/currency/format.cents-currency';

interface OutstandingAmountText {
  outstanding_amount: number | string;
  currency: CURRENCY_CODES;
}

const OutstandingAmountText = ({
  currency,
  outstanding_amount,
}: OutstandingAmountText) => (
  <Flex justifyContent="center" style={{ marginTop: '2rem' }}>
    <Text colorKey="warning" isBold size="displaySmall">
      OUTSTANDING AMOUNT:{' '}
      {withCurrency({
        amount: outstanding_amount || 0,
        currency,
      })}
    </Text>
  </Flex>
);

export { OutstandingAmountText };
