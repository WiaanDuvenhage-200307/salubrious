import React from 'react';
import Button from './Buttons/Button';
import Dropdown from './Dropdown';
import Input from './Input';
import styles from './Modal.module.css';

const Modal = ({heading, openModal}) => {

    const closeTheModal = () => {
        openModal(false);
    }

  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <Button name={<i class="fa-solid fa-x"></i>} onClick={closeTheModal} className={styles.closeBtn}/>
            <div className={styles.modalTitle}>{heading}</div>
            <div className={styles.modalBody}>
                <label for="fname">Name</label>
                <Input className='form-input' name='fname' type='text'/>
                <label for="fname">Surname</label>
                <Input className='form-input' name='fname' type='text'/>
                <label for="fname">Doctor</label>
                <Input className='form-input' name='fname' type='text'/>
                <label for="fname">Time</label>
                <Input className='form-input' name='fname' type='time'/>
                <label for="fname">Reason of Appointment</label>
                <Input className='form-input' name='fname' type='text'/>
            </div>
            <div className={styles.modalBtns}>
                <Button name="Cancel" onClick={() => openModal(false)} className={styles.cancel}/>
                <Button name="Save" className={styles.save}/>
            </div>
        </div>
    </div>
  )
}

export default Modal;
