import React from 'react';
import styles from './Statistics.module.scss';

const Statistics = ({ count, text, isSidePanelOpen }) => {
  return (
    <div className={styles.root}>
      <div className={styles.count}>{count}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statistics;
