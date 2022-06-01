import React from 'react';
import CurrencyItem from './CurrencyItem/CurrencyItem';

const CurrencyList = ({ rates }) => {
  return (
    <ul className="currency-list">
      {rates.map((item) => (
        <CurrencyItem itemInfo={item} key={item.code} />
      ))}
    </ul>
  );
};

export default CurrencyList;
