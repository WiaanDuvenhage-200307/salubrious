import React from 'react';
import {takeMonth} from '../calendar/CalendarMod';

const CalendarMod = () => {
   const data = takeMonth()();
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default CalendarMod;