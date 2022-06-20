import React, {useState} from 'react';
import Button from './Buttons/Button';
import Modal from './Modal';
import styles from './Table.module.css';
import './Table.module.css';


export function TableRow(props){
    const[modalOpen , setModalOpen] = useState(false);
    return(
        <tr>
            <td className={styles.tableImg}><img src='https://via.placeholder.com/50'/></td>
            <td><span className={styles.pName}>Dr. {props.name}</span><br/>{props.title}</td>
            <td>{props.number}</td>
            <td><span className={styles.pName}>{props.Cnumber}</span><br />{props.doctorName}</td>
            <td><Button className={styles.updateBtn} name="UPDATE" function={() => {setModalOpen(true)}}/></td> 
        </tr>
    )
} 

const Table = (props) => {

    const[modalOpen , setModalOpen] = useState(false);



    return (
        <>
        <table className={styles.table}>
            <thead>
                <th>PROFILE IMAGE</th>
                <th>{props.headingTwo}</th>
                <th>{props.headingThree}</th>
                <th>{props.headingFour}</th>
            </thead>
            <TableRow/>
        </table>
        {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} />}
        
        </>
        
    );
};

export default Table;