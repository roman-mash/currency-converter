import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import styles from './BaseCurrencySelection.module.css';

const BaseCurrencySelection = ({ setModal }) => {
  const baseCurrency = useSelector((state) => state.currency.base);

  return (
    <div className={styles.baseWrapper}>
      <span className={styles.title}>Base</span>

      <div className={styles.baseCurrency}>
        <img
          className={styles.baseCurrencyFlag}
          src={`https://wise.com/public-resources/assets/flags/rectangle/${baseCurrency}.png`}
          alt=""
        />
        <span className={styles.baseCurrencyName}>{baseCurrency}</span>
      </div>

      <Button onClick={() => setModal(true)}>Change</Button>
    </div>
  );
};

export default BaseCurrencySelection;
