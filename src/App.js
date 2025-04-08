import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './scss/app.scss';

import TeacherHome from './pages/TeacherHome';
import TeacherApplications from './pages/TeacherApplications';
import TeacherActiveCourses from './pages/TeacherActiveCourses.jsx';
import TeacherCreateEvent from './pages/TeacherCreateEvent.jsx';
import TeacherSettings from './pages/TeacherSettings.jsx';

import Header from './components/Header';
import SidePanel from './components/SidePanel';

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const handleClickSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="App">
      <Header className="header" onClickSidePanel={handleClickSidePanel} />
      <SidePanel isSidePanelOpen={isSidePanelOpen} />
      <Routes>
        <Route path="/" element={<TeacherHome isSidePanelOpen={isSidePanelOpen} />} />
        <Route
          path="/applications"
          element={<TeacherApplications isSidePanelOpen={isSidePanelOpen} />}
        />
        <Route
          path="/active-courses"
          element={<TeacherActiveCourses isSidePanelOpen={isSidePanelOpen} />}
        />
        <Route
          path="/create-event"
          element={<TeacherCreateEvent isSidePanelOpen={isSidePanelOpen} />}
        />
        <Route path="/settings" element={<TeacherSettings isSidePanelOpen={isSidePanelOpen} />} />
      </Routes>
    </div>
  );
}

export default App;
