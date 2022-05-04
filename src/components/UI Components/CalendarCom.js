import React from 'react';
import moment from 'moment';

const CalendarCom = () => {
    return (
        <div className='calendar'>
            <p>{moment().format()}</p>
        </div>
    );
};

export default CalendarCom;