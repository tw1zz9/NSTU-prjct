import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import TeacherApplicationList from '../../components/teacherComponents/TeacherApplicationList';
import StudentApplicationList from '../../components/studentComponents/StudentApplicationList';
import styles from './Applications.module.scss';

const Applications = () => {
  const { role, group } = useSelector((state) => state.user);
  const applications = useSelector((state) => state.applications.items);

  console.log('Current applications:', applications);
  console.log('User role and group:', { role, group });

  return (
    <MainLayout className="root">
      <div className={styles.container}>
        {role === 'teacher' ? (
          <TeacherApplicationList applications={applications} />
        ) : (
          <StudentApplicationList applications={applications} userGroup={group} />
        )}
      </div>
    </MainLayout>
  );
};

export default Applications;
