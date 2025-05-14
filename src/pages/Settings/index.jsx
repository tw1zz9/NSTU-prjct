import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './Settings.module.scss';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MainLayout>
        <div className={styles.root}>
          <div onClick={() => navigate('/')} className={styles.exit}>
            <div className={styles.svg}>
              <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="24" height="24" rx="8" fill="none" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </svg>
            </div>
            <div className={styles.exitText}>Выход из режима смотрителя</div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Settings;
