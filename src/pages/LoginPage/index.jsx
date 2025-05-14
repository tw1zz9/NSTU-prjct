import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginTeacher, loginStudent } from '../../redux/slices/userSlice';

import logo from '../../assets/img/logo.png';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTeacherLogin = () => {
    dispatch(loginTeacher());
    navigate('/home');
  };

  const handleStudentLogin = () => {
    dispatch(loginStudent());
    navigate('/home');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <img className={styles.logoItem} src={logo} alt="logo" />
          <div className={styles.logoText}>ExtraNETI</div>
        </div>
        <h1>Выберите тип входа</h1>

        <button
          onClick={handleTeacherLogin}
          className={`${styles.loginButton} ${styles.teacherButton}`}
        >
          Вход от лица преподавателя
        </button>

        <div className={styles.loginDivider}>или</div>

        <button
          onClick={handleStudentLogin}
          className={`${styles.loginButton} ${styles.studentButton}`}
        >
          Вход от лица студента
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
