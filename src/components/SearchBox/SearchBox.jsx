import styles from './SearchBox.module.scss';
import { useEffect, useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import { DataContext } from '../../context/dataContext';
import useDebounce from '../../hooks/useDebounce';
import { useNavigate, useParams } from 'react-router-dom';

function SearchBox() {
  const { searchPhrase, changeSearchPhrase, changeSearchedData } = useContext(SearchContext);
  const { data } = useContext(DataContext);
  let { noteId } = useParams();
  const navigate = useNavigate();
  const debouncedSearchPhrase = useDebounce(searchPhrase, 500);

  useEffect(() => {
    const result = data.filter((elem) => elem.markdown.toLowerCase().includes(debouncedSearchPhrase));
    if(noteId) {
      navigate(`/notes`);
    }
    changeSearchedData(result);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchPhrase]);
  
  return <input
            type="text"
            placeholder="Search"
            className={styles.searchBox}
            value={searchPhrase}
            onChange={(e) => {
              changeSearchPhrase(e.target.value);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          />
}

export default SearchBox;