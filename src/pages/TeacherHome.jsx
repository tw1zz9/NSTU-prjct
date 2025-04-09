import React, { useState } from 'react';
import '../scss/pages.scss';

import Statistics from '../components/Statistics';
import EventHome from '../components/EventHome';
import NotifyHome from '../components/NotifyHome';
import ActiveCourse from '../components/ActiveCourse';

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
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';

  return (
    <div
      className="root home"
      style={{ marginLeft, width, transition: `margin-left 0.5s, width 0.5s` }}
    >
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
  );
};

export default TeacherHome;
