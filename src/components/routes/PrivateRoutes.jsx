import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoutes = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoggedIn = false;
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoutes;
