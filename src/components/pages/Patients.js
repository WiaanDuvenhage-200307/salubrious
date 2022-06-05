import React, {useState, useEffect} from 'react';
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Modal from '../UI Components/Modal';
import Patient from '../assets/patient.svg';
import { useNavigate } from 'react-router-dom';

const Patients = () => {

    const navigate = useNavigate();

    const[modalOpen , setModalOpen] = useState(false);

    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null){
            navigate('/');
        }

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

                <Table name="DOCTOR NAME" number="DOCTOR ID" title="Surgeon"/>
            </div>
            
            
            
           
        </div>
        {modalOpen && <Modal title="Update Doctors" openModal={setModalOpen} />}
        </>
    );
};

export default Patients;