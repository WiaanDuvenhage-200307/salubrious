import React from 'react';
import Button from '../UI Components/Buttons/Button';

const AppointmentsCom = () => {

    function addAppointmentHandler(){
        console.log("Button is clicked!");
    }
    
    return (
        <div className={"appointments-block"}>
            <h2>Appointments</h2>
            <div onClick={() => addAppointmentHandler()}>
                <Button className="button" name="New Appointment +"/>
            </div>
            
        </div>
    );
};

export default AppointmentsCom;