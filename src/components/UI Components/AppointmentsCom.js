import React, { useState } from 'react';
import Button from '../UI Components/Buttons/Button';
import Modal from './Modal';
import styles from './AppointmentsCom.module.css';


const AppointmentsCom = () => {

    const[modalOpen , setModalOpen] = useState(false);

    return (
        <>
            <div className={styles.appointmentsBlock}>
                <h2>Appointments</h2>
                <div>
                    <Button name="New Appointment+" className={styles.newAppointBtn} function={() => {setModalOpen(true)}}/>
                </div>
                            
                {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} />}
            </div>
            
        </>
    );
};

export default AppointmentsCom;