import React from 'react';
import Date from './UI Components/Date';
import Profile from './UI Components/Profile';

const Patients = () => {
    return (
        <div className='page'>
            <h1>This is the patients page</h1>

            <Date />

            <Profile/>

            <div className='welcome'>
                <p>Here is a list of our patients!
                </p>
            </div>

        </div>
    );
};

export default Patients;