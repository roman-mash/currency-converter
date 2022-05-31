import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyService from '../API/CurrencyService';
import CurrencyList from '../components/CurrencyList';
import { useFetching } from '../hooks/useFetching';

const Currency = () => {
  const [rates, setRates] = useState({});

  const baseCurrency = useSelector((state) => state.currency.base);

  const [fetchCurrencyRates, isRatesLoading, ratesError] = useFetching(
    async (base) => {
      const response = await CurrencyService.getCurrencyRates(base);
      setRates(response.data.rates);
    }
  );

  useEffect(() => {
    fetchCurrencyRates(baseCurrency);
  }, [baseCurrency]);

  return (
    <main>
      <h1>Currency rates today</h1>
      <p>Data was updated</p>
      {ratesError && <h3>Error occured ${ratesError}</h3>}
      {isRatesLoading ? <h2>loading</h2> : <CurrencyList rates={rates} />}
    </main>
  );
};

export default Currency;
