import React from 'react';

export default function CalendarMod() {

    return (
        <div>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName)=> <div>{dayName}</div>)}
        </div>
    );
};