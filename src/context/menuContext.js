import { useState, createContext } from 'react';

export const MenuContext = createContext({
  menuShown: false,
  toggleMenu: () => {},
});

export function MenuContextProvider(props) {
  const [menuShown, setMenuShown] = useState(false);

  function toggleMenu() {
    setMenuShown(prev => !prev);
  }

  const contextValue = {
    menuShown,
    toggleMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
}