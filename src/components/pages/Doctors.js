import React from 'react';
import Date from '../UI Components/Date';
import Profile from '../UI Components/Profile';
import Table from '../UI Components/Table';

const Doctors = () => {
    return (
        <div className='page'>
            <h1>Our Doctors</h1>
            
            <div className='welcome'>
                <p>Here is a list of our doctor’s!
                </p>
            </div>

            <Table name="DOCTOR NAME" number="DOCTOR ID"/>
        </div>
        
    );
};

export default Doctors;