import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className}>
            <h2>{props.name}</h2>
        </button>
    );
};

export default Button;