import React from 'react';
import logo from '../assets/logo.svg';
import "https://kit.fontawesome.com/3d7d8906d0.js";

const Nav = () => {
    return (
        <div className='nav'>
            <img src={logo}/>

            <ul>
                <li className='one btn'><i class="fa-solid fa-lg fa-calendar"></i> Dashboard</li>
                <li className='two btn'><i class="fa-solid fa-lg fa-hospital-user"></i> Patients</li>
                <li className='three btn'><i class="fa-solid fa-lg fa-user-doctor"></i> Doctors</li>
            </ul>

        </div>
    );
};

export default Nav;