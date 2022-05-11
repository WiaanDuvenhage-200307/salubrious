import React from 'react';
import {takeMonth} from '../calendar/CalendarMod';

const CalendarMod = () => {
   const data = takeMonth()();
    return (
        <div className='calendar'>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(dayName => <div className='columns'>{dayName}</div>)}
        </div>
    );
};

export default CalendarMod;