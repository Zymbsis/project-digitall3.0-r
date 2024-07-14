// import css from './SharedLayout.module.css'
import { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <>
      <main>
        <Suspense fallback={<p>SomeLoader</p>}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
