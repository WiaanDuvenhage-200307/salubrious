import React, {useState} from 'react';
import Button from './Buttons/Button';
import Modal from './Modal';
import styles from './Table.module.css';
import './Table.module.css';

const Table = (props) => {

    const[modalOpen , setModalOpen] = useState(false);
    return (
        <>
        <table className={styles.table}>
            <thead>
                <th>PROFILE IMAGE</th>
                <th>{props.name}</th>
                <th>{props.number}</th>
                <th>UPCOMING <br /> APPOINTMENT</th>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.tableImg}><img src='https://via.placeholder.com/50'/></td>
                    <td><span className={styles.pName}>W. Duvenhage</span><br/>{props.title}</td>
                    <td>SAL2348478</td>
                    <td><span className={styles.pName}>09/05/2022</span><br />{props.doctorName}</td>
                    <td><Button className={styles.updateBtn} name="UPDATE" function={() => {setModalOpen(true)}}/></td> 
                </tr>

                <tr>
                    <td><img src='https://via.placeholder.com/50'/></td>
                    <td><span className={styles.pName}>W. Duvenhage</span><br/>{props.title}</td>
                    <td>SAL2348478</td>
                    <td><span className={styles.pName}>09/05/2022</span><br />{props.doctorName}</td>
                    <td><Button className={styles.updateBtn} name="UPDATE" function={() => {setModalOpen(true)}}/></td>
                </tr>

                <tr>
                    <td><img src='https://via.placeholder.com/50'/></td>
                    <td><span className={styles.pName}>W. Duvenhage</span><br/>{props.title}</td>
                    <td>SAL2348478</td>
                    <td><span className={styles.pName}>09/05/2022</span><br />{props.doctorName}</td>
                    <td><Button className={styles.updateBtn} name="UPDATE" function={() => {setModalOpen(true)}}/></td>
                </tr>
            </tbody>
        </table>
        {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} />}
        
        </>
        
    );
};

export default Table;