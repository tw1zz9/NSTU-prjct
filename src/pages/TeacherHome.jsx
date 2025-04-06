import React, { useState } from 'react';
import '../scss/pages.scss';

import Statistics from '../components/Statistics';

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
    <div className="root" style={{ marginLeft, width, transition: `margin-left 0.5s, width 0.5s` }}>
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
    </div>
  );
};

export default TeacherHome;
