import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StatusContext } from '../../context/statusContext';
import { useContext } from 'react';


function ListItem({dataObj, id}) {
  const {edit, changeStatus} = useContext(StatusContext);
  const dataTextArr = dataObj.markdown.trim().split('\n').filter(elem => elem);
  const dataHeading = dataTextArr[0] ? dataTextArr[0].slice(0, 20) + '...' : '';
  const dataText = dataTextArr[1] ? dataTextArr[1].slice(0, 16) + '...' : '';
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  const timeAfterMidnight = today - todayMidnight;
  const timeDiff = today - dataObj.date;
  let date;

  if (timeDiff > timeAfterMidnight) {
    date = dataObj.date.toLocaleString("en-US", { year: '2-digit', month: 'numeric', day: 'numeric' });
  } else {
    date = dataObj.date.toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });
  }
  

  const clickHandler = (e) => {
    e.stopPropagation();
    if(edit) {
      changeStatus('edit');
    }
  }

  return <li className={styles.listItem} onClick={clickHandler}>
    <NavLink to={`/notes/${id}`} className={({ isActive }) => isActive ? styles.listItemActive : ""}>
      <div className={styles.listItemContent}>
        <h3>{dataHeading}</h3>
        <p><span>{date}</span>{dataText}</p>
      </div>
    </NavLink>
  </li>
}

export default ListItem;

ListItem.propTypes = {
  dataObj: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
