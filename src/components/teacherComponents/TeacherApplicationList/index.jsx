import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadApplications } from '../../../redux/slices/applicationsSlice';
import ApplyTeacher from '../ApplyTeacher';
import styles from './TeacherApplicationList.module.scss';

const TeacherApplicationList = () => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications.items);
  const loading = useSelector((state) => state.applications.loading);

  useEffect(() => {
    dispatch(loadApplications());
  }, [dispatch]);

  const pendingApplications = applications.filter((app) => app.status === 'pending');

  if (loading) {
    return <div className={styles.loading}>Загрузка заявок...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Заявки студентов</div>

      {pendingApplications.length === 0 ? (
        <div className={styles.empty}>Нет заявок на рассмотрение</div>
      ) : (
        <div className={styles.applicationsGrid}>
          {pendingApplications.map((application) => (
            <ApplyTeacher key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherApplicationList;
