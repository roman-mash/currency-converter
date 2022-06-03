import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/currency" className={styles.wrapper}>
      <span className={styles.logo}>
        Currency <br /> Converter
      </span>
    </Link>
  );
};

export default Logo;
