import React from 'react';
import Button from './Buttons/Button';

const Table = (props) => {
    return (
        <table className='table'>
            <thead>
                <th>PROFILE IMAGE</th>
                <th>{props.name}</th>
                <th>{props.number}</th>
                <th>UPCOMING <br /> APPOINTMENT</th>
            </thead>
            <tbody>
                <tr>
                    <td className='table__img'><img src='https://via.placeholder.com/50'/></td>
                    <td><span className='pname'>W. Duvenhage</span><br/> Male</td>
                    <td>SAL2348478</td>
                    <td><span className='pname'>09/05/2022</span><br />{props.doctorName}</td>
                    <td className='table__btn'><Button className="update-btn" name="UPDATE"/></td> 
                </tr>

                <tr>
                    <td><img src='https://via.placeholder.com/50'/></td>
                    <td><span className='pname'>W. Duvenhage</span><br/> Male</td>
                    <td>SAL2348478</td>
                    <td><span className='pname'>09/05/2022</span><br />{props.doctorName}</td>
                    <td className='table__btn'><Button className="update-btn" name="UPDATE"/></td>
                </tr>

                <tr>
                    <td><img src='https://via.placeholder.com/50'/></td>
                    <td><span className='pname'>W. Duvenhage</span><br/> Male</td>
                    <td>SAL2348478</td>
                    <td><span className='pname'>09/05/2022</span><br />{props.doctorName}</td>
                    <td className='table__btn'><Button className="update-btn" name="UPDATE"/></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;