// import css from './SharedLayout.module.css'

import { Suspense } from 'react';
import { useModal } from 'context';
import { Modal } from 'components';

const SharedLayout = ({ children }) => {
  const { modalContent } = useModal();

  return (
    <>
      <main>
        <Suspense fallback={<p>SomeLoader</p>}>{children}</Suspense>
      </main>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
};

export default SharedLayout;
