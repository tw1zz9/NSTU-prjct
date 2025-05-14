import React from 'react';
import styles from './StudentApplicationCard.module.scss';

const StudentApplicationCard = ({ application }) => {
  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'На рассмотрении';
      case 'accepted':
        return 'Принята';
      case 'rejected':
        return 'Отклонена';
      default:
        return status;
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{application.title}</h3>

      <div className={styles.cardDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Группа:</span>
          <span>{application.group}</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Дата:</span>
          <span>{new Date(application.date).toLocaleDateString('ru-RU')}</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Статус:</span>
          <span className={styles[`status-${application.status}`]}>
            {getStatusText(application.status)}
          </span>
        </div>
      </div>

      {application.description && (
        <div className={styles.description}>
          <p>{application.description}</p>
        </div>
      )}
    </div>
  );
};

export default StudentApplicationCard;
