import React, {useState} from 'react';
import { format, isSameDay, isSameMonth } from 'date-fns';
import {takeMonth} from '../module/CalendarMod';



function WeekNames() {
    return( 
        <div className={"grid grid-cols-7"}>
                    {
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName, i) =>
                        <div className={`bg-blue-200 h-16 w-16 flex items-center justify-center dayNameHeader`}>{dayName}</div>)
                    }
        </div>
    )
}

// Changes colors of the day on the calendar if it is not the same month as the current month or the selected month


const CalendarMod = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const data = takeMonth(selectedDate)();

    function dayColor(day) {
        if(!isSameMonth(day, selectedDate)) return "text-gray-500";
        if(isSameDay(day, selectedDate)) return "selected";
    }

    function Months(){
        const month = selectedDate;
        return(
            <div className={"month"}>{format(month, 'MMMM').toUpperCase()}</div>
        )
    }
    
    function Year(){
        const year = selectedDate;
        return(
            <div className='month'>{format(year, 'yyyy').toUpperCase()}</div>
        )
    }

    return (
        
       <div className={"calendar mt-5"}>
           
            <div className={"rounded-xl"}>
                <Months/>
                <Year/>

                <WeekNames />
                {
                    data.map((week , wi)=> <div className={"grid grid-cols-7"}>
                        {
                            week.map((day, di) => <div onClick={() => setSelectedDate(day)} className={`h-16 w-16 flex items-center justify-center ${dayColor(day)}`}>{format(day, 'dd')}</div>)
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default CalendarMod;