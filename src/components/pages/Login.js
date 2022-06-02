import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import LoginImg from '../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password : '',
    })

    const emailVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, email: value});
        // Here you will validate that it is not empty 
    }

    const passwordVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, password: value});
        // Here you will validate that it is not empty 
    }

    const handleSubmit = (e) => {

        console.log(inputs);

        axios.post('http://localhost/sal_db/userLogin.php', inputs)
        .then(function(response){
            console.log(response);

            if(response.data === true){
                sessionStorage.setItem('activeUser', inputs.username); //set our session storage to the username
                navigate('/Appointments'); 
            } else {
                console.log("Not working!");
            }
        });
    }

  return (
    <div className='login-bg'>
        <div className="login-con">
            <div className='login-img'>
                <img src={LoginImg}/>
            </div>

            <div className="form-con">

                <img src={Logo} width={100}/>
                <h1>LOGIN</h1>
                <label for="email">Email</label>
                <Input className='form-input' name='fname' type='email' onChange={emailVal} />

                <label for="password">Password</label>
                <Input className='form-input' name='fname' type='password' onChange={passwordVal}/>

                <Button name="LOGIN" className="signup-login-btn" function={() => handleSubmit(true)}/>
                <div className='btn-group'>
                    <p>New to Salubrious?</p>
                    <Button function={() => navigate("/Register")} name="REGISTER HERE" className="tersiary-btn"/>
                </div>


            </div>
        </div>
    </div>
  )
}
