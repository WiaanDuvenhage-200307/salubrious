import React from 'react';
import { format, isSameMonth } from 'date-fns';
import {takeMonth} from '../module/CalendarMod';

function WeekNames() {
    return( 
        <div className={"grid grid-cols-7"}>
                    {
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(dayName =>
                        <div className={"bg-blue-200 h-16 w-16 flex items-center justify-center border border-blue-200"}>{dayName}</div>)
                    }
        </div>
    )
}

function dayColor(day) {

    if(!isSameMonth(day, new Date())) return "text-gray-500";

}

const CalendarMod = () => {
   const data = takeMonth(new Date())();
    return (
       <div className={"bg-white box-border m-1 flex calendar"}>
           <div className={"border rounded-xl p-2"}>
                <WeekNames />
                {
                    data.map(week => <div className={"grid grid-cols-7"}>
                        {
                            week.map(day => <div className={`h-16 w-16 flex items-center justify-center border border-blue-200 ${dayColor(day)}`}>{format(day, 'dd')}</div>)
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default CalendarMod;