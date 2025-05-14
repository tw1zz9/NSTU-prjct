import React, { useState } from 'react';
import styles from './CreateEventStudent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addApplication } from '../../../redux/slices/applicationsSlice';

const CreateEventStudent = () => {
  const dispatch = useDispatch();
  const { group, id: userId } = useSelector((state) => state.user);

  const [form, setForm] = useState({ title: '', description: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addApplication({
        subject: form.title,
        description: form.description,
        date: form.date,
        group, // Берём группу из user
        createdBy: userId,
      }),
    );
    setForm({ title: '', description: '', date: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h2>Предложить мероприятие</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Введите имя преподователя:</label>
          <input type="text" name="group" value={group} required />
        </div>

        <div className={styles.formGroup}>
          <label>Название мероприятия:</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Описание:</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Дата проведения:</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.submitButton}>
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default CreateEventStudent;
