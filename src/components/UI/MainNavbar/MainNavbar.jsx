import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../router';
import styles from './MainNavbar.module.css'


const MainNavbar = () => {
  const filteredRoutes = routes.filter(route => route.isInMenu)
  return (
    <nav className={styles.block}>
      <ul className={styles.navbar}>
        {
          filteredRoutes.map(filteredRoute => 
              <li key={filteredRoute.path}>
                <Link to={filteredRoute.path}>{filteredRoute.name}</Link>
              </li>
          )
        }
      </ul>
    </nav>
  )
}

export default MainNavbar