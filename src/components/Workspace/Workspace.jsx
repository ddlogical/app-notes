import styles from './Workspace.module.scss';
import PropTypes from 'prop-types';

function Workspace({type}) {
  let visibleElem;
  switch (type) {
    case 'empty':
      visibleElem = null;
      break;
    case 'edit':
      visibleElem = <textarea className={styles.workSpaceTextEdit}></textarea>
      break;
    default:
      visibleElem =<div className={styles.workSpaceText}>Some dummy text</div>
  }

  return <main className={styles.workSpace}>
    <div className={styles.workSpaceDate}>
      May 10, 2018 at 12:17 PM
    </div>
    {visibleElem}
  </main>
}

export default Workspace;

Workspace.propTypes = {
  type: PropTypes.string,
};

Workspace.defaultProps = {
  type: 'show-note',
};