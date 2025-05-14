import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../../redux/slices/coursesSlice';
import styles from './CreateEventTeacher.module.scss';

const availableTimes = ['08:30', '10:15', '12:00', '14:00', '15:45', '17:30'];

const CreateEventTeacher = () => {
  const dispatch = useDispatch();
  const activeCourses = useSelector((state) => state.courses.activeCourses);

  const [formData, setFormData] = useState({
    subject: '',
    group: '',
    date: '',
    time: '',
    place: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const parseDateTime = (dateStr, timeStr) => {
    return new Date(`${dateStr}T${timeStr}`);
  };

  const isConflict = (newStart, existingStart, durationMs = 90 * 60 * 1000) => {
    const newEnd = new Date(newStart.getTime() + durationMs);
    const existingEnd = new Date(existingStart.getTime() + durationMs);
    return newStart < existingEnd && existingStart < newEnd;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      setError('Пожалуйста, выберите дату и время');
      return;
    }

    const newEventStart = parseDateTime(formData.date, formData.time);

    const conflict = activeCourses.some((course) => {
      if (!course.date) return false;
      const courseDate = new Date(course.date);
      return isConflict(newEventStart, courseDate);
    });

    if (conflict) {
      setError('В это время уже запланирована пара. Пожалуйста, выберите другое время.');
      return;
    }

    dispatch(
      addCourse({
        ...formData,
        date: `${formData.date}T${formData.time}`,
      }),
    );

    setFormData({
      subject: '',
      group: '',
      date: '',
      time: '',
      place: '',
    });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>Создание нового мероприятия</h1>
        <p className={styles.subtitle}>
          Заполните форму, чтобы создать новое мероприятие для студентов.
        </p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formRow}>
          <label htmlFor="subject">Предмет:</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor="group">Группа:</label>
          <select
            name="group"
            id="group"
            value={formData.group}
            onChange={handleChange}
            required
            className={styles.selectInput}
          >
            <option value="">Выберите группу</option>
            <option value="АВТ-412">АВТ-412</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor="date">Дата:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor="time">Время:</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} required>
            <option value="" disabled>
              Выберите время
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor="place">Место:</label>
          <input
            id="place"
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.submitButton}>
          Создать мероприятие
        </button>
      </div>
    </form>
  );
};

export default CreateEventTeacher;
