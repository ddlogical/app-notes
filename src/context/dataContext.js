import { useState, createContext } from 'react';

export const DataContext = createContext({
  data: [],
  changeData: () => {},
});

export function DataContextProvider(props) {
  const [data, setData] = useState([]);

  function changeData(newData) {
    setData(newData);
  }

  const contextValue = {
    data,
    changeData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
}