import React from 'react';

function Modal({ onCloseModal, textToDisplay }) {
    return (
        <div
            className="modal-active-wrapper"
            onClick={onCloseModal}
        >
            <div className="modal-container">
                <h3>{textToDisplay}</h3>
            </div>
        </div>
    );
}

export default Modal;
