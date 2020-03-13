import cx from 'classnames';
import React from 'react';
import { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.formInputRef = React.createRef();
        this.onFormSubmitEvent = this.onFormSubmit.bind(this);
        this.addItemToListEvent = this.addItemToList.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    addItemToList() {
        const valueToAdd = String(this.formInputRef.current.value);
        if (!valueToAdd.length) return;
        this.formInputRef.current.value = null;
        this.setState({ list: [ ...this.state.list, {
                value: valueToAdd,
                isDone: false
            }]});
    }

    renderMessage() {
        const total = this.state.list.length;
        const remaining = this.state.list.filter(item => !item.isDone).length;
        return <span className={'task-counter'}>{`${remaining} remaining out of ${total} tasks`}</span>;
    }

    renderList() {
        if (!this.state.list.length) return null;
        return <ul>
            { this.state.list.map((item, idx) => this.renderItem(item, idx)) }
        </ul>
    }

    toggleItemStatus(idx) {
        const newList = [ ...this.state.list ]
        newList[idx].isDone = !newList[idx].isDone;
        this.setState({ list: newList });
    }

    renderItem(item, idx) {
        return (<li
            key={idx}
            className={cx({'is-done': item.isDone})}
            onClick={this.toggleItemStatus.bind(this, idx)}
        >
            {item.value}
        </li>);
    }

    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <form onSubmit={this.onFormSubmitEvent}>
                        <input type="text" ref={this.formInputRef}/>
                        <button onClick={this.addItemToListEvent}>Add</button>
                    </form>
                    { this.renderMessage() }
                    { this.renderList() }
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}
