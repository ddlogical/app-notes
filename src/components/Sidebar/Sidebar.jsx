import styles from './Sidebar.module.scss';
import ListItem from '../ListItem/ListItem';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { DataContext } from '../../context/dataContext';
import { StatusContext } from '../../context/statusContext';
import { SearchContext } from '../../context/searchContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const {data} = useContext(DataContext);
  const [dataArr, setDataArr] = useState([]);
  const [menuShown, setMenuShown] = useState(false);
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
  
  const clickSidebarHandler = () => {
    if(edit) {
      changeStatus('edit');
    }
    navigate(`/notes`);
  }

  const clickMenuHandler = () => {
    setMenuShown(prev => !prev);
  }

  return <>
  <aside className={`${styles.sidebar} ${menuShown ? styles.menuShown: ''}`}>
    <div className={styles.sidebarContent} onClick={clickSidebarHandler}>
      <ul className={styles.sidebarList}>
        {dataArr.map((elem, id) => <ListItem key={id} dataObj={elem} id={id + 1}/>).reverse()}
      </ul>    
    </div>
  </aside>
  <Button text={<Icon type={'menu'} />} className={styles.sidebarShown} handleClick={clickMenuHandler}/>
  </>
}

export default Sidebar;