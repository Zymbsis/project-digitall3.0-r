import css from './SharedLayout.module.css';
import { Loader } from 'components';
import { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <>
      <main className={css.mainContainer}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
