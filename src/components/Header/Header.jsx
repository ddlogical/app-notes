import styles from './Header.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { useContext } from 'react';
import { StatusContext } from '../../context/statusContext';
import { SearchContext } from '../../context/searchContext';
import { MenuContext } from '../../context/menuContext';
import { DataContext } from '../../context/dataContext';
import { ModalContext } from '../../context/modalContext';
import { useParams, useNavigate } from 'react-router-dom';

function Header() {
  const {add, edit, changeStatus} = useContext(StatusContext);
  const { searchPhrase, searchedData, changeSearchPhrase } = useContext(SearchContext);
  const { data } = useContext(DataContext);
  const {toggleModal} = useContext(ModalContext);
  const {menuShown, toggleMenu} = useContext(MenuContext);
  const navigate = useNavigate();

  let { noteId } = useParams();
  const addHandler = () => {
    if(menuShown) {
      toggleMenu();
    }
    if(searchPhrase !== '' && !add) {
      changeSearchPhrase('');
      changeStatus('add');
    }
    else if(!add) {
      changeStatus('add');
    }
  }
  const editHandler = () => {
    if(menuShown) {
      toggleMenu();
    }
    if(searchPhrase !== '' && !edit) {
      const index = data.findIndex(elem => elem.id === searchedData[noteId - 1].id);
      changeSearchPhrase('');
      navigate(`/notes/${index + 1}`);
      changeStatus('edit');
    } else if(!edit) {
      changeStatus('edit');
    }
  }
  const deleteHandler = () => {
    if(edit) {
      changeStatus('edit');
    }
    toggleModal();
  }

  return <header className={styles.header}>
            <div className={styles.headerButtons}>
              <Button text={<Icon type={'add'} />} className={styles.headerButton} handleClick={addHandler} />
              <Button text={<Icon type={'delete'} />} className={styles.headerButton} disabled={!noteId} handleClick={deleteHandler}/>
              <Button text={<Icon type={'edit'} />} className={styles.headerButton} disabled={!noteId} handleClick={editHandler}/>
            </div>
          <SearchBox />
  </header>
}

export default Header;