import React from 'react';

const Date = () => {


    const dateTime = window.Date();

    console.log(dateTime);

    const formatDate = dateTime.substring(0, 15);
    const formatTime = dateTime.substring(16, 21);

    // let formatTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
    
    return (
        <div className='dateTimeCom'>
            <p>{formatDate}</p>
            <p className='time'>{formatTime}</p>
        </div>
    );
};
export default Date;