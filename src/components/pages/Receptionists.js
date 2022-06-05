import React from 'react'
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Receptionist from '../assets/receptionist.svg';

export default function Receptionists() {
  return (
    <div>
        <div className="leftPage">
            <Nav/>
        </div>

        <div className="pageContent">
            <h1>Receptionists</h1>
            <div className='welcome'>
                    <p>Here is a list of our beloved patients!
                        We can update their info on the fly here and alter their appointments
                    </p>
                    <img src={Receptionist} width={300}/>
            </div>

            <Table name="DOCTOR NAME" number="DOCTOR ID" title="Surgeon"/>
        </div>
    </div>
  )
}
