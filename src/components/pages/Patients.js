import React from 'react';
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';

const Patients = () => {
    return (
        <div className='page'>
            <Nav/>
            <h1>Our Patients</h1>

            <div className='welcome'>
                <p>Here is a list of our patients!
                </p>
            </div>

            <Table name="PATIENT NAME" number="MEDICAL AID NUMBER" doctorName="Dr. Charlene Ferreira" title="Male"/>
            
            
        </div>
    );
};

export default Patients;