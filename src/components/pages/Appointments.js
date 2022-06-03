import React, {useEffect} from 'react';
import AppointmentsCom from '../UI Components/AppointmentsCom';
import CalendarCom from '../UI Components/CalendarCom';
import Date from '../UI Components/Date';
import { useNavigate } from 'react-router-dom';
import Nav from '../UI Components/Nav';
import Dash from '../assets/dash.svg';

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
            <Nav/>
            <h1>Welcome, <span>John!</span></h1>
            
            <Date />
            
            <AppointmentsCom/>
            
            
            <div className='welcome'>
                <p>Welcome to your management portal !
                    Manage all doctor’s appointments right here and look at upcoming appointments.
                </p>
                <img src={Dash} width={200}/>
            </div>

            <CalendarCom/>

            

           
        </div>
    );
};

export default Appointments;