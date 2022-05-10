import React from 'react';
import Date from './UI Components/Date';
import Profile from './UI Components/Profile';

const Doctors = () => {
    return (
        <div className='page'>
            <h1>This is the doctor's page</h1>

            <Date />

            <Profile/>

            <div className='welcome'>
                <p>Welcome to your management portal !
                    Manage all doctor’s appointments right here and look at upcoming appointments.
                </p>
            </div>

        </div>
        
    );
};

export default Doctors;