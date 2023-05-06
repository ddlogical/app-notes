import styles from './Header.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { useContext } from 'react';
import { StatusContext } from '../../context/statusContext';
import { useParams } from 'react-router-dom';

function Header() {
  const {add, edit, delete: deleteData, changeStatus} = useContext(StatusContext );
  let { noteId } = useParams();
  const addHandler = () => {
    if(!add) {
      changeStatus('add');
    }
  }
  const editHandler = () => {
    if(!edit) {
      changeStatus('edit');
    }
  }
  const deleteHandler = () => {
    if(!deleteData) {
      changeStatus('delete');
    }
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