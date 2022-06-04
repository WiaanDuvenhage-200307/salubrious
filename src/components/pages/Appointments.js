import React, {useEffect} from 'react';
import AppointmentsCom from '../UI Components/AppointmentsCom';
import CalendarCom from '../UI Components/CalendarCom';
import Date from '../UI Components/Date';
import { useNavigate } from 'react-router-dom';
import Nav from '../UI Components/Nav';
import Dash from '../assets/dash.svg';
import Logo from '../assets/logo.svg';

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
            <div className="leftPage">
                <Nav/>
            </div>
  
            <div className="middlePage">
                <h1>Welcome, <span>John!</span></h1>
                <Date />
                            
                <div className='welcome'>
                    <p>Welcome to your management portal !
                        Manage all doctor’s appointments right here and look at upcoming appointments.
                    </p>
                    <img src={Dash} width={250}/>
                </div>

                <CalendarCom/>
                {/* <div className="footerImg">
                    <img src={Logo}/>
                </div> */}
               
            </div>
            <div className="rightPage">
                <AppointmentsCom/>
            </div>
    
           
        </div>
    );
};

export default Appointments;