import React, { useEffect } from 'react';
import '../../scss/app.scss';
import logo from '../../assets/img/logo.png';
import ava from '../../assets/img/ava.jpg';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidePanel } from '../../redux/slices/sidePanelSlice';

import { loginTeacher, loginStudent } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.sidePanel.isOpen);
  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    document.body.style.overflowX = 'visible';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const handleToggleLogin = () => {
    if (role === 'teacher') {
      dispatch(loginStudent());
    } else {
      dispatch(loginTeacher());
    }
    navigate('/home');
  };

  return (
    <header className={`${styles.root} header`}>
      <div className={styles.leftBlock}>
        <button
          onClick={() => dispatch(toggleSidePanel())}
          className={styles.menu}
          aria-label="Toggle menu"
        >
          <div className={styles.menuItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        </button>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="лого" />
          <div className={styles.logoText}>ExtraNETI</div>
        </div>
      </div>
      <div onClick={handleToggleLogin} className={styles.rightBlock}>
        {role === 'teacher' ? 'Войти от лица студента' : 'Войти от лица преподавателя'}
      </div>
    </header>
  );
};

export default Header;
