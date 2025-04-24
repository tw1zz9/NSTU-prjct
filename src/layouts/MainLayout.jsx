import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../scss/app.scss';

const MainLayout = ({ children }) => {
  const isSidePanelOpen = useSelector((state) => state.sidePanel.isOpen);

  const marginLeft = !isSidePanelOpen ? '352px' : '0';

  return (
    <div>
      <Header className="header" />
      <SidePanel isSidePanelOpen={isSidePanelOpen} />
      <main
        className="main_layout"
        isSidePanelOpen={isSidePanelOpen}
        style={{ marginLeft, transition: `.5s` }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
