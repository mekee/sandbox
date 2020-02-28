import React, { useState, useEffect } from 'react';

function CounterSimpleFunction() {
    const [ counter, setCounter ] = useState(0);
    useEffect( () => {
        async function getRandomCounterValue() {
            const getCountervalue = await fetch('http://localhost:1234/randomCounterValue');
            const jsonBody = await getCountervalue.json();
            setCounter(jsonBody.counter);
        }
        if (!counter) {
            getRandomCounterValue();
        }
    });
    return (<div>
        <h3>Counter test</h3>
        <span><i>Increment decrement the counter</i></span>
        <h4><i>Current value: </i>{counter}</h4>
        <h4> </h4>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>)
}

export default CounterSimpleFunction;
