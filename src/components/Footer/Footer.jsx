import React from 'react';
import Socials from '../Socials/Socials';
import Logo from '../UI/Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.copyright}>made by Roman Mashin</div>
      <Socials />
    </footer>
  );
};

export default Footer;
