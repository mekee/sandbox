import React from 'react';
import Modal from '../Modal';
import ReactDOM from "react-dom";

const postOptions = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
};

class ToDoListSimpleClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoListItems: [],
            isModalOpen: false,
            activeItemIdx: null,
        };
        this.onFormSubmitEvent = this.onFormSubmit.bind(this);
        this.onCloseModalEvent = this.onCloseModal.bind(this);
        this.formInputRef = React.createRef();
    }

    async componentDidMount() {
        const fetchListFromServer = await fetch('http://localhost:1234/getListItems');
        const response = await fetchListFromServer.json();
        const { toDoListItems } = response;
        this.setState({ toDoListItems });
        return false;
    }

    async onRemoveListItem(index2delete) {
        try {
            const removeListItem = await fetch('http://localhost:1234/deleteIndex', {
                ...postOptions,
                body: JSON.stringify({ index2delete })
            });
            const response = await removeListItem.json();
            const { toDoListItems } = response;
            this.setState({ toDoListItems });
        } catch(error) {
            console.error(error);
        }
        return false;
    }

    async onFormSubmit(e) {
        e.preventDefault();
        try {
            const newValue = this.formInputRef.current.value;
            const addNewListItem = await fetch('http://localhost:1234/add2list', {
                ...postOptions,
                body: JSON.stringify({ newValue })
            });
            const response = await addNewListItem.json();
            const { toDoListItems } = response;
            this.formInputRef.current.value = null;
            this.setState({ toDoListItems });
        } catch(error) {
            console.error(error);
        }
        return false;
    }

    onSelectItem(activeItemIdx) {
        this.setState({ isModalOpen: true, activeItemIdx });
    }

    onCloseModal() {
        this.setState({ isModalOpen: false });
    }

    renderModal() {
        const { toDoListItems, isModalOpen, activeItemIdx } = this.state;
        let modalElement = document.getElementById('modal-container');
        if (!modalElement) {
            modalElement = document.createElement('div');
            modalElement.id = 'modal-container';
            document.body.append(modalElement);
        }
        if (isModalOpen) {
            ReactDOM.render(<Modal
                onCloseModal={this.onCloseModalEvent}
                textToDisplay={toDoListItems[activeItemIdx]}
            />, modalElement);
        } else {
            ReactDOM.render(null, modalElement);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isModalOpen !== this.state.isModalOpen) {
            this.renderModal();
        }
    }

    render() {
        const { toDoListItems } = this.state;
        return (<div>
            <ul>
                { toDoListItems.map((item, idx) => {
                    return (<li
                        key={idx}>
                        {item}
                        <button onClick={this.onRemoveListItem.bind(this, idx)}>-</button>
                        <button onClick={this.onSelectItem.bind(this, idx)}>modal</button>
                    </li>)
                }) }
            </ul>
            <form onSubmit={this.onFormSubmitEvent}>
                <input type="text" ref={this.formInputRef}/>
            </form>
        </div>)
    }
}

export default ToDoListSimpleClass;
