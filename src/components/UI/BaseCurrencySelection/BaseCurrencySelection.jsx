import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import Flag from '../Flag/Flag';
import styles from './BaseCurrencySelection.module.css';

const BaseCurrencySelection = ({ setModal }) => {
  const baseCurrency = useSelector((state) => state.currency.base);

  return (
    <div className={styles.baseWrapper}>
      <span className={styles.title}>Base</span>

      <div className={styles.baseCurrency}>
        <Flag code={baseCurrency} moreClass="flag-mr" />
        <span className={styles.baseCurrencyName}>{baseCurrency}</span>
      </div>

      <Button onClick={() => setModal(true)}>Change</Button>
    </div>
  );
};

export default BaseCurrencySelection;
