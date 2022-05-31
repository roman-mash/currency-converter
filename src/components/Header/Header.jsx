import React, { useState } from 'react';
import BaseCurrencyModal from '../BaseCurrencyModal/BaseCurrencyModal';
import BaseCurrencySelection from '../UI/BaseCurrencySelection/BaseCurrencySelection';
import Logo from '../UI/Logo/Logo';
import MainNavbar from '../UI/MainNavbar/MainNavbar';
import MyModal from '../UI/Modal/Modal';
import styles from './Header.module.css';

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <MainNavbar />
      <BaseCurrencySelection setModal={setModal} />

      <MyModal visible={modal} setVisible={setModal}>
        <BaseCurrencyModal setVisible={setModal} />
      </MyModal>
    </header>
  );
};

export default Header;
