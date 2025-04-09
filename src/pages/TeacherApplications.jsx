import React from 'react';
import '../scss/pages.scss';

import Apply from '../components/Apply';

const TeacherApplications = ({ isSidePanelOpen }) => {
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';
  return (
    <div className="root" style={{ marginLeft, width, transition: `.5s` }}>
      <Apply /> <Apply />
    </div>
  );
};

export default TeacherApplications;
