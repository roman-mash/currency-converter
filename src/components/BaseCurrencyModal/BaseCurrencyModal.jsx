import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeBase } from '../../store/reducers/currencySlice';
import selectStyle from '../../styles/selectStyle';
import Button from '../UI/button/Button';
import styles from './BaseCurrencyModal.module.css';

const BaseCurrencyModal = ({ setVisible }) => {
  // react states
  const [selectedCurrency, setSelectedCurrency] = useState('');

  // redux states
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currency.list);

  // making an array for select
  const resulting = Object.entries(currencies).reduce(
    (result, [key, value]) => {
      return [
        ...result,
        { value: key, label: `${key} - ${value.description}` },
      ];
    },
    []
  );

  // changing redux state
  const changeBaseCurrency = (evt) => {
    evt.preventDefault();
    dispatch(changeBase(selectedCurrency.toLowerCase()));
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
        options={resulting}
      />
      <Button onClick={changeBaseCurrency} type="submit">
        Save
      </Button>
    </form>
  );
};

export default BaseCurrencyModal;
