import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ requiredRole }) => {
  const { role, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Не авторизован → на логин
  }

  if (role !== requiredRole) {
    return <Navigate to={`/${role}/home`} />; // Роль не та → в его ЛК
  }

  return <Outlet />;
};

export default PrivateRoute;
