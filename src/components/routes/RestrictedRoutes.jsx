import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoutes = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  if (!pathname.includes('activation')) {
    return component;
  }
  if (token) {
    return component;
  }
  return <Navigate to={redirectTo} />;
};

export default RestrictedRoutes;
