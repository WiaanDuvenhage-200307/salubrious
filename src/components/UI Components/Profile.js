import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css';
import Button from './Buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
    });

    const [name, setName] = useState('');

    const setLogout = () => {
        // sessionStorage.removeItem('activeUser');
        // sessionStorage.setItem('activeUser', '');
        sessionStorage.clear('activeUser');
        navigate("/");

    }

    useEffect(() => {
        axios.post('http://localhost/api_six/readUserPosts.php', userId)
        .then((res) =>{
            let data = res.data;
            console.log(userId.activeUser);

            const slicedName = userId.activeUser;
            const [first, ...rest] = slicedName.split('.');
            setName(first.toUpperCase());


        })
        .catch(err => {
            console.log(err);
        })

    }, [])

    return (
        <div className={styles.profileGroup}>
            <div className={styles.circle}>    
            </div>
            <h3>{name}</h3>
            <h4>Head Receptionist</h4>
            <Button className={styles.logOut} name="LOG OUT" function={() => setLogout(true)}/>
        </div>
    );
};

export default Profile;