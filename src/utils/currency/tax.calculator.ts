export const taxCalculator = (
  amount: number | string,
  percent: number | string,
) => {
  const amount_value = typeof amount === 'string' ? Number(amount) : amount;
  const percent_value = typeof percent === 'string' ? Number(percent) : percent;

  const tax_due = amount_value * (percent_value / 100);
  return +tax_due.toFixed(2);
};

export const costWithTax = (
  amount: number | string,
  percent: number | string,
) => {
  const amount_value = typeof amount === 'string' ? Number(amount) : amount;
  const percent_value = typeof percent === 'string' ? Number(percent) : percent;

  const total_cost = amount_value * (1 + percent_value / 100);
  return +total_cost.toFixed(2);
};
