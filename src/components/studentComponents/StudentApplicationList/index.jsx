import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentApplicationCard from '../StudentApplicationCard';
import styles from './StudentApplicationList.module.scss';
import ApplyTeacher from '../../teacherComponents/ApplyTeacher';

import { loadApplications } from '../../../redux/slices/applicationsSlice';

const StudentApplicationList = ({ applications = [], userGroup = '' }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);

  const studentApplications = applications.filter(
    (app) => app.group === userGroup && app.createdBy === userId,
  );

  console.log('[Debug] Student applications filter:', {
    allApplications: applications,
    userGroup,
    userId,
    filteredApplications: studentApplications,
  });
  console.log('жопа', applications);

  useEffect(() => {
    dispatch(loadApplications());
  }, [dispatch]);

  if (studentApplications.length === 0) {
    return (
      <>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>Мои заявки</h2>
            <div className={styles.counter}>Найдено: {applications.length}</div>
          </header>
          <div className={styles.applicationGrid}>
            {applications.map((apply) => (
              <StudentApplicationCard application={apply} />
            ))}
          </div>

          {studentApplications.some((app) => app.status === 'pending') && (
            <div className={styles.hint}>Заявки на рассмотрении отмечены желтым цветом</div>
          )}
        </div>
      </>
    );
  }
};

export default StudentApplicationList;
