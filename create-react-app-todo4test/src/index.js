import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../src/components/Home'
import Navigation from '../src/components/Navigation'
import CounterSimpleClass from './components/counter/CounterSimpleClass'
import CounterSimpleFunction from './components/counter/CounterSimpleFunction'
import ToDoListSimpleClass from './components/todo-list/ToDoListSimpleClass'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/todo-list-simple-class">
                        <ToDoListSimpleClass />
                    </Route>
                    <Route path="/counter-simple-class">
                        <CounterSimpleClass />
                    </Route>
                    <Route path="/counter-simple-function">
                        <CounterSimpleFunction />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
