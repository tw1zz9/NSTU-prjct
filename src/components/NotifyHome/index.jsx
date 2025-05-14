import React from 'react';
import styles from './NotifyHome.module.scss';

const NotifyHome = ({ application }) => {
  if (!application) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>Новая заявка № {application.id.slice(0, 6)}...</div>

      <div className={styles.details}>
        <div className={styles.detailsEl}>
          <div>Группа:</div>
          <div>{application.group || 'АВТ-412'}</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Студент:</div>
          <div>{application.createdByName || 'Гость'}</div>
        </div>

        <div className={styles.detailsEl}>
          <div>Предмет:</div>
          <div>{application.title.slice(0, 8) + '...' || application.subject || '-'}</div>
        </div>
      </div>
    </div>
  );
};

export default NotifyHome;
