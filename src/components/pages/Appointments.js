import React from 'react';
import AppointmentsCom from '../UI Components/AppointmentsCom';
import CalendarCom from '../UI Components/CalendarCom';
import Date from '../UI Components/Date';


const Appointments = () => {

    return (
        <div className='page'>
            <h1>Welcome, John!</h1>

            <Date />
            
            <div className='welcome'>
                <p>Welcome to your management portal !
                    Manage all doctor’s appointments right here and look at upcoming appointments.
                </p>
            </div>

            <CalendarCom/>

            <AppointmentsCom/>


           
        </div>
    );
};

export default Appointments;