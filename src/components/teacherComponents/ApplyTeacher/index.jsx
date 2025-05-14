import React, { useState } from 'react';
import styles from './ApplyTeacher.module.scss';
import { useDispatch } from 'react-redux';
import { rejectApplication, removeApplication } from '../../../redux/slices/applicationsSlice';
import { addCourse } from '../../../redux/slices/coursesSlice';
import CourseSettingsModal from '../../teacherComponents/CourseSettingsModal';

const ApplyTeacher = ({ application }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState(null);

  const handleAcceptClick = () => {
    setCourseData({
      id: application.id,
      title: application.title || application.subject || '',
      description: application.description || '',
      group: application.group || '',
      date: application.date || '',
      place: '',
      status: 'active',
    });
    setIsModalOpen(true);
  };

  const handleModalSave = (updatedCourse) => {
    setIsModalOpen(false);
    dispatch(addCourse(updatedCourse)); // Добавляем курс
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleReject = () => {
    if (window.confirm('Вы уверены, что хотите отклонить эту заявку?')) {
      dispatch(rejectApplication(application.id));
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Информация о заявке</h3>

      <div className={styles.cardSection}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>ID заявки:</span>
          <span className={styles.infoValue}>{application.id}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Статус:</span>
          <span className={styles.infoValue}>На рассмотрении</span>
        </div>
      </div>

      <div className={styles.cardSection}>
        <h4 className={styles.sectionTitle}>Детали</h4>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Название:</span>
          <span className={styles.infoValue}>{application.title || application.subject}</span>
        </div>

        {application.description && (
          <div className={styles.infoColumn}>
            <span className={styles.infoLabel}>Описание:</span>
            <span className={styles.infoValue}>{application.description}</span>
          </div>
        )}

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Группа:</span>
          <span className={styles.infoValue}>АВТ-412</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Дата:</span>
          <span className={styles.infoValue}>
            {application.date ? new Date(application.date).toLocaleDateString('ru-RU') : '-'}
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={handleAcceptClick} className={styles.acceptButton}>
          Принять
        </button>
        <button onClick={handleReject} className={styles.rejectButton}>
          Отклонить
        </button>
      </div>

      {isModalOpen && (
        <CourseSettingsModal
          courseData={courseData}
          onSave={handleModalSave}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default ApplyTeacher;
