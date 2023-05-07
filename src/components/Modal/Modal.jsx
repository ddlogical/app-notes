import { useContext} from 'react';
import { ModalContext } from '../../context/modalContext';
import { StatusContext } from '../../context/statusContext';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

function Modal() {
  const {modal, toggleModal} = useContext(ModalContext);
  const {changeStatus} = useContext(StatusContext);

  function confirmHandler() {
    changeStatus('delete');
    toggleModal();
  }

  function refuseHandler() {
    toggleModal();
  }

  if(!modal) {
    return;
  }

  return <div className={styles.modal}>
    <div className={styles.modalContent}>
      <p>Do you really want to delete this note?</p>
      <div>
        <Button text='Yes' className={styles.modalButtonConfirm} handleClick={confirmHandler} />
        <Button text='No' className={styles.modalButtonRefuse}  handleClick={refuseHandler}/>
      </div>
    </div>
  </div>
}

export default Modal;