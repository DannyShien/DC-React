import React, { Component } from 'react';
import Timestamp from './Timestamp';
import TranslationApp from './TranslationApp';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Timestamp />
            
                <TranslationApp />
            </div>
            
        );
    }                          


}

export default App;
