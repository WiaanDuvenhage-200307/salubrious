import React from 'react';
import Button from './Buttons/Button';

export default function Modal({closeModal}) {

   

  return (
    <div className='modal-bg'>
        <div className='modal'>
            <Button name="x" function={() => {closeModal(false)}} className="close-btn"/>
            <div className="modal__title">This is the modal heading</div>
            <div className="modal__body">
                <h3>This is the body text for the modal.</h3>
            </div>
            <div className="footer">
                <Button name="Cancel" function={() => {closeModal(false)}} className="secondary-btn"/>
                <Button name="Save" className="primary-btn"/>
            </div>
        </div>
    </div>
  )
}
