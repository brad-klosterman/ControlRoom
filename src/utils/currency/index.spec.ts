import formatCentsCurrency from './format.cents-currency';

describe('formatCurrency', () => {
  it('formats currency for en-GB local', () => {
    const expectedEUR = formatCentsCurrency({
      amount: 500,
      currency: 'EUR',
    });

    const expectedGBP = formatCentsCurrency({
      amount: 500,
      currency: 'GBP',
    });

    const expectedNZD = formatCentsCurrency({
      amount: 500,
      currency: 'NZD',
    });

    const expectedUSD = formatCentsCurrency({
      amount: 500,
      currency: 'USD',
    });

    expect(expectedEUR).toEqual('€5.00');

    expect(expectedGBP).toEqual('£5.00');

    expect(expectedNZD).toEqual('NZ$5.00');

    expect(expectedUSD).toEqual('$5.00');
  });
});
