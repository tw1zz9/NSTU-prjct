import { useNavigate } from 'react-router-dom';
import styles from './Entry.module.scss';

const Entry = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className={styles.entryPage}>
      <div className={styles.loginForm}>
        <h2>Вход в систему</h2>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Логин</label>
            <input
              type="text"
              id="username"
              placeholder="Введите ваш логин"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Введите ваш пароль"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Войти
          </button>
        </form>
      </div>

      <div className={styles.readerModeSection}>
        <p className={styles.readerDescription}>
          Чтобы зайти в экспериментальный режим смотрителя, нажмите на кнопку ниже
        </p>
        <button onClick={handleContinue} className={styles.readerButton}>
          Режим смотрителя
        </button>
      </div>
    </div>
  );
};

export default Entry;
