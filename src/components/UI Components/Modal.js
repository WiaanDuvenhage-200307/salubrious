import React from 'react';
import Button from './Buttons/Button';

const Modal = ({openModal,props}) => {
  return (
    <div className='modal-bg'>
        <div className='modal'>
            <Button name="x" function={() => openModal(false)} className="close-btn"/>
            <div className="modal__title">Heading</div>
            <div className="modal__body">
                <h3>Body</h3>
            </div>
            <div className="footer">
                <Button name="Cancel" function={() => openModal(false)} className="secondary-btn"/>
                <Button name="Save" className="primary-btn"/>
            </div>
        </div>
    </div>
  )
}

export default Modal;
