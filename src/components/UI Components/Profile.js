import React from 'react';
import styles from './Profile.module.css';
import Button from './Buttons/Button';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    const setLogout = () => {
        // sessionStorage.removeItem('activeUser');
        // sessionStorage.setItem('activeUser', '');
        sessionStorage.clear('activeUser');
        navigate("/");

    }

    return (
        <div className={styles.profileGroup}>
            <div className={styles.circle}>    
            </div>
            <h3>Jane</h3>
            <h4>Head Receptionist</h4>
            <Button className={styles.logOut} name="LOG OUT" function={() => setLogout(true)}/>
        </div>
    );
};

export default Profile;