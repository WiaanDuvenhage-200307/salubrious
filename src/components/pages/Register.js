import React from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../assets/login.svg'

export default function Register() {

    const navigate = useNavigate();

  return (
<div className='login-bg'>
    <div className="login-con">


        <div className="form-con">

            <img src={Logo} width={100}/>
            <h1>REGISTER</h1>
            <label for="fname">First Name</label>
            <Input className='form-input' name='fname' type='text' placeholder='First Name'/>

            <label for="lname">Last Name</label>
            <Input className='form-input' name='fname' type='text' placeholder='Last Name'/>

            <label for="email">Email</label>
            <Input className='form-input' name='fname' type='text' placeholder='someone@email.com'/>

            <label for="password">Password</label>
            <Input className='form-input' name='fname' type='text' placeholder='Password'/>

            <label for="password">Confirm Password</label>
            <Input className='form-input' name='fname' type='text' placeholder='Confirm Password'/>

            <label for="phone">Phone Number (optional)</label>
            <Input className='form-input' name='fname' type='text' placeholder='(+27)'/>

            <label for="dob">Date of Birth</label>
            <Input className='form-input' name='dob' type='date'/>

            <Button function={() => navigate("/Appointments")} name="REGISTER" className="signup-login-btn"/>
            <div className='btn-group'>
                <p>Already a receptionist?</p>
                <Button function={() => navigate("/")} name="LOGIN HERE" className="tersiary-btn"/>
            </div>

        </div>

        <div className='login-img'>
            <img src={LoginImg}/>
        </div>
    </div>
    </div>
  )
}
