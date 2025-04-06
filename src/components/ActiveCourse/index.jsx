import React from 'react';
import styles from './ActiveCourse.module.scss';

const ActiveCourse = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Информация о мероприятии</div>

      <div className={styles.details}>
        <div className={styles.detailsTitle}>Детали</div>

        <div className={styles.lesson}>
          <div className={styles.lessonTitle}>Предмет:</div>
          <div className={styles.lessonItem}>Мат. Анализ</div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupTitle}>Группа:</div>
          <div className={styles.groupItem}>АВТ-412</div>
        </div>

        <div className={styles.date}>
          <div className={styles.dateTitle}>Дата:</div>
          <div className={styles.dateItem}>пн 12:00</div>
        </div>

        <div className={styles.place}>
          <div className={styles.placeTitle}>Место:</div>
          <div className={styles.placeItem}>7-123</div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.buttonEdit}>Редактировать</button>
        <button className={styles.buttonEnd}>Закончить</button>
      </div>
    </div>
  );
};

export default ActiveCourse;
