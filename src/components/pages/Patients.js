import React, {useState, useEffect} from 'react';
import Nav from '../UI Components/Nav';
// import Table from '../UI Components/Table';
import Modal from '../UI Components/Modal';
import Patient from '../assets/patient.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TableRow from '../UI Components/Table';
import Input from '../UI Components/Input';
import Button from '../UI Components/Buttons/Button';
import styles from './Patients.module.css';

const Patients = (props) => {

    const navigate = useNavigate();

    const[modalOpen , setModalOpen] = useState(false);
    const [newModal, setNewModal] = useState(false)

    const [patients, setPatients] = useState([]);

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });

    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null){
            navigate('/');
        }

    }, [])

    useEffect(() => {
        axios.get('http://localhost/sal_db/getPatients.php')
        .then((res => {
            let data = res.data;
            setPatients(data);
        }))
    }, [])

    const UpdatePatient = () => {
    
        return(
            <>
                <h2 className={styles.modalHeading}>Update Patient</h2>
                <label htmlFor='pfp'>Change Profile Pic</label>
                <Input type='file' name='pfp'/>
                <label htmlFor="patientName">Name</label>
                <Input className='form-input' name='name' type='text'/>
                <label htmlFor="date">Medical Aid Number</label>
                <Input className="form-input" name="date" type="text"/>
                <label htmlFor="fname">Contact Number</label>
                <Input className='form-input' name='reason' type='text'/>
                <Button name="Save" className={styles.save}/>
            </>
        )
    
    }

    return (
        <>
        <div className='page'>
            <div className="leftPage">
                <Nav/>
                
            </div>
            <div className="pageContent">
                <h1>Our Patients</h1>

                <div className='welcome'>
                    <p>Here is a list of our beloved patients!
                        We can update their info on the fly here and alter their appointments
                    </p>
                    <img src={Patient} width={200}/>
                </div>
                <Button className={styles.addBtn} name="Add Patient &#43;" onClick={() => {setModalOpen(true)}}/>
                <table className={styles.table}>
                    <thead>
                        <th>PROFILE IMAGE</th>
                        <th>PATIENT NAME</th>
                        <th>MEDICAL AID NUMBER</th>
                        <th>CONTACT NUMBER</th>
                    </thead>
                    {/* {patients.map((item, key) => (<tr name={item.name + " " + item.surname} number={item.medical_aid_number} title={item.age + " " + item.gender} Cnumber={item.phone_number} heading="Update Patient" />)
                    )}  */}
                    {patients.map((item,index)=>(<tr key={index}>
                        <td className={styles.tableImg}>{item.proile_image}</td>
                        <td><span className={styles.pName}>{item.name + " " + item.surname}</span><br /><span className={styles.subHeading}>{item.age + " " + item.gender}</span></td>
                        <td className={styles.aidNumber}>{item.medical_aid_number}</td>
                        <td>{item.phone_number}</td>
                        <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={() => {setModalOpen(true)}}/></td> : "" }</td>
                    </tr>))}
                </table>

                {modalOpen && <Modal heading={props.heading} openModal={setModalOpen} newAppoint={<UpdatePatient/>}/>}
            </div>
            
            
            
           
        </div>

        </>
    );
};

export default Patients;