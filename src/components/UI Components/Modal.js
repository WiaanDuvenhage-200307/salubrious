import React from 'react';
import Button from './Buttons/Button';
import Dropdown from './Dropdown';
import Input from './Input';
import styles from './Modal.module.css';

const Modal = ({openModal,props}) => {
  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <Button name={<i class="fa-solid fa-x"></i>} function={() => openModal(false)} className={styles.closeBtn}/>
            <div className={styles.modalTitle}>Book an Appointment</div>
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
                <label for="fname">Room</label>
                <Input className='form-input' name='fname' type='number'/>
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
