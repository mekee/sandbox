import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter-simple-class">Counter(class) simple</Link>
                </li>
                <li>
                    <Link to="/counter-simple-function">Counter(function) simple</Link>
                </li>
                <li>
                    <Link to="/todo-list-simple-class">To-Do list simple with class</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
