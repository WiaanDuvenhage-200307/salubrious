import React, { useState, useEffect } from 'react';
import Modal from '../UI Components/Modal';
import Nav from '../UI Components/Nav';
import TableRow from '../UI Components/Table';
import Doctor from '../assets/doctor.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Doctors.module.css';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';


const Doctors = (props) => {

    const[modalOpen , setModalOpen] = useState(false);
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);

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
        axios.get('http://localhost/sal_db/getDoctors.php')
        .then((res => {
            let data = res.data;
            setDoctors(data);
        }))
    }, [])

    const UpdatePatient = () => {
    
        return(
            <>
                <h2 className={styles.modalHeading}>Update Doctor</h2>
                <label htmlFor='pfp'>Change Profile Pic</label>
                <Input type='file' name='pfp'/>
                <label htmlFor="patientName">Name</label>
                <Input className='form-input' name='name' type='text'/>
                <label htmlFor="date">Doctor ID</label>
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
                <h1>Our Doctors</h1>

                <div className='welcome'>
                    <p>Here is a list of our doctor’s!
                        You will be able to update appointments!
                    </p>
                    <img src={Doctor} width={300}/>
                </div>

 
                
                <table className={styles.table}>
                    <thead>
                        <th>PROFILE IMAGE</th>
                        <th>DOCTORS NAME</th>
                        <th>DOCTOR ID</th>
                        <th>CONTACT NUMBER</th>
                    </thead>
                    {doctors.map((item,index)=>(<tr key={index}>
                        <td className={styles.tableImg}>{item.proile_image}</td>
                        <td><span className={styles.pName}>Dr. {item.name + " " + item.surname}</span><br /><span className={styles.subHeading}>{item.specialisation}</span></td>
                        <td className={styles.aidNumber}>{item.doctor_id}</td>
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

export default Doctors;