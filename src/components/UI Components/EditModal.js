import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import styles from './Modal.module.css';

const EditModal = (props) => {

  const [updatedPost, setUpdatedPost] = useState({
    newMessage: props.name, 
    id: props.id
  });

  const closeModal = () => {
    props.rerender();
  }
  
  useEffect(()=>{
    document.getElementById('updateName').value = props.firstName;
    document.getElementById('updateEmail').value = props.email;
    console.log(props.firstName);
  },[]);

  const handleChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, newMessage: value});
    console.log(updatedPost);
  }

  const udpatePost = (e) => {
    e.preventDefault();

    axios.post('http://localhost/sal_db/updatePost.php', updatedPost)
      .then((res)=>{
        let data = res.data;
        console.log(data); 
        props.upRender(true);
        props.rerender();
      });
  }

  return (
    <div className={styles.modalBg}>

    <div className={styles.modal}>
      <form>
        <h2>Update {props.heading}</h2>
        <p onClick={closeModal}>x</p>
        <Input type="file"/>
        <Input className="form-input" id='updateName' placeholder='Name' onChange={handleChange}/>
        <Input className="form-input" id='updateEmail'  placeholder='Email' onChange={handleChange}/>
        <button type='submit' onClick={udpatePost}>Edit this post</button>
      </form>
       
    </div>
    </div>
  )
}

export default EditModal;
