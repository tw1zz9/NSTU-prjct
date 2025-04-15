import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../scss/app.scss';

const MainLayout = ({ children }) => {
  const isSidePanelOpen = useSelector((state) => state.sidePanel.isOpen);

  const marginLeft = !isSidePanelOpen ? '352px' : '0';
  const width = !isSidePanelOpen ? 'calc(100vw - 200px)' : '100vw';

  return (
    <div>
      <Header className="header" />
      <SidePanel isSidePanelOpen={isSidePanelOpen} />
      <main isSidePanelOpen={isSidePanelOpen} style={{ marginLeft, width, transition: `.5s` }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
