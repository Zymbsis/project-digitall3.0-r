import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  PrivateRoutes,
  RestrictedRoutes,
  SharedLayout,
  Loader,
} from 'components';
import { selectIsRefreshing } from './redux/auth/selectors';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('./pages/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <SharedLayout>
          <Routes>
            <Route
              path="/"
              element={
                <RestrictedRoutes
                  redirectTo="/tracker"
                  component={<HomePage />}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <RestrictedRoutes
                  redirectTo="/tracker"
                  component={<SignUpPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoutes
                  redirectTo="/tracker"
                  component={<SignInPage />}
                />
              }
            />
            <Route
              path="/tracker"
              element={
                <PrivateRoutes redirectTo="/" component={<TrackerPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SharedLayout>
      )}
    </>
  );
};

export default App;
