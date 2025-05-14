import React from 'react';
import styles from './CalendarCouple.module.scss';

const CalendarCouple = ({ type, count, name, time, classroom }) => {
  return (
    <div className={`${styles.coupleCard} ${styles[type.toLowerCase()]}`}>
      <div className={styles.coupleHeader}>
        <span className={styles.coupleType}>{type}</span>
        <span className={styles.coupleNumber}>{count} пара</span>
      </div>
      <h3 className={styles.coupleName}>{name}</h3>
      <div className={styles.coupleDetails}>
        <span className={styles.coupleTime}>{time}</span>
        <span className={styles.coupleRoom}>{classroom}</span>
      </div>
    </div>
  );
};

export default CalendarCouple;
