import React, { Component } from 'react';
import Timestamp from './Timestamp';
import TranslationApp from './TranslationApp';
import CoffeeRun from './CoffeeRun';

import './App.css';



class App extends Component {
    render() {
        return (
            <div className="App">
                <Timestamp />
            
                <TranslationApp />

                <CoffeeRun />
            </div>
            
        );
    }                          


}

export default App;
