import cx from 'classnames';
import React from 'react';
import { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 42 };
    }

    render() {
        return (
            <>
                <div>
                    <h2 className={cx('counter')}>{this.state.counter}</h2>
                    <button
                        onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}
                        className={cx('counter-button')}
                    >Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
