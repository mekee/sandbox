import React from 'react';

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
        this.state = { toDoListItems: [] };
        this.onFormSubmitEvent = this.onFormSubmit.bind(this);
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
        console.log(index2delete)
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

    render() {
        const { toDoListItems } = this.state;
        return (<div>
            <ul>
                { toDoListItems.map((item, idx) => <li key={idx}>{item} <button onClick={this.onRemoveListItem.bind(this, idx)}>-</button></li>) }
            </ul>
            <form onSubmit={this.onFormSubmitEvent}>
                <input type="text" ref={this.formInputRef}/>
            </form>
        </div>)
    }
}

export default ToDoListSimpleClass;
