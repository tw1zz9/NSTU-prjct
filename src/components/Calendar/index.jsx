import React from 'react';
import styles from './Calendar.module.scss';

import CalendarCouple from '../CalendarCouple';

const weekSchedule = [
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
  {
    day: 'monday',
    dayName: 'пн',
    dayNum: 14,
    lessons: [
      {
        id: 1,
        type: 'Лекция',
        count: 1,
        name: 'Программирование',
        time: '8:30-10:00',
        classroom: '7-2',
      },
      {
        id: 2,
        type: 'Лекция',
        count: 2,
        name: 'Теория вероятностей и математическая статистика',
        time: '10:15-11:45',
        classroom: '7-2',
      },
      {
        id: 3,
        type: 'Практика',
        count: 3,
        name: 'Дискретная математика',
        time: '10:15-11:45',
        classroom: '7-106',
      },
    ],
  },
];

const Calendar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.upSection}>
        <div className={styles.dateBlock}>
          <div className={styles.arrowLeft}>icon</div>
          <div className={styles.date}>14.04.25-20.04.25</div>
          <div className={styles.arrowRight}>icon</div>
        </div>
        <div className={styles.filter}>icon</div>
      </div>

      <div className={styles.main}>
        {weekSchedule.map((day) => (
          <div key={day.day} className={styles[day.day]}>
            <div className={styles.dayHeader}>
              {day.dayName}
              <div className={day.dayDate}>{day.dayNum}</div>
            </div>
            <div className={day.dayLessons}>
              {day.lessons.map((lesson) => (
                <CalendarCouple
                  key={lesson.id}
                  type={lesson.type}
                  count={lesson.count}
                  name={lesson.name}
                  time={lesson.time}
                  classroom={lesson.classroom}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
