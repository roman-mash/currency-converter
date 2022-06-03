import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeBase } from '../../store/reducers/currencySlice';
import selectStyle from '../../styles/selectStyle';
import { formatListForSelectBase } from '../../utils/dataFormatter';
import Button from '../UI/button/Button';
import styles from './BaseCurrencyModal.module.css';

const BaseCurrencyModal = ({ setVisible }) => {
  // react states
  const [selectedCurrency, setSelectedCurrency] = useState('');

  // redux states
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currency.list);

  // making an array for select
  const currencyListFormatted = formatListForSelectBase(currencies);

  // changing redux state
  const changeBaseCurrency = (evt) => {
    evt.preventDefault();
    const selectedCurrencyFormated = selectedCurrency.toLowerCase();
    dispatch(changeBase(selectedCurrencyFormated));
    localStorage.setItem('base', selectedCurrencyFormated);
    setVisible(false);
  };

  return (
    <form className={styles.modal}>
      <h3 className={styles.modalHeader}>Choose the base currency</h3>
      <Select
        styles={selectStyle}
        isSearchable={true}
        placeholder="Type to look for..."
        onChange={(selected) => setSelectedCurrency(selected.value)}
        options={currencyListFormatted}
      />
      <Button onClick={changeBaseCurrency} type="submit">
        Save
      </Button>
    </form>
  );
};

export default BaseCurrencyModal;
