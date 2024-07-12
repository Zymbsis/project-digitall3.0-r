import WaterMainInfo from 'components/trakerPage/WaterMainInfo/WaterMainInfo';
import { Section, Container } from 'shared';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoutes, RestrictedRoutes, SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  const isRefreshing = false;

  return (
    <>
      <WaterMainInfo />
      {isRefreshing ? (
        <p>Some Loader</p>
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
