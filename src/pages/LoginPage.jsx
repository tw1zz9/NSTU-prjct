import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginTeacher, loginStudent } from '../redux/slices/userSlice';

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
    <div>
      <button onClick={handleTeacherLogin}>Вход для преподавателей</button>
      <button onClick={handleStudentLogin}>Вход для студентов</button>
    </div>
  );
};

export default LoginPage;
