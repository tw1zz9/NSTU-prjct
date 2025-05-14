import React from 'react';
import Statistics from '../Statistics';
import styles from './HomeStats.module.scss';
import { useSelector } from 'react-redux';

const HomeStats = () => {
  const isSidePanelOpen = useSelector((state) => state.sidePanel.isOpen);

  const activeCourses = useSelector((state) => state.courses.activeCourses);
  const pendingApplications = useSelector((state) =>
    state.applications.items.filter((app) => app.status === 'pending'),
  );
  const activeEvents = useSelector((state) =>
    state.courses.activeCourses.flatMap(
      (course) => course.schedule?.filter((event) => event.status === 'active') || [],
    ),
  );

  // Формируем массив статистики
  const statElements = [
    {
      title: 'courses',
      count: activeCourses.length,
      text: 'Активных курсов',
    },
    {
      title: 'applications',
      count: pendingApplications.length,
      text: 'Заявок на рассмотрении',
    },
    {
      title: 'groups',
      count: 1,
      text: 'Учебная группа',
    },
    {
      title: 'lessons',
      count: 5,
      text: 'Занятий в неделю',
    },
  ];

  return (
    <div className={styles.root}>
      <h1 className={styles.sectionTitle}>Статистика</h1>
      <div className={`${styles.stats} ${isSidePanelOpen ? styles.open : ''}`}>
        {statElements.map((statElement) => (
          <Statistics key={statElement.title} {...statElement} />
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
