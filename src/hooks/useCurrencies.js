import { useMemo } from 'react';

export const useSearchedCurrencies = (currencies, query) => {
  const searchedCurrencies = useMemo(() => {
    return currencies.filter((currency) =>
      currency.code.toLowerCase().includes(query.toLowerCase())
    );
  }, [currencies, query]);
  return searchedCurrencies;
};
