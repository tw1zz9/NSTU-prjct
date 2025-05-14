import React from 'react';
import styles from './ActiveCourse.module.scss';

import { useSelector } from 'react-redux';

const ActiveCourse = ({ id, name, group, date, place, onEdit, onEnd }) => {
  const { role } = useSelector((state) => state.user);
  const formatDateTime = (dateTime) => {
    if (!dateTime) return 'Не указано';

    try {
      const date = new Date(dateTime);
      return date.toLocaleString('ru-RU', {
        weekday: 'short',
        day: 'numeric',
        month: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateTime;
    }
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Информация о мероприятии</h3>

      <div className={styles.details}>
        <h4 className={styles.detailsTitle}>Детали</h4>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Предмет:</span>
          <span className={styles.detailValue}>{name}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Группа:</span>
          <span className={styles.detailValue}>{group}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Дата и время:</span>
          <span className={styles.detailValue}>{formatDateTime(date)}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Место:</span>
          <span className={styles.detailValue}>{place}</span>
        </div>
      </div>

      {role === 'teacher' && (
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => onEdit(id)}>
            Редактировать
          </button>
          <button className={`${styles.button} ${styles.buttonEnd}`} onClick={() => onEnd(id)}>
            Закончить
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveCourse;
