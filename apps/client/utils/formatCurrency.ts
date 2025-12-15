export const formatCurrency = (
  value: number,
  locale: 'en-AE' | 'ar-AE' = 'en-AE',
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'AED',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  }).format(value);
};
