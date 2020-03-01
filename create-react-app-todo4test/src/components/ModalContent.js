import React from 'react';

function ModalContent({ onCloseModal, textToDisplay }) {
    return (
        <div
            className="modal-active-wrapper"
            onClick={onCloseModal}
        >
            <div
                className="modal-container"
                onClick={(e) => { e.preventDefault() }}
            >
                <h3>{textToDisplay}</h3>
            </div>
        </div>
    );
}

export default ModalContent;
