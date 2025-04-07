import React from 'react';
import styles from './Apply.module.scss';

const Apply = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Информация о заявке</div>

      <div className={styles.titleInfo}>
        <div className={styles.id}>
          <div className={styles.idTitle}>ID заявки:</div>
          <div className={styles.idText}>1488</div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsTitle}>Детали</div>

        <div className={styles.event}>
          <div className={styles.eventTitle}>Предмет:</div>
          <div className={styles.eventText}>Мат. анализ</div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupTitle}>Группа:</div>
          <div className={styles.groupText}>АВТ-412</div>
        </div>

        <div className={styles.time}>
          <div className={styles.timeTitle}>Дата:</div>
          <div className={styles.timeText}>14.02.2025</div>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.accept}>
          <button className={styles.acceptItem}>Принять</button>
        </div>

        <div className={styles.reject}>
          <button className={styles.rejectItem}>Отклонить</button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
