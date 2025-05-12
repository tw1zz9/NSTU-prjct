import React, { useState } from 'react';
import '../../scss/pages.scss';
import MainLayout from '../../layouts/MainLayout';
import { addCourse } from '../../redux/slices/coursesSlice';
import { useDispatch } from 'react-redux';

const TeacherCreateCourse = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    subject: '',
    group: '',
    date: '',
    time: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      subject: formData.subject,
      group: formData.group,
      date: `${formData.date} ${formData.time}`,
      place: formData.place,
    };

    dispatch(addCourse(courseData));

    // Очистка формы
    setFormData({
      subject: '',
      group: '',
      date: '',
      time: '',
      place: '',
    });
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit} className="create-course-form">
        <h2>Создание нового курса</h2>

        <div className="form-group">
          <label>Предмет:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Группа:</label>
          <input type="text" name="group" value={formData.group} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Дата:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Время:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Место:</label>
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />
        </div>

        <button type="submit">Создать курс</button>
      </form>
    </MainLayout>
  );
};

export default TeacherCreateCourse;
