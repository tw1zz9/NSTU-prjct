import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginTeacher, loginStudent } from '../redux/slices/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTeacherLogin = () => {
    dispatch(loginTeacher());
    navigate('/teacher/home'); // Перенаправляем в ЛК преподавателя
  };

  const handleStudentLogin = () => {
    dispatch(loginStudent());
    navigate('/student/home'); // Перенаправляем в ЛК студента
  };

  return (
    <div>
      <button onClick={handleTeacherLogin}>Вход для преподавателей</button>
      <button onClick={handleStudentLogin}>Вход для студентов</button>
    </div>
  );
};

export default LoginPage;
