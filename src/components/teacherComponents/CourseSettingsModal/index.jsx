import React, { useState } from 'react';
import styles from './CourseSettingsModal.module.scss';
import { acceptApplication } from '../../../redux/slices/applicationsSlice';
import { useDispatch } from 'react-redux';

const CourseSettingsModal = ({ courseData, onSave, onCancel }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: courseData.id,
    title: courseData.title || '',
    group: courseData.group || '',
    date: courseData.date || '',
    place: courseData.place || '',
    description: courseData.description || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    dispatch(acceptApplication(form.id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h3>Настройки мероприятия</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Название:
            <input name="title" value={form.title} onChange={handleChange} required />
          </label>
          <label>
            Группа:
            <select
              name="group"
              id="group"
              value={form.group}
              onChange={handleChange}
              required
              className={styles.selectInput}
            >
              <option value="">Выберите группу</option>
              <option value="АВТ-412">АВТ-412</option>
            </select>
          </label>
          <label>
            Дата:
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>
            Время:
            <input type="time" name="time" value={form.time} onChange={handleChange} required />
          </label>
          <label>
            Место проведения:
            <input name="place" value={form.place} onChange={handleChange} />
          </label>
          <label>
            Описание:
            <textarea name="description" value={form.description} onChange={handleChange} />
          </label>
          <div className={styles.buttons}>
            <button type="submit" className={styles.saveButton}>
              Сохранить
            </button>
            <button type="button" onClick={onCancel} className={styles.cancelButton}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSettingsModal;
