import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import CurrencyService from '../API/CurrencyService';
import { useFetching } from '../hooks/useFetching';
import selectStyle from '../styles/selectStyle';

const Convert = () => {
  const baseCurrency = useSelector((state) => state.currency.base);
  const currencyList = useSelector((state) => state.currency.list);
  const [currencyForm, setCurrencyFrom] = useState(baseCurrency);
  const [currencyTo, setCurrencyTo] = useState('');
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [convertResult, setConvertResult] = useState(0);

  const resulting = Object.keys(currencyList).reduce((result, key) => {
    return [...result, { value: key, label: key.toUpperCase() }];
  }, []);

  const [fetchConvertResult, isConvertLoading, convertError] = useFetching(
    async () => {
      const response = await CurrencyService.getConvertResult(
        currencyForm.toUpperCase(),
        currencyTo.toUpperCase(),
        currencyAmount
      );
      setConvertResult(response.data.result);
    }
  );
  return (
    <main>
      <div className="container">
        {/* converter */}
        <div>
          <input
            type="number"
            placeholder="1"
            value={currencyAmount}
            onChange={(evt) => setCurrencyAmount(evt.target.value)}
          />
          <Select
            value={{
              value: currencyForm,
              label: currencyForm.toUpperCase(),
            }}
            styles={selectStyle}
            isSearchable={true}
            placeholder="Type to look for..."
            onChange={(selected) => setCurrencyFrom(selected.value)}
            options={resulting}
          />
          <Select
            value={resulting[0]}
            styles={selectStyle}
            isSearchable={true}
            placeholder="Type to look for..."
            onChange={(selected) => setCurrencyTo(selected.value)}
            options={resulting}
          />
          <button onClick={() => fetchConvertResult()}>convert</button>
        </div>
        {/* result */}
        <div> result = {convertResult}</div>
      </div>
    </main>
  );
};

export default Convert;
