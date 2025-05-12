import React from 'react';
import '../../../scss/app.scss';
import Statistics from '../../../components/Statistics';
import EventHome from '../../../components/EventHome';
import NotifyHome from '../../../components/NotifyHome';
import MainLayout from '../../../layouts/MainLayout';

const statElements = [
  {
    title: 'courses',
    count: 12,
    text: 'Активных курсов',
  },
  {
    title: 'applications',
    count: 3,
    text: 'Заявок на рассмотрении',
  },
  {
    title: 'groups',
    count: 6,
    text: 'Учебных групп',
  },
  {
    title: 'lessons',
    count: 5,
    text: 'Занятий в неделю',
  },
];

const TeacherHome = ({ isSidePanelOpen }) => {
  return (
    <MainLayout className="root home">
      <div className="home-content">
        <h1 className="section-title">Статистика</h1>
        <div className={`stats-container ${isSidePanelOpen ? 'centered' : ''}`}>
          {statElements.map((statElement) => (
            <Statistics key={statElement.title} {...statElement} />
          ))}
        </div>

        <h1 className="section-title">Ближайшие события</h1>
        <div className="events-container">
          {[...Array(4)].map((_, i) => (
            <EventHome key={i} stretchable />
          ))}
        </div>

        <h1 className="section-title">Уведомления</h1>
        <div className="notifications-container">
          <NotifyHome />
          <NotifyHome />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherHome;
