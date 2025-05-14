import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Calendar.module.scss';
import CalendarCouple from '../CalendarCouple';

const getMonday = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

const formatDate = (date) => {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear().toString().slice(-2);
  return `${d}.${m}.${y}`;
};

const Calendar = () => {
  const { role } = useSelector((state) => state.user);

  const activeCourses = useSelector((state) => state.courses.activeCourses);
  const [weekStart, setWeekStart] = useState(getMonday(new Date()));
  const [weekSchedule, setWeekSchedule] = useState([]);

  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);
  const [groupFilter, setGroupFilter] = useState('');
  const [showMainClasses, setShowMainClasses] = useState(true);
  const [showEvents, setShowEvents] = useState(true);

  const mainSubjects = [
    'Программирование',
    'Математика',
    'Физика',
    'Теория вероятностей и мат. статистика',
    'Дискретная математика',
    'Математический анализ',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        if (!event.target.classList.contains(styles.filterButton)) {
          setFilterOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const transformCoursesToSchedule = (courses, mondayDate) => {
      const days = [
        {
          dayName: 'пн',
          lessons: [
            {
              id: 1,
              type: 'Лекция',
              count: 1,
              name: 'Программирование',
              time: '8:30-10:00',
              classroom: '7-2',
              group: 'ИВТ-21',
              isEvent: false,
            },
            {
              id: 2,
              type: 'Лекция',
              count: 2,
              name: 'Теория вероятностей и мат. статистика',
              time: '10:15-11:45',
              classroom: '7-2',
              group: 'ИВТ-21',
              isEvent: false,
            },
            {
              id: 3,
              type: 'Практика',
              count: 3,
              name: 'Дискретная математика',
              time: '12:00-13:30',
              classroom: '7-106',
              group: 'ИВТ-21',
              isEvent: false,
            },
          ],
        },
        {
          dayName: 'вт',
          lessons: [
            {
              id: 1,
              type: 'Практика',
              count: 1,
              name: 'Физика',
              time: '14:00-15:30',
              classroom: '7-101',
              group: 'ИВТ-21',
              isEvent: false,
            },
            {
              id: 2,
              type: 'Практика',
              count: 2,
              name: 'Математический анализ',
              time: '15:45-17:15',
              classroom: '7-102',
              group: 'ПИ-22',
              isEvent: false,
            },
          ],
        },
        {
          dayName: 'ср',
          lessons: [
            {
              id: 1,
              type: 'Лекция',
              count: 1,
              name: 'Физика',
              time: '8:30-10:00',
              classroom: '7-101',
              group: 'ИВТ-21',
              isEvent: false,
            },
            {
              id: 2,
              type: 'Лекция',
              count: 2,
              name: 'Математический анализ',
              time: '10:15-11:45',
              classroom: '7-102',
              group: 'ПИ-22',
              isEvent: false,
            },
            {
              id: 3,
              type: 'Мероприятие',
              count: 3,
              name: 'Собрание студсовета',
              time: '12:00-13:30',
              classroom: 'актовый зал',
              group: 'Все',
              isEvent: true,
            },
          ],
        },
        { dayName: 'чт', lessons: [] },
        {
          dayName: 'пт',
          lessons: [
            {
              id: 1,
              type: 'Практика',
              count: 1,
              name: 'Теория вероятностей и мат. статистика',
              time: '12:00-13:30',
              classroom: '7-2',
              group: 'ИВТ-21',
              isEvent: false,
            },
            {
              id: 2,
              type: 'Мероприятие',
              count: 2,
              name: 'Научный семинар',
              time: '14:00-15:30',
              classroom: '7-102',
              group: 'Все',
              isEvent: true,
            },
          ],
        },
        {
          dayName: 'сб',
          lessons: [
            {
              id: 1,
              type: 'Практика',
              count: 1,
              name: 'Математический анализ',
              time: '12:00-13:30',
              classroom: '7-102',
              group: 'ПИ-22',
              isEvent: false,
            },
            {
              id: 2,
              type: 'Практика',
              count: 2,
              name: 'Иностранный язык',
              time: '14:00-15:30',
              classroom: '7-201',
              group: 'ИВТ-21',
              isEvent: false,
            },
          ],
        },
        { dayName: 'вс', lessons: [] },
      ];

      const weekDays = days.map((day, i) => {
        const dayDate = new Date(mondayDate);
        dayDate.setDate(mondayDate.getDate() + i);
        return { ...day, fullDate: dayDate };
      });

      // Добавляем мероприятия из Redux store
      courses.forEach((course) => {
        if (!course.date) return;
        const courseDate = new Date(course.date);

        if (
          courseDate >= mondayDate &&
          courseDate < new Date(mondayDate.getTime() + 7 * 24 * 60 * 60 * 1000)
        ) {
          const dayIndex = (courseDate.getDay() + 6) % 7;
          if (dayIndex >= 0 && dayIndex < weekDays.length) {
            const subjectName = course.subject || course.title || '';

            // Определяем, является ли это мероприятием (не основным занятием)
            const isEvent = !mainSubjects.includes(subjectName);

            weekDays[dayIndex].lessons.push({
              id: course.id,
              type: isEvent ? 'Мероприятие' : course.type || 'Лекция',
              count: weekDays[dayIndex].lessons.length + 1,
              name: subjectName,
              time: course.time || '',
              classroom: course.place || '',
              group: course.group || 'Все',
              isEvent,
            });
          }
        }
      });

      // Применяем фильтры
      return weekDays.map((day) => ({
        ...day,
        lessons: day.lessons.filter((lesson) => {
          // Фильтр по группе
          if (groupFilter && lesson.group !== groupFilter && lesson.group !== 'Все') {
            return false;
          }

          // Фильтр по типу занятия
          if (lesson.isEvent && !showEvents) return false;
          if (!lesson.isEvent && !showMainClasses) return false;

          return true;
        }),
      }));
    };

    setWeekSchedule(transformCoursesToSchedule(activeCourses, weekStart));
  }, [activeCourses, weekStart, groupFilter, showMainClasses, showEvents]);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const handlePrevWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeader}>
        <div className={styles.dateNavigation}>
          <button onClick={handlePrevWeek} className={styles.navButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <rect x="0" y="0" width="24" height="24" rx="8" fill="none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14 7l-5 5l5 5"
                />
              </svg>
            </svg>
          </button>
          <div className={styles.currentWeek}>
            {formatDate(weekStart)} - {formatDate(weekEnd)}
          </div>
          <button onClick={handleNextWeek} className={styles.navButton}>
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="24" height="24" rx="8" fill="none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </svg>
          </button>
        </div>
        <button onClick={() => setFilterOpen(!filterOpen)} className={styles.filterButton}>
          <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="20" height="20" rx="8" fill="none" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <path
                fill="#000000"
                d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458v6.927Z"
              />
            </svg>
          </svg>
        </button>
      </div>

      {filterOpen && (
        <div ref={filterRef} className={styles.filterPopup}>
          {role === 'teacher' && (
            <div className={styles.filterGroup}>
              <label>Группа:</label>
              <select
                value={groupFilter}
                onChange={(e) => setGroupFilter(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="">АВТ-412</option>
              </select>
            </div>
          )}

          <div className={styles.filterGroup}>
            <label>
              <input
                type="checkbox"
                checked={showMainClasses}
                onChange={() => setShowMainClasses(!showMainClasses)}
              />
              Основные занятия
            </label>
          </div>

          <div className={styles.filterGroup}>
            <label>
              <input
                type="checkbox"
                checked={showEvents}
                onChange={() => setShowEvents(!showEvents)}
              />
              Мероприятия
            </label>
          </div>
        </div>
      )}

      <div className={styles.calendarGrid}>
        {weekSchedule.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>{day.dayName}</span>
              <span className={styles.dayNumber}>{day.fullDate.getDate()}</span>
            </div>
            <div className={styles.lessonsList}>
              {day.lessons.length > 0 ? (
                day.lessons.map((lesson, idx) => (
                  <CalendarCouple
                    key={`${lesson.id}-${idx}`}
                    {...lesson}
                    isEvent={lesson.isEvent}
                  />
                ))
              ) : (
                <div className={styles.noLessons}>Нет занятий</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
