import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './scss/app.scss';
import { Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import TeacherHome from './pages/TeacherHome';
import TeacherApplications from './pages/TeacherApplications';
import TeacherActiveCourses from './pages/TeacherActiveCourses.jsx';
import TeacherCreateEvent from './pages/TeacherCreateEvent.jsx';
import TeacherSettings from './pages/TeacherSettings.jsx';

import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute requiredRole="teacher" />}>
          <Route path="/teacher/home" element={<TeacherHome />} />
          <Route path="/teacher/applications" element={<TeacherApplications />} />
          <Route path="/teacher/active-courses" element={<TeacherActiveCourses />} />
          <Route path="/teacher/create-event" element={<TeacherCreateEvent />} />
          <Route path="/teacher/settings" element={<TeacherSettings />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
