import React, { useState } from 'react';
import Button from '../UI Components/Buttons/Button';
import Modal from './Modal';


const AppointmentsCom = () => {

    const[openModal , setOpenModal] = useState(false);

    return (
        <>
            <div className={"appointments-block"}>
                <h2>Appointments</h2>
                <div>
                    <Button name="New Appointment+" className="button" function={() => {setOpenModal(true)}}/>
                </div>
                            
                {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            
        </>
    );
};

export default AppointmentsCom;