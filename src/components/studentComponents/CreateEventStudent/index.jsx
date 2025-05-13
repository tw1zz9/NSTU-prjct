import React, { useState } from 'react';
import styles from './CreateEventStudent.module.scss';
import { useDispatch } from 'react-redux';
import { addApplication } from '../../../redux/slices/applicationsSlice';
import { useSelector } from 'react-redux';

const CreateEventStudent = () => {
  const applications = useSelector((state) => state.applications.items);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    group: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    dispatch(addApplication(newApplication));
    setFormData({
      title: '',
      description: '',
      date: '',
      group: '',
    });
    alert('Ваша заявка отправлена на рассмотрение!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(applications);

  return (
    <div className={styles.container}>
      <h2>Предложить мероприятие</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Название мероприятия:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Дата проведения:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Ваша группа:</label>
          <input type="text" name="group" value={formData.group} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.submitButton}>
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default CreateEventStudent;
