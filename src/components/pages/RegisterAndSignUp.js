import React from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';

export default function RegisterAndSignUp() {
  return (
    <div className='register-signup'>
            <img src={Logo} width={100}/>

            <div className="input-con">
                    
                <label for="fname">First Name</label>
                <input name='fname' type="text"  placeholder='First Name'/>

                <label for="lname">Last Name</label>
                <input name='lname' type="text"  placeholder='Last Name'/>

                <label for="email">Email</label>
                <input name='email' type="email"  placeholder='email@gmail.com'/>

                <label for="password">Password</label>
                <input name='password' type="password"  placeholder='fjfd@hffn332'/>

                <label for="password">Confirm Password</label>
                <input name='password' type="password"  placeholder='Confirm it!'/>

                <label for="phone">Phone Number (optional)</label>
                <input name='phone' type="number"  placeholder='(+27)'/>

                <label for="dob">Date of Birth</label>
                <input name='dob' type="date"  placeholder='DD/MM/YYYY'/>

                <Button name="REGISTER" className="signup-login-btn"/>
                <Button name="LOGIN" className="tersiary-btn"/>
            </div> 
    </div>
  )
}
