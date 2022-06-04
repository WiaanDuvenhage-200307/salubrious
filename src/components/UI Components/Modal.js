import React from 'react';
import Button from './Buttons/Button';
import styles from './Modal.module.css';

const Modal = ({openModal,props}) => {
  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <Button name={<i class="fa-solid fa-x"></i>} function={() => openModal(false)} className={styles.closeBtn}/>
            <div className={styles.modalTitle}>Heading</div>
            <div className={styles.modalBody}>
                <h3>Body</h3>
            </div>
            <div className={styles.modalBtns}>
                <Button name="Cancel" function={() => openModal(false)} className={styles.cancel}/>
                <Button name="Save" className={styles.save}/>
            </div>
        </div>
    </div>
  )
}

export default Modal;
