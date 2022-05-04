import React from 'react';
import Date from './UI Components/Date';
import Profile from './UI Components/Profile';

const Appointments = () => {
    return (
        <div className='page'>
            <h1>Welcome, John!</h1>

            <Profile/>

            <div className='welcome'>
                <p>Welcome to your management portal !
                    Manage all doctor’s appointments right here and look at upcoming appointments.
                </p>
            </div>

            <Date />
           
        </div>
    );
};

export default Appointments;