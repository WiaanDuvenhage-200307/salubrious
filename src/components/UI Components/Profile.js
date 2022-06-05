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
    const [rank, setRank] = useState('');

    const setLogout = () => {
        // sessionStorage.removeItem('activeUser');
        // sessionStorage.setItem('activeUser', '');
        sessionStorage.clear('activeUser');
        navigate("/");

    }

    const [receptionist, setReceptionist] = useState({
        email: sessionStorage.getItem('activeUser'),
        name: '',
        rank: ''
    })

    useEffect(() => {
        axios.post('http://localhost/sal_db/getReceptionistinfo.php', JSON.stringify(receptionist))
        .then((res) => {
            console.log(res.data[0].name);
            setName(res.data[0].name);
            setRank(res.data[0].rank);
        })
    }, [])


    return (
        <div className={styles.profileGroup}>
            <div className={styles.circle}>    
            </div>
            <h3>{name}</h3>
            <h4>{rank}</h4>
            <Button className={styles.logOut} name="LOG OUT" function={() => setLogout(true)}/>
        </div>
    );
};

export default Profile;