import React from 'react';
import showPass from '../assets/show-pass.svg';
import styles from './Input.module.css';

export default function Input(props) {
  return (
    <div>
        <div className={styles.inputContainer}>
            <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
            {props.passIcon != undefined ? <img className={styles.passIcon} src={require(`../assets/${props.passIcon}.svg`)}/> : null}
        </div>
    </div>
  )
}
