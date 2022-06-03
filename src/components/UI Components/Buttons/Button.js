import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.function} >
            <p>{props.name}</p>
        </button>
    );
};

export default Button;