import React from 'react';
import '../../scss/pages.scss';
import MainLayout from '../../layouts/MainLayout';

import ActiveCourse from '../../components/ActiveCourse';

const TeacherActiveCourses = () => {
  return (
    <MainLayout className="root">
      <ActiveCourse />
      <ActiveCourse />
      <ActiveCourse />
    </MainLayout>
  );
};

export default TeacherActiveCourses;
