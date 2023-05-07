import styles from './Sidebar.module.scss';
import ListItem from '../ListItem/ListItem';
import { DataContext } from '../../context/dataContext';
import { StatusContext } from '../../context/statusContext';
import { SearchContext } from '../../context/searchContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const {data} = useContext(DataContext);
  const [dataArr, setDataArr] = useState([])
  const {edit, changeStatus} = useContext(StatusContext);
  const {searchPhrase, searchedData} = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(searchPhrase !== '') {
      setDataArr(searchedData);
    } else if(data) {
      setDataArr(data);
    }
  }, [data, searchedData, searchPhrase]);
  
  const clickHandler = () => {
    if(edit) {
      changeStatus('edit');
    }
    navigate(`/notes`);
  }

  return <aside className={styles.sidebar}>
    <div className={styles.sidebarContent} onClick={clickHandler}>
      <ul className={styles.sidebarList}>
        {dataArr.map((elem, id) => <ListItem key={id} dataObj={elem} id={id + 1}/>).reverse()}
      </ul>    
    </div> 
  </aside>;
}

export default Sidebar;