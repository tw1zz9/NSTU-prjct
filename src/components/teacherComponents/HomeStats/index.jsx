import React from 'react';
import Statistics from '../Statistics';

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

const HomeStats = () => {
  return (
    <>
      <h1 className="section-title">Статистика</h1>
      {statElements.map((statElement) => (
        <Statistics key={statElement.title} {...statElement} />
      ))}
    </>
  );
};

export default HomeStats;
