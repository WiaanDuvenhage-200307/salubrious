import React from 'react';
import Table from '../UI Components/Table';

const Patients = () => {
    return (
        <div className='page'>
            <h1>Our Patients</h1>

            <div className='welcome'>
                <p>Here is a list of our patients!
                </p>
            </div>

            <Table name="PATIENT NAME" number="MEDICAL AID NUMBER" doctorName="Dr. Charlene Ferreira"/>

        </div>
    );
};

export default Patients;