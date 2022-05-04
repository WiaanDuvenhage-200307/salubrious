import React from 'react';
import logo from '../assets/logo.svg';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <img src={logo} width={150}/>

            <ul>
                <Link to="/"><li className='one btn'><i class="fa-solid fa-lg fa-calendar"></i> Appointments</li></Link>
                <Link to="Patients"><li className='two btn'><i class="fa-solid fa-lg fa-hospital-user"></i> Patients</li></Link>
                <Link to="Doctors"><li className='three btn'><i class="fa-solid fa-lg fa-user-doctor"></i> Doctors</li></Link>
            </ul>

        </div>
    );
};

export default Nav;