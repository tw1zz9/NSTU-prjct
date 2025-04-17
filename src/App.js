import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './scss/app.scss';
import { Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import TeacherHome from './pages/teacher/TeacherHome.jsx';
import TeacherApplications from './pages/teacher/TeacherApplications.jsx';
import TeacherActiveCourses from './pages/teacher/TeacherActiveCourses.jsx';
import TeacherCreateEvent from './pages/teacher/TeacherCreateEvent.jsx';
import TeacherSettings from './pages/teacher/TeacherSettings.jsx';
import TeacherCalendar from './pages/teacher/TeacherCalendar.jsx';

import StudentHome from './pages/student/StudentHome.jsx';
import StudentCalendar from './pages/student/StudentCalendar.jsx';
import StudentActiveCourses from './pages/student/StudentActiveCourses.jsx';
import StudentApply from './pages/student/StudentApply.jsx';
import StudentOfferEvent from './pages/student/StudentOfferEvent.jsx';
import StudentSettings from './pages/student/StudentSettings.jsx';

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
          <Route path="/teacher/calendar" element={<TeacherCalendar />} />
        </Route>

        <Route element={<PrivateRoute requiredRole="student" />}>
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/applications" element={<StudentApply />} />
          <Route path="/student/active-courses" element={<StudentActiveCourses />} />
          <Route path="/student/create-event" element={<StudentOfferEvent />} />
          <Route path="/student/settings" element={<StudentSettings />} />
          <Route path="/student/calendar" element={<StudentCalendar />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
