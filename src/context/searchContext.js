import { useState, createContext } from 'react';

export const SearchContext = createContext({
  searchPhrase: '',
  changeSearchPhrase: () => {},
  searchedData: [],
  changeSearchedData: () => {},
});

export function SearchContextProvider(props) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  function changeSearchPhrase(newSearchPhrase) {
    setSearchPhrase(newSearchPhrase);
  }

  function changeSearchedData(newSearchedData) {
    setSearchedData(newSearchedData);
  }

  const contextValue = {
    searchPhrase,
    changeSearchPhrase,
    searchedData,
    changeSearchedData
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
}