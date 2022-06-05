import React, { useState, useEffect } from 'react';
import Modal from '../UI Components/Modal';
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Doctor from '../assets/doctor.svg';
import { useNavigate } from 'react-router-dom';


const Doctors = () => {

    const[modalOpen , setModalOpen] = useState(false);
    const navigate = useNavigate();

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
                <h1>Our Doctors</h1>

                <div className='welcome'>
                    <p>Here is a list of our doctor’s!
                        You will be able to update appointments!
                    </p>
                    <img src={Doctor} width={300}/>
                </div>

                <Table name="DOCTOR NAME" number="DOCTOR ID" title="Surgeon"/>
            </div>
            
            
            
           
        </div>
        {modalOpen && <Modal title="Update Doctors" openModal={setModalOpen} />}
        </>
    );
};

export default Doctors;