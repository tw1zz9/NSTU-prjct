import React from 'react';

import logo from '../../assets/img/logo.png';
import ava from '../../assets/img/ava.jpg';

import styles from './Header.module.scss';
import '../../scss/app.scss';

const Header = ({ onClickSidePanel }) => {
  return (
    <div className={styles.root}>
      <div className={styles.leftBlock}>
        <div onClick={onClickSidePanel} className={styles.menu}>
          <div className={styles.menuItem}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </div>
        </div>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="лого" />
          <div className={styles.logoText}>ExtraNETI</div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <img className={styles.ava} src={ava} alt="аватарка" />
      </div>
    </div>
  );
};

export default Header;
