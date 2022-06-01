import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CurrencyService from '../API/CurrencyService';
import CurrencyChart from '../components/CurrencyChart';
import Flag from '../components/UI/Flag/Flag';
import { useFetching } from '../hooks/useFetching';

const CurrencyItem = () => {
  const baseCurrency = useSelector((state) => state.currency.base);
  const [historyRates, setHistoryRates] = useState({});
  const params = useParams();
  const todayDate = new Date(Date.now());
  const weekInMs = 604800000;
  const dateWeekAgo = new Date(Date.now() - weekInMs);
  const [fetchCurrencyHistory, isCurrencyHistoryLoading, errorFetch] =
    useFetching(async (id) => {
      const response = await CurrencyService.getCurrencyHistoryByCode(
        baseCurrency,
        dateWeekAgo,
        todayDate,
        id
      );
      setHistoryRates(response.data.rates);
    });

  useEffect(() => {
    fetchCurrencyHistory(params.id);
  }, [baseCurrency]);

  return (
    <main>
      <div className="container">
        <h1>
          <Flag code={baseCurrency} moreClass="flag-ml flag-mr" />
          {baseCurrency.toUpperCase()} –
          <Flag code={params.id} moreClass="flag-ml flag-mr" />
          {params.id}
        </h1>
        <CurrencyChart data={historyRates} code={params.id} />
      </div>
    </main>
  );
};

export default CurrencyItem;
