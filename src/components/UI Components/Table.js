import React, {useState} from 'react';
import Button from './Buttons/Button';
import Modal from './Modal';
import styles from './Table.module.css';
import './Table.module.css';


export function TableRow(props){
    const[modalOpen , setModalOpen] = useState(false);

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });
    console.log(userId.activeUser);

    return(
        <tr className={styles.tableRow}>
            <td className={styles.tableImg}><img src='https://via.placeholder.com/50'/></td>
            <td><span className={styles.pName}>{props.name}</span><br/>{props.title}</td>
            <td>{props.number}</td>
            <td><span className={styles.pName}>{props.Cnumber}</span><br />{props.doctorName}</td>
            {userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" function={() => {setModalOpen(true)}}/></td> : "" }
            {modalOpen && <Modal heading={props.heading} body="example text" openModal={setModalOpen} />}
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
        {modalOpen && <Modal heading={props.heading} body="example text" openModal={setModalOpen} />}
        
        </>
        
    );
};

export default Table;