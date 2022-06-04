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

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
    });

    const [name, setName] = useState('');

    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null){
            navigate('/');
        }

    }, [])

    useEffect(() => {
        axios.get('http://localhost/sal_db/readUserPosts.php', userId)
        .then((res) =>{
            let data = res.data;
            console.log(userId);

            const slicedName = userId.activeUser;
            const [first, ...rest] = slicedName.split('.');
            console.log(first);
            setName(first.toUpperCase());


        })
        .catch(err => {
            console.log(err);
        })

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