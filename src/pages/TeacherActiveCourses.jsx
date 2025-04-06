import React from 'react';
import '../scss/pages.scss';

import ActiveCourse from '../components/ActiveCourse';

const TeacherActiveCourses = ({ isSidePanelOpen }) => {
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';
  return (
    <div className="root" style={{ marginLeft, width, transition: `.5s` }}>
      <ActiveCourse />
      <ActiveCourse />
      <ActiveCourse />
    </div>
  );
};

export default TeacherActiveCourses;
