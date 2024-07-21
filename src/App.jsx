import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PrivateRoutes,
  RestrictedRoutes,
  SharedLayout,
  Loader,
} from 'components';
import { selectIsRefreshing } from './redux/auth/selectors';
import { ActivationPage } from 'pages/index.js';

const HomePage = lazy(() => import('./pages/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  // const dispatch = useDispatch();
  // const {
  //   auth: { token: accessToken },
  // } = store.getState();
  // const user = useSelector(selectCurrentUser);

  // useEffect(() => {
  //   if (!user.name && accessToken) {
  //     dispatch(getUser());
  //   }
  // }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <SharedLayout>
          <Routes>
            <Route path="/activation/*" component={<ActivationPage />}></Route>
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
