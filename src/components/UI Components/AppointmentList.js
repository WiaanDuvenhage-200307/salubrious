import React from 'react';
import styles from './AppointmentList.module.css';

export default function AppointmentList(props) {
  return (
    <div className={styles.appointmentList}>
        <h1 className={styles.date}>{props.date}</h1>
        <p className={styles.item}>{props.doctorName}</p>
        <p className={styles.item}>{props.patientName}</p>
        <p className={styles.item}>{props.time}</p>
    </div>
  )
}
