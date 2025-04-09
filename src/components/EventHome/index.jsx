import React from 'react';
import styles from './EventHome.module.scss';

const EventHome = ({ isSidePanelOpen }) => {
  return (
    <div
      className={styles.root}
      style={!isSidePanelOpen ? { width: '220px' } : { width: 'calc(25% - 55px)' }}
    >
      <div className={styles.title}>Мат. анализ</div>

      <div className={styles.details}>
        <div className={styles.detailsEl}>
          <div>Группа:</div>
          <div>АВТ-412</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Дата:</div>
          <div>пн 12:00</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Место:</div>
          <div>7-123</div>
        </div>
      </div>
    </div>
  );
};

export default EventHome;
