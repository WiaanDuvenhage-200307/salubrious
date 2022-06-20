import React, {useState, useEffect} from 'react';
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Modal from '../UI Components/Modal';
import Patient from '../assets/patient.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {TableRow} from '../UI Components/Table';

const Patients = () => {

    const navigate = useNavigate();

    const[modalOpen , setModalOpen] = useState(false);

    const [patients, setPatients] = useState([]);

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

                {patients.map(item => (<TableRow headingTwo="PATIENT NAME" headingThree="MEDICAL AID NUMBER" headingFour="CONTACT NUMBER" name={item.name + " " + item.surname} number={item.medical_aid_number} title={item.age + " " + item.gender} Cnumber={item.phone_number}/>)
                )} 
            </div>
            
            
            
           
        </div>
        {modalOpen && <Modal title="Update Doctors" openModal={setModalOpen} />}
        </>
    );
};

export default Patients;