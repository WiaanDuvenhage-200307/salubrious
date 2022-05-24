import React, { useState } from 'react';
import Button from '../UI Components/Buttons/Button';
import Modal from './Modal';


const AppointmentsCom = () => {

    const[modalOpen , setModalOpen] = useState(false);

    return (
        <>
            <div className={"appointments-block"}>
                <h2>Appointments</h2>
                <div>
                    <Button name="New Appointment+" className="button" function={() => {setModalOpen(true)}}/>
                </div>
                            
                {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} />}
            </div>
            
        </>
    );
};

export default AppointmentsCom;