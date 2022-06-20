import React, { useEffect, useState } from 'react';
import Button from '../UI Components/Buttons/Button';
import Modal from './Modal';
import styles from './AppointmentsCom.module.css';
import AppointmentList from './AppointmentList';
import axios from 'axios';


const AppointmentsCom = () => {

    const[modalOpen , setModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/sal_db/getAppointments.php')
        .then((res => {
            let data = res.data;
            setAppointments(data);
        }))
    }, [])

    return (
        <>
            <div className={styles.appointmentsBlock}>
                <h2>Appointments</h2>
                <div>
                    <Button name="New Appointment+" className={styles.newAppointBtn} function={() => {setModalOpen(true)}}/>
                </div>

                {appointments.map(item => (<AppointmentList date={item.date} doctorName={item.doctor_name} patientName={item.patient_name} time={item.time}/>)
                )}      
                            
                {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} />}
            </div>
            
        </>
    );
};

export default AppointmentsCom;