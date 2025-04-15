import React, { useState } from 'react';
import '../scss/pages.scss';

import Statistics from '../components/Statistics';
import EventHome from '../components/EventHome';
import NotifyHome from '../components/NotifyHome';
import ActiveCourse from '../components/ActiveCourse';
import MainLayout from '../layouts/MainLayout';

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
      <div className="root home">
        <div className="titleHome">Статистика</div>
        <div
          className={`stats ${isSidePanelOpen ? 'center' : 'start'}`}
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          {statElements.map((statElement) => (
            <Statistics
              key={statElement.title}
              count={statElement.count}
              text={statElement.text}
              isSidePanelOpen={isSidePanelOpen}
            />
          ))}
        </div>
        <div className="titleHome">Ближайшие события</div>
        <div className="eventsHome">
          <EventHome isSidePanelOpen={isSidePanelOpen} />{' '}
          <EventHome isSidePanelOpen={isSidePanelOpen} />{' '}
          <EventHome isSidePanelOpen={isSidePanelOpen} />{' '}
          <EventHome isSidePanelOpen={isSidePanelOpen} />
        </div>
        <div className="titleHome">Уведомления</div>
        <div className="notifysHome">
          <NotifyHome /> <NotifyHome />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherHome;
