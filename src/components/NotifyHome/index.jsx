import React from 'react';
import styles from './NotifyHome.module.scss';

const NotifyHome = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Новая заявка № 52</div>

      <div className={styles.details}>
        <div className={styles.detailsEl}>
          <div>Группа:</div>
          <div>АВТ-412</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Студент:</div>
          <div>Иванов И.И</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Предмет:</div>
          <div>Мат. анализ</div>
        </div>
      </div>
    </div>
  );
};

export default NotifyHome;
