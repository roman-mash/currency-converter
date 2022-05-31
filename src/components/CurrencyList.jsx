import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CurrencyList = ({ rates }) => {
  const currencies = useSelector((state) => state.currency.list);
  const ratesFormated = Object.entries(rates).reduce((result, [key, value]) => {
    return [
      ...result,
      {
        code: key,
        rate: value,
      },
    ];
  }, []);
  return (
    <ul className="currency-list">
      {ratesFormated.map((item) => (
        <li key={item.code}>
          <Link
            to={`/currency/${item.code}`}
            className="currency-item"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span>
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${item.code.toLowerCase()}.png`}
                alt=""
              />
            </span>
            <span>{item.code}</span>
            <span>{currencies[item.code].description}</span>
            <span>{item.rate}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CurrencyList;
