import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyService from '../API/CurrencyService';
import CurrencyList from '../components/CurrencyList';
import Flag from '../components/UI/Flag/Flag';
import Input from '../components/UI/Input/Input';
import Loader from '../components/UI/Loader/Loader';
import { useSearchedCurrencies } from '../hooks/useCurrencies';
import { useFetching } from '../hooks/useFetching';
import { formatRatesForList } from '../utils/dataFormatter';

const Currency = () => {
  const [rates, setRates] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState();
  const baseCurrency = useSelector((state) => state.currency.base);
  const ratesFormated = formatRatesForList(rates);
  const searchedCurrencies = useSearchedCurrencies(ratesFormated, searchQuery);

  const [fetchCurrencyRates, isRatesLoading, ratesError] = useFetching(
    async (base) => {
      const response = await CurrencyService.getCurrencyRates(base);
      setRates(response.data.rates);
      const dateRecieved = new Date(response.data.date);
      setDate(dateRecieved.toLocaleDateString());
    }
  );

  useEffect(() => {
    fetchCurrencyRates(baseCurrency);
  }, [baseCurrency]);

  return (
    <main>
      <div className="container">
        <h1>
          <span>Currency rates relative to</span>
          <Flag code={baseCurrency} moreClass="flag-ml flag-mr" />
          <span>{baseCurrency.toUpperCase()}</span>
        </h1>
        <div className="info-block">
          <p>Data was uploaded on {date}</p>

          <Input
            className="input-default"
            type="text"
            placeholder="Enter code..."
            value={searchQuery}
            onChange={(evt) => setSearchQuery(evt.target.value)}
          />
        </div>

        {ratesError && <h3>Error occured {ratesError}</h3>}
        {isRatesLoading ? (
          <Loader />
        ) : (
          <CurrencyList rates={searchedCurrencies} />
        )}
      </div>
    </main>
  );
};

export default Currency;
