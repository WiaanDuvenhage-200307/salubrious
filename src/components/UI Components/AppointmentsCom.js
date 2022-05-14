import React from 'react';
import Button from './Button';

const AppointmentsCom = () => {

    function addAppointmentHandler(){
        console.log("Button is clicked!");
    }
    
    return (
        <div className={"appointments-block"}>
            <h2>Appointments</h2>
            <div onClick={() => addAppointmentHandler()}>
                <Button name="New Appointment +"/>
            </div>
            
        </div>
    );
};

export default AppointmentsCom;