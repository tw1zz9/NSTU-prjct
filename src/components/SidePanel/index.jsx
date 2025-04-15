import React from 'react';
import styles from './SidePanel.module.scss';
import '../../scss/app.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SidePanel = ({ isSidePanelOpen }) => {
  const [selected, setSelected] = React.useState('');

  const handleSelect = (item) => {
    setSelected(item);
  };
  const { role } = useSelector((state) => state.user);
  console.log(role);

  return (
    <div style={{ transform: isSidePanelOpen ? `translateX(-100%)` : '' }} className={styles.root}>
      <Link to={`/${role}/home`} onClick={() => handleSelect('home')}>
        <div className={`${styles.home} ${selected === 'home' ? styles.active : ''}`}>
          <div className={styles.homeIcon}>
            <div className="blockSvg">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.7"
                >
                  <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.homeText}>Главная страница</div>
        </div>
      </Link>

      <Link to={`/${role}/applications`} onClick={() => handleSelect('apply')}>
        <div className={`${styles.apply} ${selected === 'apply' ? styles.active : ''}`}>
          <div className={styles.applyIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6l-10 7L2 6" />
              </g>
            </svg>
          </div>
          <div className={styles.applyText}>Заявки</div>
        </div>
      </Link>

      <Link to={`/${role}/active-courses`} onClick={() => handleSelect('activeCourses')}>
        <div
          className={`${styles.activeCourses} ${selected === 'activeCourses' ? styles.active : ''}`}
        >
          <div className={styles.activeCoursesIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
              >
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12" />
              </g>
            </svg>
          </div>
          <div className={styles.activeCoursesText}>Активные мероприятия</div>
        </div>
      </Link>

      {role === 'teacher' ? (
        <Link to="/teacher/create-event" onClick={() => handleSelect('createCourse')}>
          <div
            className={`${styles.createCourse} ${selected === 'createCourse' ? styles.active : ''}`}
          >
            <div className={styles.createCourseIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.7"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M12 8v8m-4-4h8" />
                </g>
              </svg>
            </div>
            <div className={styles.createCourseText}>Создание мероприятия</div>
          </div>
        </Link>
      ) : (
        <Link to="/student/create-event" onClick={() => handleSelect('createCourse')}>
          <div
            className={`${styles.createCourse} ${selected === 'createCourse' ? styles.active : ''}`}
          >
            <div className={styles.createCourseIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.7"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M12 8v8m-4-4h8" />
                </g>
              </svg>
            </div>
            <div className={styles.createCourseText}>Предложить мероприятие</div>
          </div>
        </Link>
      )}

      <Link to={`/${role}/settings`} onClick={() => handleSelect('settings')}>
        <div className={`${styles.settings} ${selected === 'settings' ? styles.active : ''}`}>
          <div className={styles.settingsIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </g>
            </svg>
          </div>
          <div className={styles.settingsText}>Настройки</div>
        </div>
      </Link>
    </div>
  );
};

export default SidePanel;
