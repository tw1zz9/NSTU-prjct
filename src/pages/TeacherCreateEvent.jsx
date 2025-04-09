import React, { useState } from 'react';
import '../scss/pages.scss';

const TeacherCreateCourse = ({ isSidePanelOpen }) => {
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';

  const [formData, setFormData] = useState({
    name: '',
    time: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div style={{ marginLeft, width, transition: `.5s` }}>
      <form
        className={`create_event ${isSidePanelOpen ? 'center' : 'start'}`}
        onSubmit={handleSubmit}
      >
        <div className="create_event_title">Создание мероприятия</div>
        <div className="create_event_desc">
          Заполните форму, чтобы создать новое мероприятие для студентов.
        </div>

        <div className="create_event_name create_event_el">
          <label className="create_event_nameText" htmlFor="eventName">
            Название мероприятия
          </label>
          <input
            className="create_event_nameEl"
            type="text"
            id="eventName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="create_event_time create_event_el">
          <label className="create_event_timeText" htmlFor="eventTime">
            Дата и время
          </label>
          <input
            className="create_event_timeEl"
            type="datetime-local"
            id="eventTime"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="create_event_place create_event_el">
          <label className="create_event_placeText" htmlFor="eventPlace">
            Место проведения
          </label>
          <input
            className="create_event_placeEl"
            type="text"
            id="eventPlace"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>

        <div className="create_event_submitButton">
          <button type="submit" className="create_event_submitButtonEl">
            Создать мероприятие
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherCreateCourse;
