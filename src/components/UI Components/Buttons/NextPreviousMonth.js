import React from 'react';

const NextPreviousMonth = (props) => {
    return (
        <button className='next-prev' onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default NextPreviousMonth;