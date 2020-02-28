import React from 'react';

class CounterSimpleClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 77 };
        this.incrementCounterEvent = this.incrementCounter.bind(this);
        this.decrementCounterEvent = this.decrementCounter.bind(this);
    }

    async componentDidMount() {
        const getCountervalue = await fetch('http://localhost:1234/randomCounterValue');
        const jsonBody = await getCountervalue.json();
        this.setState({ counter: jsonBody.counter });
    }

    incrementCounter(counter) {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCounter(counter) {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        const { counter } = this.state;
        return (<div>
            <h3>Counter test</h3>
            <span><i>Increment decrement the counter</i></span>
            <h4><i>Current value: </i>{counter}</h4>
            <h4> </h4>
            <button onClick={this.incrementCounterEvent}>+1</button>
            <button onClick={this.decrementCounterEvent}>-1</button>
        </div>)
    }
}

export default CounterSimpleClass;
