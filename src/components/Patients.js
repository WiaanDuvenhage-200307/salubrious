import React from 'react';
import Button from './UI Components/Buttons/Button';

const Patients = () => {
    return (
        <div className='page'>
            <h1>Our Patients</h1>

            <div className='welcome'>
                <p>Here is a list of our patients!
                </p>
            </div>

            <div className='patient-block'>
                    <table>
                        <th>
                            <tr className='patient-row flex justify-between'>
                                <img src='https://www.facebook.com/photo/?fbid=314228943392883&set=a.314228930059551&__tn__=%3C'/>
                                <div className='name-group'>
                                    <h2>W. Duvenhage</h2>
                                    <h3>Male</h3>
                                </div>
                                <h2>SAL23938439</h2>
                                <h2>Dr. Charlene Ferreira</h2>
                                <Button name="UPDATE"/>
                            </tr>
                        </th>

                    </table>
                </div>

        </div>
    );
};

export default Patients;