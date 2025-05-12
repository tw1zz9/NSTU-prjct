import React from 'react';
import styles from './SidePanel.module.scss';
import '../../scss/app.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const menuItems = [
  {
    id: 'home',
    path: 'home',
    text: 'Главная страница',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
  {
    id: 'apply',
    path: 'applications',
    text: 'Заявки',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="m22 6l-10 7L2 6" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
  {
    id: 'activeCourses',
    path: 'active-courses',
    text: 'Активные мероприятия',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
  {
    id: 'createCourse',
    path: 'create-event',
    text: {
      teacher: 'Создание мероприятия',
      student: 'Предложить мероприятие',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M12 8v8m-4-4h8" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
  {
    id: 'calendar',
    path: 'calendar',
    text: 'Календарь',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
  {
    id: 'settings',
    path: 'settings',
    text: 'Настройки',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </g>
      </svg>
    ),
    availableFor: ['teacher', 'student'],
  },
];

const SidePanel = ({ isSidePanelOpen }) => {
  const [selected, setSelected] = React.useState('');
  const { role } = useSelector((state) => state.user);

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div style={{ transform: isSidePanelOpen ? `translateX(-100%)` : '' }} className={styles.root}>
      {menuItems
        .filter((item) => item.availableFor.includes(role))
        .map((item) => (
          <Link key={item.id} to={`/${role}/${item.path}`} onClick={() => handleSelect(item.id)}>
            <div className={`${styles[item.id]} ${selected === item.id ? styles.active : ''}`}>
              <div className={styles[`${item.id}Icon`]}>
                <div className="blockSvg">{item.icon}</div>
              </div>
              <div className={styles[`${item.id}Text`]}>
                {typeof item.text === 'object' ? item.text[role] : item.text}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SidePanel;
