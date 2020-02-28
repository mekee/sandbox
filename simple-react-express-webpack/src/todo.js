import React from 'react';
import ReactDOM from 'react-dom';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [1, 2, 3] };
        this.onItemClickEvent = this.onItemClick.bind(this);
    }

    async componentDidMount() {
        // const response = await fetch('http://localhost:3001/getListItems');
        // const jsonReponse = await response.json();
        // console.log(jsonReponse);
        console.log('mounted');
    }

    onItemClick(e) {
        console.log(e);
    }

    render() {
        return (<ul>
            { this.state.list.map((item, idx) => {
                return <li
                    onClick={this.onItemClickEvent}
                    key={idx}
                >
                    { item }
                </li>
            } ) }
        </ul>);
    }
}

ReactDOM.render(<ToDoApp/>, document.getElementById('todo-app-container'));
