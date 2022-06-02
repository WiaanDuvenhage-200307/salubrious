import React, {useEffect} from 'react';
import AppointmentsCom from '../UI Components/AppointmentsCom';
import CalendarCom from '../UI Components/CalendarCom';
import Date from '../UI Components/Date';
import { useNavigate } from 'react-router-dom';

// TODO | Redesign Page and divide in 3 sections


const Appointments = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null){
            navigate('/');
        }

    }, [])

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