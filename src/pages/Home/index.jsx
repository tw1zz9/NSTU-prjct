import React from 'react';
import '../../scss/app.scss';
import EventHome from '../../components/EventHome/index';
import NotifyHome from '../../components/NotifyHome';
import MainLayout from '../../layouts/MainLayout';
import { useSelector } from 'react-redux';
import HomeStats from '../../components/teacherComponents/HomeStats';

const TeacherHome = ({ isSidePanelOpen }) => {
  const { role } = useSelector((state) => state.user);

  return (
    <MainLayout className="root home">
      <div className="home-content">
        <div className={`stats-container ${isSidePanelOpen ? 'centered' : ''}`}>
          {role === 'teacher' ? <HomeStats /> : ''}
        </div>

        <h1 className="section-title">Ближайшие события</h1>
        <div className="events-container">
          {[...Array(4)].map((_, i) => (
            <EventHome key={i} stretchable />
          ))}
        </div>

        <h1 className="section-title">Уведомления</h1>
        <div className="notifications-container">
          <NotifyHome />
          <NotifyHome />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherHome;
