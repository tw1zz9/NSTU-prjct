import React from 'react';
import styles from './EventHome.module.scss';

const EventHome = ({ title, group, date, place, stretchable }) => {
  // Форматируем дату для показа, например: "пн 12:00"
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ru-RU', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <div
      className={styles.root}
      style={!stretchable ? { width: '220px' } : { width: 'calc(25% - 55px)' }}
    >
      <div className={styles.title}>{title}</div>

      <div className={styles.details}>
        <div className={styles.detailsEl}>
          <div>Группа:</div>
          <div>{group}</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Дата:</div>
          <div>{formattedDate}</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Место:</div>
          <div>{place}</div>
        </div>
      </div>
    </div>
  );
};

export default EventHome;
