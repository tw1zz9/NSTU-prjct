import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse, updateCourse } from '../../redux/slices/coursesSlice';
import { loadCourses } from '../../redux/slices/coursesSlice';

import MainLayout from '../../layouts/MainLayout';
import ActiveCourse from '../../components/teacherComponents/ActiveCourse';
import CourseModal from '../../components/CourseModal';
import styles from './ActiveCourses.module.scss';

const TeacherActiveCourses = () => {
  const dispatch = useDispatch();
  const activeCourses = useSelector((state) => state.courses.activeCourses);
  const status = useSelector((state) => state.courses.status);
  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleSave = (updatedCourse) => {
    dispatch(updateCourse(updatedCourse));
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  const handleEnd = (courseId) => {
    if (window.confirm('Вы уверены, что хотите завершить это мероприятие?')) {
      dispatch(removeCourse(courseId));
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  if (status === 'loading') {
    return (
      <MainLayout>
        <div className={styles.loading}>Загрузка курсов...</div>
      </MainLayout>
    );
  }
  console.log('active', activeCourses);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.title}>Активные мероприятия</div>

        {activeCourses.length === 0 ? (
          <p className={styles.empty}>Нет активных мероприятий</p>
        ) : (
          <div className={styles.coursesList}>
            {activeCourses.map((course) => (
              <ActiveCourse
                key={course.id}
                name={course.subject || course.title}
                group={course.group}
                date={course.date}
                place={course.place}
                onEdit={() => handleEdit(course)}
                onEnd={() => handleEnd(course.id)}
              />
            ))}
          </div>
        )}

        {isModalOpen && (
          <CourseModal course={editingCourse} onSave={handleSave} onCancel={handleCancel} />
        )}
      </div>
    </MainLayout>
  );
};

export default TeacherActiveCourses;
