import React, { useState, useEffect } from 'react';
import styles from './CourseModal.module.scss';

const CourseModal = ({ course, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    subject: '',
    group: '',
    date: '',
    place: '',
  });

  useEffect(() => {
    if (course) {
      setFormData({
        subject: course.subject,
        group: course.group,
        date: course.date,
        place: course.place,
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: course.id,
      ...formData,
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Редактирование курса</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Предмет:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Группа:</label>
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Дата и время:</label>
            <input type="text" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Место:</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.buttons}>
            <button type="button" onClick={onCancel}>
              Отмена
            </button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
