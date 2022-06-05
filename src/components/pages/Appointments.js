import React, {useEffect, useState} from 'react';
import AppointmentsCom from '../UI Components/AppointmentsCom';
import CalendarCom from '../UI Components/CalendarCom';
import Date from '../UI Components/Date';
import { useNavigate } from 'react-router-dom';
import Nav from '../UI Components/Nav';
import Dash from '../assets/dash.svg';
import Logo from '../assets/logo.svg';
import axios from 'axios';



const Appointments = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');


    const [receptionist, setReceptionist] = useState({
        email: sessionStorage.getItem('activeUser'),
        name: ''
    })

    useEffect(() => {
        axios.post('http://localhost/sal_db/getReceptionistinfo.php', JSON.stringify(receptionist))
        .then((res) => {
            console.log(res.data[0].name);
            setName(res.data[0].name);
        })
    }, [])

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
    });


    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        // console.log(userSession);
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
                <h1>Welcome, <span>{name}</span></h1>
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