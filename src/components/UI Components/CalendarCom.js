import React from 'react';
import { format } from 'date-fns';
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

const CalendarMod = () => {
   const data = takeMonth()();
    return (
       <div className={"bg-white box-border m-1 flex calendar"}>
           <div className={"border round-md"}>
                <WeekNames />
                {
                    data.map(week => <div className={"grid grid-cols-7"}>
                        {
                            week.map(day => <div className={"h-16 w-16 flex items-center justify-center border border-blue-200"}>{format(day, 'dd')}</div>)
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default CalendarMod;