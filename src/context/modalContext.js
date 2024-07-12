import { createContext, useContext, useState } from 'react';

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <modalContext.Provider value={{ modalContent, setModalContent }}>
      {children}
    </modalContext.Provider>
  );
};
