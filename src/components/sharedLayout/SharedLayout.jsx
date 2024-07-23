import { useTour } from '@reactour/tour';
import { Loader } from 'components';
import { Toaster } from 'react-hot-toast';
import { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowOnboardingTour } from '../../redux/auth/selectors';
import CustomToast, {
  toastStyles,
} from '../trackerPage/CustomToast/CustomToast';
import { showOnboarding } from '../../redux/auth/slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { setIsOpen } = useTour();
  const showTour = useSelector(selectShowOnboardingTour);

  const notify = useCallback(() => {
    toast(<CustomToast setIsOpen={setIsOpen} />, {
      ...toastStyles,
    });
  }, [setIsOpen]);

  useEffect(() => {
    if (showTour) {
      const timer = setTimeout(() => {
        notify();
        dispatch(showOnboarding(false));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [dispatch, notify, showTour]);

  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 6000 }}
      />
      <main className={css.mainContainer}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SharedLayout;
