import styles from './ListItem.module.scss';

function ListItem() {
  return <li className={styles.listItem}>
    <div className={styles.listItemContent}>
      <h3>Wow, what a cool not...</h3>
      <p><span>12:17 PM</span>This is an amazi...</p>
    </div>
  </li>
}

export default ListItem;