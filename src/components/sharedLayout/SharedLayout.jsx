import css from './SharedLayout.module.css';
import { Loader } from 'components';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const SharedLayout = ({ children }) => {
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
    </>
  );
};

export default SharedLayout;
