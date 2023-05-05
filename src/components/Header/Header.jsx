import styles from './Header.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function Header() {
  return <header className={styles.header}>
            <div className={styles.headerButtons}>
              <Button text={<Icon type={'add'} />} className={styles.headerButton}/>
              <Button text={<Icon type={'delete'} />} className={styles.headerButton}/>
              <Button text={<Icon type={'edit'} />} className={styles.headerButton}/>
            </div>
          <SearchBox />
  </header>
}

export default Header;