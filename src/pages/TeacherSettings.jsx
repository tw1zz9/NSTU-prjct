import React from 'react';
import '../scss/pages.scss';

const TeacherSettings = ({ isSidePanelOpen }) => {
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';
  return (
    <div className="root" style={{ marginLeft, width, transition: `.5s` }}>
      7676
    </div>
  );
};

export default TeacherSettings;
