import React from 'react';
import logo from '../assets/no-text-logo.svg';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Button from './Buttons/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {

    const navigate = useNavigate();

    const setLogout = () => {
        // sessionStorage.removeItem('activeUser');
        // sessionStorage.setItem('activeUser', '');
        sessionStorage.clear('activeUser');
        navigate("/");

    }

    

    return (
        <div className={styles.nav}>
            <img src={logo} width={100}/>

            <ul>
                <Link to="/Appointments"><li className='one btn'><i class="fa-solid fa-lg fa-calendar"></i> Appointments</li></Link>
                <Link to="/Patients"><li className='two btn'><i class="fa-solid fa-lg fa-hospital-user"></i> Patients</li></Link>
                <Link to="/Doctors"><li className='three btn'><i class="fa-solid fa-lg fa-user-doctor"></i> Doctors</li></Link>
            </ul>

            <Profile/>
            <Button className="log-out" name="LOG OUT" function={() => setLogout(true)}/>

        </div>
    );
};

export default Nav;