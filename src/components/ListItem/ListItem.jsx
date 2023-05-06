import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StatusContext } from '../../context/statusContext';
import { useContext } from 'react';


function ListItem({markdown, id}) {
  const {edit, changeStatus} = useContext(StatusContext);
  const clickHandler = (e) => {
    e.stopPropagation();
    if(edit) {
      changeStatus('edit');
    }
  }
  return <li className={styles.listItem} onClick={clickHandler}>
    <NavLink to={`/notes/${id}`} className={({ isActive }) => isActive ? styles.listItemActive : ""}>
      <div className={styles.listItemContent}>
        <h3>Wow, what a cool not...</h3>
        <p><span>12:17 PM</span>This is an amazi...</p>
      </div>
    </NavLink>
  </li>
}

export default ListItem;

ListItem.propTypes = {
  markdown: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
