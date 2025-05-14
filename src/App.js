import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './scss/app.scss';
import { Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Entry from './pages/Entry/index.jsx';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute.jsx';
import Applications from './pages/Applications/index.jsx';
import Home from './pages/Home/index.jsx';
import ActiveCourses from './pages/ActiveCourses/index.jsx';
import CreateEvent from './pages/CreateEvent/index.jsx';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings/index.jsx';

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/entry" replace />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/active-courses" element={<ActiveCourses />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/entry" />} />
      </Routes>
    </div>
  );
}

export default App;
