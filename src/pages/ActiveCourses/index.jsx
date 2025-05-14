import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse, updateCourse } from '../../redux/slices/coursesSlice';
import MainLayout from '../../layouts/MainLayout';
import ActiveCourse from '../../components/teacherComponents/ActiveCourse';
import CourseModal from '../../components/CourseModal';
import styles from './TeacherActiveCourses.module.scss';

const TeacherActiveCourses = () => {
  const dispatch = useDispatch();
  const activeCourses = useSelector((state) => state.courses.activeCourses);
  const status = useSelector((state) => state.courses.status);

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
    if (window.confirm('Вы уверены, что хотите завершить этот курс?')) {
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

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>Активные курсы</h2>

        {activeCourses.length === 0 ? (
          <p className={styles.empty}>Нет активных курсов</p>
        ) : (
          <div className={styles.coursesList}>
            {activeCourses.map((course) => (
              <ActiveCourse
                key={course.id}
                name={course.subject}
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
