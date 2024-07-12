import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

const RestrictedRoutes = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoutes;
