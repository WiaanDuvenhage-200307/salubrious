import React, {useState, useEffect} from 'react'
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Receptionist from '../assets/receptionist.svg';
import TableRow from '../UI Components/Table';
import axios from 'axios';
import Modal from '../UI Components/Modal';
import styles from './Receptionists.module.css';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';

export default function Receptionists(props) {

    const [receptionists, setReceptionists] = useState([]);
    const[modalOpen , setModalOpen] = useState(false);
    // const[modalOpen , setModalOpen] = useState(false);

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });

    const [updatedPost, setUpdatedPost] = useState({
        id: props.id,
        name: props.name
    })

    useEffect(() => {
        axios.get('http://localhost/sal_db/getReceptionists.php')
        .then((res => {
            let data = res.data;
            setReceptionists(data);
        }))
    }, [])

    const UpdatePatient = () => {
    
        return(
            <>
                <h2 className={styles.modalHeading}>Update Receptionist</h2>
                <label htmlFor='pfp'>Change Profile Pic</label>
                <Input type='file' name='pfp'/>
                <label htmlFor="patientName">Name</label>
                <Input className='form-input' name='name' type='text' value={props.name}/>
                <label htmlFor="fname">Patient Name</label>
                <Input className="form-input" name="date" type="text"/>
                <label htmlFor="date">Medical Aid Number</label>
                <Input className="form-input" name="date" type="text"/>
                <label htmlFor="fname">Contact Number</label>
                <Input className='form-input' name='reason' type='text'/>
                <Button name="Save" className={styles.save}/>
            </>
        )
    
    }

  return (
    <div>
        <div className="leftPage">
            <Nav/>
        </div>

        <div className="pageContent">
            <h1>Receptionists</h1>
            <div className='welcome'>
                    <p>Here is a list of our beloved patients!
                        We can update their info on the fly here and alter their appointments
                    </p>
                    <img src={Receptionist} width={300}/>
            </div>
            <table className={styles.table}>
                <thead>
                    <th>PROFILE IMAGE</th>
                    <th>RECEPTIONIST</th>
                    <th>EMAIL</th>
                    <th>CONTACT NUMBER</th>
                </thead>
                {receptionists.map((item,index)=>(<tr key={index}>
                    <td className={styles.tableImg}><img className={styles.circle} src={"http://localhost/sal_db/" + item.profile_image}/></td>
                    <td><span className={styles.pName}>{item.name + " " + item.surname}</span><br /><span className={styles.subHeading}>{item.email}</span></td>
                    <td className={styles.aidNumber}>{item.rank}</td>
                    <td>{item.phone_number}</td>
                    <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={() => {setModalOpen(true)}}/></td> : "" }</td>
                    </tr>
                ))}
            </table>
            {modalOpen && <Modal heading={props.heading} openModal={setModalOpen} newAppoint={<UpdatePatient />}/>}
        </div>
    </div>
  )
}
