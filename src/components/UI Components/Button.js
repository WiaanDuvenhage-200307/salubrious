import React from 'react';

const Button = (props) => {
    return (
        <div className='button'>
            {props.name}
        </div>
    );
};

export default Button;