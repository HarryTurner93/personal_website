import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

class RoutedApp extends React.Component {

    render() {
        return (
            <Router>
                <App/>
            </Router>
        )
    }
}

export default RoutedApp;
