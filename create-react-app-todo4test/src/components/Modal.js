import React from 'react';
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

let modalContainer = undefined;

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        if (modalContainer) {
            ReactDOM.render((props.isModalOpen) ? <ModalContent { ...props } /> : null, modalContainer)
        }
        return false;
    }

    componentDidMount() {
        if (!modalContainer) {
            modalContainer = document.createElement('div');
            modalContainer.id = 'modal-conatiner';
            document.body.append(modalContainer);
        }
    }

    componentWillUnmount() {
        if (modalContainer) {
            ReactDOM.unmountComponentAtNode(modalContainer);
            document.body.removeChild(modalContainer)
        }
    }

    render() {
        return <script/>
    }
}

export default Modal;
