import React from 'react'
import Logo from '../UI/Logo/Logo'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <Logo/>
      <div>made by Roman Mashin</div>
      <div>socials</div>
    </footer>
  )
}

export default Footer