import React, { useState, useEffect } from 'react';
import Modal from '../UI Components/Modal';
import Nav from '../UI Components/Nav';
import Table, { TableRow } from '../UI Components/Table';
import Doctor from '../assets/doctor.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Doctors = () => {

    const[modalOpen , setModalOpen] = useState(false);
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);

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

                {doctors.map(item => (<TableRow headingTwo="DOCTOR NAME" headingThree="DOCTOR ID" headingFour="CONTACT NUMBER" Cnumber={item.phone_number}  name={item.name + " " + item.surname} number={item.doctor_id} title={item.specialisation} heading="Update Doctor"/>)
                )}   

            </div>
            
            
            
           
        </div>
        {/* {modalOpen && <Modal title="Update Doctors" openModal={setModalOpen} />} */}
        </>
    );
};

export default Doctors;