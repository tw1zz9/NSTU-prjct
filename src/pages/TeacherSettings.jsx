import React from 'react';
import '../scss/pages.scss';
import MainLayout from '../layouts/MainLayout';

const TeacherSettings = ({ isSidePanelOpen }) => {
  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';
  return <MainLayout className="root">7676</MainLayout>;
};

export default TeacherSettings;
