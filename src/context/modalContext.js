import { createContext, useContext, useState } from 'react';

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => {
    document.body.style.overflow = 'visible';
    setModalContent(null);
  };

  const openModal = content => {
    document.body.style.overflow = 'hidden';
    setModalContent(content);
  };

  return (
    <modalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
    </modalContext.Provider>
  );
};
