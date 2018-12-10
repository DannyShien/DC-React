import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router, // Watches for changes to URL
    Route,                   // Renders components based on the specific URL
    // Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Fitness from './Fitness';
import WorkOutType from './WorkOutType';


class App extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            getSwole: {
                'Chest': [
                    'Bench Press', 
                    'Cable Chest Flies', 
                    'Incline Press',
                    'Push-Ups'
                ],
                'Back': [
                    'Pull-Ups'
                ],
                'Shoulders': [
                    'Military Press'
                ],
                'Legs': [
                    'Dead Lifts'
                ]
            }
        };
    }

  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route path = '/' exact component = {Home} />
                <Route path = '/about' component = {About} />
                <Route path = '/fitness' render = {(props) => {
                    return <Fitness routineList = {Object.keys(this.state.getSwole)} {...props} />
                }} />
                <Route path = '/fitness/:routinetype' render = {(props) => {
                    return <WorkOutType bodyPart = {this.state.getSwole} {...props} />
                }} />
            </div>
        </Router>
    );
  }
}

export default App;
