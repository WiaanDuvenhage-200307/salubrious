import React, { useState } from 'react';
import Modal from '../UI Components/Modal';
import Table from '../UI Components/Table';


const Doctors = () => {

    const[modalOpen , setModalOpen] = useState(false);

    return (
        <>
        <div className='page'>
            <h1>Our Doctors</h1>
            
            <div className='welcome'>
                <p>Here is a list of our doctor’s!
                </p>
            </div>

            <Table name="DOCTOR NAME" number="DOCTOR ID" title="Surgeon"/>
           
        </div>
        {modalOpen && <Modal title="Update Doctors" openModal={setModalOpen} />}
        </>
    );
};

export default Doctors;