// import css from './SharedLayout.module.css';
import { Loader } from 'components';
import { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
