import React from 'react';
import '../scss/pages.scss';

import Apply from '../components/Apply';
import MainLayout from '../layouts/MainLayout';

const TeacherApplications = () => {
  return (
    <MainLayout className="root">
      <Apply /> <Apply />
    </MainLayout>
  );
};

export default TeacherApplications;
