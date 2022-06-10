import React from 'react';
import styles from './AppointmentList.module.css';

export default function AppointmentList(props) {
  return (
    <div className={styles.appointmentList}>
        <div className={styles.appointmentItem}>
            <p className={styles.item}>{props.date}</p>
            <p className={styles.divider}>|</p>
            <p className={styles.item}>{props.doctorName}</p>
            <p className={styles.divider}>|</p>
            <p className={styles.item}>{props.patientName}</p>
            <p className={styles.divider}>|</p>
            <p className={styles.item}>{props.time}</p>
        </div>

    </div>
  )
}
