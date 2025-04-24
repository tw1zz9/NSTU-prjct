import React from 'react';
import styles from './CalendarCouple.module.scss';

const CalendarCouple = ({ type, count, name, time, classroom }) => {
  const getTypeClass = () => {
    switch (type) {
      case 'Лекция':
        return styles.lecture;
      case 'Практика':
        return styles.practice;
      default:
        return '';
    }
  };
  return (
    <div className={`${styles.root} ${getTypeClass()}`}>
      <div className={styles.upper}>
        <div className={styles.count}>{count}</div>
        <div className={styles.time}>{time}</div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.lower}>
        <div className={styles.classroom}>{classroom}</div>
        <div className={styles.type}>{type}</div>
      </div>
    </div>
  );
};

export default CalendarCouple;
