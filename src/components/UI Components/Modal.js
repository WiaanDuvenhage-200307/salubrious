import React from 'react';
import Button from './Buttons/Button';
import Dropdown from './Dropdown';
import Input from './Input';
import styles from './Modal.module.css';

const Modal = ({heading, openModal, newAppoint}) => {

    const closeTheModal = () => {
        openModal(false);
    }

  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <Button name={<i class="fa-solid fa-x"></i>} onClick={closeTheModal} className={styles.closeBtn}/>
            <div className={styles.modalTitle}>{heading}</div>
            <div className={styles.modalBody}>
                {newAppoint}
                <Button name="Cancel" onClick={() => openModal(false)} className={styles.cancel}/>
            </div>
        </div>
    </div>
  )
}

export default Modal;
