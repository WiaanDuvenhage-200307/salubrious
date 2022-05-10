import React from 'react';
import { addDays, endOfMonth, endOfWeek, startOfDay, startOfMonth, startOfWeek } from 'date-fns';
import CalendarMod from '../calendar/CalendarMod';

export default function CalendarCom() {

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

    function takeMonth( start = new Date()) {
        let month = []
        let date = start;

        function lastDayofRange(range){
            return range[range.length -1][6] 
        }

        return function() {
            const weekGen = takeWeek(startOfMonth(date));
            const endDate = startOfDay(endOfWeek(endOfMonth(date)))
            month.push(weekGen())

            while(lastDayofRange(month) < endDate) {
                month.push(weekGen())
            }

            const range = month;
            month = [];
            date = addDays(lastDayofRange(range), 1)
            return month;
        }
    }

    return (
        <div>
            <CalendarMod/>
        </div>
    )

    console.log(endDate);
};