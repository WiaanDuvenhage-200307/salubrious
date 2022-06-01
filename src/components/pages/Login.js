import React from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';

export default function RegisterAndSignUp() {
  return (
    <div className='register-signup'>
            <img src={Logo} width={100}/>

            <div className="input-con">

                <label for="email">Email</label>
                <Input className='form-input' name='fname' type='text' placeholder='First Name'/>

                <label for="password">Password</label>
                <Input className='form-input' name='fname' type='text' placeholder='First Name'/>
   
                <Button name="LOGIN" className="signup-login-btn"/>
                <Button name="REGISTER" className="tersiary-btn"/>
  
            </div> 
    </div>
  )
}
