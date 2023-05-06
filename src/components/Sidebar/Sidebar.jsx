import styles from './Sidebar.module.scss';
import ListItem from '../ListItem/ListItem';

function Sidebar() {
  return <aside className={styles.sidebar}>
    <div className={styles.sidebarContent}>
      <ul className={styles.sidebarList}>
        <ListItem/>
        </ul>    
    </div> 
  </aside>;
}

export default Sidebar;