import React from 'react';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div>Logo</div>

      <nav>Nav</nav>

      <div>Contextual</div>
    </header>
  );
};

export default Header;
