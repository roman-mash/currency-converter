import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import CurrencyService from '../API/CurrencyService';
import Button from '../components/UI/button/Button';
import Input from '../components/UI/Input/Input';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import selectForConverter from '../styles/selectForConverter';
import { formatListForConverterSelect } from '../utils/dataFormatter';
import './../styles/converter.css';

const Convert = () => {
  const baseCurrency = useSelector((state) => state.currency.base);
  const currencyList = useSelector((state) => state.currency.list);
  const [currencyFrom, setCurrencyFrom] = useState(baseCurrency);
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [convertResult, setConvertResult] = useState(0);
  const currencyListFormatted = formatListForConverterSelect(currencyList);
  const [fetchConvertResult, isConvertLoading, convertError] = useFetching(
    async () => {
      const response = await CurrencyService.getConvertResult(
        currencyFrom.toUpperCase(),
        currencyTo.toUpperCase(),
        currencyAmount
      );
      setConvertResult(response.data.result);
    }
  );

  const getDefaultValue = (val) => {
    return {
      value: val,
      label: val.toUpperCase(),
    };
  };

  useEffect(() => {
    setCurrencyFrom(baseCurrency);
  }, [baseCurrency]);

  return (
    <main>
      <div className="container">
        {/* converter */}
        <div className="converter-wrap">
          <div className="converter-inputs">
            <Input
              type="number"
              placeholder="1"
              value={currencyAmount}
              onChange={(evt) => setCurrencyAmount(evt.target.value)}
              min="0"
              className="input-default mr-40"
            />
            <Select
              value={getDefaultValue(currencyFrom)}
              styles={selectForConverter}
              isSearchable={true}
              onChange={(selected) => setCurrencyFrom(selected.value)}
              options={currencyListFormatted}
            />
            <span className="convert-splitter">in</span>
            <Select
              value={getDefaultValue(currencyTo)}
              styles={selectForConverter}
              isSearchable={true}
              onChange={(selected) => setCurrencyTo(selected.value)}
              options={currencyListFormatted}
            />
          </div>
          <Button onClick={() => fetchConvertResult()}>Convert</Button>
        </div>
        {/* result */}
        {convertError && <h3>Error occured - {convertError}</h3>}
        {isConvertLoading ? (
          <Loader />
        ) : (
          <div className="convert-result">
            The conversion result is <b>{convertResult}</b>{' '}
            {currencyTo.toUpperCase()}
          </div>
        )}
      </div>
    </main>
  );
};

export default Convert;
