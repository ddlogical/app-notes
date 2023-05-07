import { useState, createContext } from 'react';

export const ModalContext = createContext({
  modal: false,
  toggleModal: () => {},
});

export function ModalContextProvider(props) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(prev => !prev);
  }

  const contextValue = {
    modal,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
    </ModalContext.Provider>
  );
}