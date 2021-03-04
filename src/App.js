import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Components/HomePage/HomePage';
import './css/GlobalStyles.css';

function App() {
    return (
        <Router>
            <HomePage path="/" />
        </Router>
    );
}

export default App;
