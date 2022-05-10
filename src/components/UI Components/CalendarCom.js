import React from 'react';
import { addDays, endOfMonth, endOfWeek, startOfDay, startOfMonth, startOfWeek } from 'date-fns';

const CalendarCom = () => {

    const selectedDate = new Date(); //current month

    const startDate = startOfWeek(startOfMonth(selectedDate)); //beginning of calendar month
    const endDate = endOfWeek(endOfMonth(selectedDate)); //end of calendar month

    function takeWeek(start = new Date()) {
        let date = startOfWeek(startOfDay(start));

        return function() {
            const week = [...Array(7)].map((_, i) => addDays(date, i))
            date = addDays(week[6], 1)
            return week;
        }
    };

    console.log(endDate);
    return (
        <div>
            
        </div>
    );
};

export default CalendarCom;