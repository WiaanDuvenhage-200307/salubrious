import React from 'react';
import logo from '../assets/logo.svg';
import "https://kit.fontawesome.com/3d7d8906d0.js";

const Nav = () => {
    return (
        <div className='nav'>
            <img src={logo}/>

            <ul>
                <li><i class="fa-solid fa-calendar"></i> Dashboard</li>
                <li><i class="fa-solid fa-hospital-user"></i> Patients</li>
                <li><i class="fa-solid fa-user-doctor"></i> Doctors</li>
            </ul>

        </div>
    );
};

export default Nav;