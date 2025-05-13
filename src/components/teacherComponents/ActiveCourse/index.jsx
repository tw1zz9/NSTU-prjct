import React from 'react';
import styles from './ActiveCourse.module.scss';

const ActiveCourse = ({ id, name, group, time, place, onEdit, onEnd }) => {
  const formatDateTime = (dateTime) => {
    if (!dateTime) return 'Не указано';

    try {
      const date = new Date(dateTime);
      return date.toLocaleString('ru-RU', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: 'numeric',
      });
    } catch {
      return dateTime;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>Информация о мероприятии</div>

      <div className={styles.details}>
        <div className={styles.detailsTitle}>Детали</div>

        <div className={styles.lesson}>
          <div className={styles.lessonTitle}>Предмет:</div>
          <div className={styles.lessonItem}>{name}</div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupTitle}>Группа:</div>
          <div className={styles.groupItem}>{group}</div>
        </div>

        <div className={styles.date}>
          <div className={styles.dateTitle}>Дата и время:</div>
          <div className={styles.dateItem}>{formatDateTime(time)}</div>
        </div>

        <div className={styles.place}>
          <div className={styles.placeTitle}>Место:</div>
          <div className={styles.placeItem}>{place}</div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.buttonEdit} onClick={() => onEdit(id)}>
          Редактировать
        </button>
        <button className={styles.buttonEnd} onClick={() => onEnd(id)}>
          Закончить
        </button>
      </div>
    </div>
  );
};

export default ActiveCourse;
