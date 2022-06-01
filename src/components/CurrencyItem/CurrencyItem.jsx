import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Flag from '../UI/Flag/Flag';
import styles from './CurrencyItem.module.css';

const CurrencyItem = ({ itemInfo }) => {
  const currencies = useSelector((state) => state.currency.list);

  return (
    <li>
      <Link to={`/currency/${itemInfo.code}`} className={styles.item}>
        <Flag code={itemInfo.code} />
        <span className={styles.code}>{itemInfo.code}</span>
        <span className={styles.description}>
          {currencies[itemInfo.code].description}
        </span>
        <span className={styles.rate}>{itemInfo.rate}</span>
      </Link>
    </li>
  );
};

export default CurrencyItem;
