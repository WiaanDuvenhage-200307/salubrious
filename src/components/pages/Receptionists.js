import React, {useState, useEffect} from 'react'
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Receptionist from '../assets/receptionist.svg';
import { TableRow } from '../UI Components/Table';
import axios from 'axios';
import Modal from '../UI Components/Modal';

export default function Receptionists(props) {

    const [receptionists, setReceptionists] = useState([]);
    // const[modalOpen , setModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/sal_db/getReceptionists.php')
        .then((res => {
            let data = res.data;
            setReceptionists(data);
        }))
    }, [])

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

            {receptionists.map(item => (<TableRow headingTwo="PATIENT NAME" headingThree="MEDICAL AID NUMBER" headingFour="CONTACT NUMBER" name={item.name + " " + item.surname} number={item.phone_number} title={item.rank} Cnumber={item.email} heading="Update Receptionist"/>)
            )} 
            {/* {modalOpen && <Modal heading="Update Receptionist" body="example text" openModal={setModalOpen} />} */}
        </div>
    </div>
  )
}
