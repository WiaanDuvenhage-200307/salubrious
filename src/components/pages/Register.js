import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import registerLogo from '../assets/register.svg';
import styles from './Register.module.css';

export default function Register() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        surname: '', 
        email: '',
        password: '',
        passwordCon: '',
        contact: '',
        dateOfBirth: ''
    });

    const [nameError, setNameError] = useState();
    const [lastError, setLastError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();
    const [dateError, setDateError] = useState();

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const firstVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, name: value});
        if(inputs.name !== ''){setNameError();} 
    }

    const lastVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, surname: value});
        if(inputs.surname !== ''){setLastError();}
        console.log(inputs); 
    }

    const emailVal = (e) => {
        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){
            setEmailError();
        } 
        if(!value.match(mailcodex)){
            setEmailError("Email is not a valid format");
        }    
        console.log(inputs);
    }

    const validateEmail = () => {
        axios.post('http://localhost:8888/sal_db/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setEmailIcon('insert valid icon');
            setEmailAvail();
         } else if(response.data === "Not Available") {
            setEmailAvail("Email Is Not Available" );
            setEmailIcon("insert error img icon");
         } else if(response.data === "") {
            setEmailIcon();
            setEmailAvail();
            setEmailError();
         }
        });
    }

    const validateUser = () => {
        axios.post('http://localhost:8888/api/authenticateUser.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setUserAvail();
            setUserIcon("insert valid icon");
         } else {
            setUserAvail("Username Is Not Available" );
            setUserIcon("insert error img icon");
            
         }
        });
    }

    const contactVal = (e) => {
        const contCodex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const value = e.target.value;
        setInputs({...inputs, contact: value});
        if(inputs.contact != ''){setContactError();} 

        if(!value.match(contCodex)){
            setContactError("Not a Valid Phone Number" );
        } 
    }

    const passwordVal = (e) => {
        const passCodex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, password: value});
        if(inputs.password != ''){setPasswordError();} 

        if(!value.match(passCodex)){
            setPasswordError("Password must include stuff" );
        } 
    }

    const passwordConVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        if(inputs.password === value){setPasswordConError()}else{
            setPasswordConError("Your Passwords Dont Match" );
        }  
    }

    const dateVal = e => {
        const value = e.target.value;
        setInputs({...inputs, dateOfBirth: value});
        if(inputs.dateOfBirth == new Date()){
            setDateError("Invalid Date of Birth!");
        }
        console.log(inputs);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(inputs);

        if(inputs.name === ''){
            setNameError("Everyone has one..." );
        } else {
            setNameError();
        }

        if(inputs.surname === ''){
            setLastError("You aren't Seal... " );
        } else {
            setLastError();
        }

        if(inputs.email === ''){
            setEmailError("You must have an email" );
        } else {
            setEmailError();
        }

        if(inputs.contact === ''){
            setContactError("We will call you all the time");
        } else {
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError("Keep it simple and easy..." );
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError("They Kinda need to match...");
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log('Not working');
        } else {
            axios.post('http://localhost/sal_db/addUser.php', inputs)
            .then(function(response){
             console.log(response);

             if(response.status === 200){
                 navigate("/Appointments");
             }

            });
        }

    }

  return (
    <div className={styles.registerBg}>
        <div className={styles.registerCon}>


            <div className={styles.formCon}>

                <img className={styles.registerLogo} src={Logo} width={100}/>
                <h1>REGISTER</h1>
                <label for="name">First Name</label>
                <Input className='form-input' name='name' type='text' onChange={firstVal}/>

                <label for="lname">Last Name</label>
                <Input className='form-input' name='fname' type='text' onChange={lastVal}/>

                <label for="email">Email</label>
                <Input className='form-input' name='fname' type='text' onChange={emailVal}/>

                <label for="password">Password</label>
                <Input className='form-input' name='fname' type='password'  passIcon="hide-pass" onChange={passwordVal}/>

                <label for="password">Confirm Password</label>
                <Input className='form-input' name='fname' type='password' passIcon="hide-pass" onChange={passwordConVal}/>

                <label for="phone">Phone Number (optional)</label>
                <Input className='form-input' name='fname' type='text' placeholder='(+27)' onChange={contactVal}/>

                <label for="dob">Date of Birth</label>
                <Input className='form-input' name='dob' type='date' onChange={dateVal}/>

                <Button function={() => handleSubmit(true)} name="REGISTER" className="signup-login-btn"/>
                <div className='btn-group'>
                    <p>Already a receptionist?</p>
                    <Button function={() => navigate("/")} name="LOGIN HERE" className="tersiary-btn"/>
                </div>

            </div>

        <div className={styles.loginImg}>
            <img src={registerLogo} width={500}/>
        </div>
    </div>
    </div>
  )
}
