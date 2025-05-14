import React from 'react';
import '../../scss/app.scss';
import EventHome from '../../components/EventHome/index';
import NotifyHome from '../../components/NotifyHome';
import MainLayout from '../../layouts/MainLayout';
import { useSelector } from 'react-redux';
import HomeStats from '../../components/teacherComponents/HomeStats';

const TeacherHome = ({ isSidePanelOpen }) => {
  const { role } = useSelector((state) => state.user);
  const applications = useSelector((state) => state.applications.items);
  const activeCourses = useSelector((state) => state.courses.activeCourses);

  const pendingApplications = applications.filter((app) => app.status === 'pending');

  const now = new Date();

  const upcomingCourses = activeCourses
    .filter((course) => {
      if (!course.date) return false;
      const courseDate = new Date(course.date);
      return courseDate >= now;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  return (
    <MainLayout className="root home">
      <div className="home-content">
        <div className={`stats-container ${isSidePanelOpen ? 'centered' : ''}`}>
          {role === 'teacher' && <HomeStats />}
        </div>

        <h1 className="section-title">Ближайшие события</h1>
        <div className="events-container">
          {upcomingCourses.length > 0 ? (
            upcomingCourses.map((course) => (
              <EventHome
                key={course.id}
                stretchable
                title={course.subject || course.title}
                group={course.group}
                date={course.date}
                place={course.place}
              />
            ))
          ) : (
            <p>Нет ближайших событий</p>
          )}
        </div>

        <h1 className="section-title">Уведомления</h1>
        <div className="notifications-container">
          {pendingApplications.length > 0 ? (
            pendingApplications
              .slice(0, 4)
              .map((application) => <NotifyHome key={application.id} application={application} />)
          ) : (
            <p>У вас нет новых уведомлений</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherHome;
