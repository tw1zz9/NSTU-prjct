import React from 'react';
import styles from './ApplyTeacher.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { acceptApplication, rejectApplication } from '../../../redux/slices/applicationsSlice';
import { addCourse } from '../../../redux/slices/coursesSlice';

const ApplyTeacher = ({ applicationId }) => {
  const dispatch = useDispatch();

  // Получаем конкретную заявку из хранилища
  const application = useSelector((state) =>
    state.applications.items.find((app) => app.id === applicationId),
  );

  // Если заявка не найдена
  if (!application) {
    return (
      <div className={styles.root}>
        <div className={styles.error}>Заявка не найдена</div>
      </div>
    );
  }

  const handleAccept = () => {
    dispatch(acceptApplication(application.id));

    dispatch(
      addCourse({
        id: application.id,
        title: application.title || application.subject,
        description: application.description,
        group: application.group,
        date: application.date,
        status: 'active',
      }),
    );
  };

  const handleReject = () => {
    dispatch(rejectApplication(application.id));
  };

  // Проверяем статус заявки
  const isPending = application.status === 'pending';

  return (
    <div className={styles.root}>
      <div className={styles.title}>Информация о заявке</div>

      <div className={styles.titleInfo}>
        <div className={styles.id}>
          <div className={styles.idTitle}>ID заявки:</div>
          <div className={styles.idText}>{application.id}</div>
        </div>
        <div className={styles.status}>
          <div className={styles.statusTitle}>Статус:</div>
          <div className={styles.statusText}>
            {application.status === 'pending' && 'На рассмотрении'}
            {application.status === 'accepted' && 'Принята'}
            {application.status === 'rejected' && 'Отклонена'}
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsTitle}>Детали</div>

        <div className={styles.event}>
          <div className={styles.eventTitle}>Название:</div>
          <div className={styles.eventText}>{application.title || application.subject}</div>
        </div>

        {application.description && (
          <div className={styles.description}>
            <div className={styles.descriptionTitle}>Описание:</div>
            <div className={styles.descriptionText}>{application.description}</div>
          </div>
        )}

        <div className={styles.group}>
          <div className={styles.groupTitle}>Группа:</div>
          <div className={styles.groupText}>{application.group}</div>
        </div>

        <div className={styles.time}>
          <div className={styles.timeTitle}>Дата:</div>
          <div className={styles.timeText}>
            {new Date(application.date).toLocaleDateString('ru-RU')}
          </div>
        </div>
      </div>

      {isPending && (
        <div className={styles.buttons}>
          <div className={styles.accept}>
            <button onClick={handleAccept} className={styles.acceptItem}>
              Принять
            </button>
          </div>

          <div className={styles.reject}>
            <button onClick={handleReject} className={styles.rejectItem}>
              Отклонить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyTeacher;
