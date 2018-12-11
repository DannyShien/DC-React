import React, { Component} from 'react';

import {
    BrowserRouter as Router, // Watches for changes to URL
    Route,                   // Renders components based on the specific URL
    // Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Exercises from './Exercises';
import WorkOuts from './WorkOuts';


class Fitness extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            getSwole: {
                'Chest': [
                    'Bench Press', 
                    'Cable Chest Flys', 
                    'Incline Press',
                    'Push-Ups'
                ],
                'Back': [
                    'Pull-Ups',
                    'Seated Rows', 
                    'Lat Pull-Downs',
                    'Reverse Flys'
                ],
                'Shoulders': [
                    'Military Press',
                    'Side Raises', 
                    'Seated Incline Front Raises',
                    'Single Arm Power Clean'
                ],
                'Legs': [
                    'Dead Lifts',
                    'Leg Press', 
                    'Lunges', 
                    'Calve Raises'
                ]
            },
            workoutDays: {
                'Mondays': {
                    'Body': [
                        'Chest', 
                        'Tricepts', 
                        'Abs'
                    ],
                    'typeOfWorkout': [
                        'Bench Press', 
                        'Dips',
                        'Cable Crunch'
                    ]
                },
                'Wednesdays': {
                    'Body': [
                        'Back', 
                        'Bicepts', 
                        'Abs'
                    ],
                    'typeOfWorkout': [
                        'Pull-ups', 
                        'Bicept Curls',
                        'Sit Ups'
                    ]
                },
                'Fridays': {
                    'Body': [
                        'Shoulders', 
                        'Tricepts', 
                        'Abs'
                    ],
                    'typeOfWorkout': [
                        'Military Press', 
                        'Tricept Pulldown', 
                        'Hanging Leg Raises'
                    ]
                },
                'Sundays': {
                    'Body': [
                        'Legs', 
                        'Bicepts', 
                        'Abs'
                    ],
                    'typeOfWorkout': [
                        'Squats', 
                        'More Curls', 
                        'Planks'
                    ]
                }
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
                        return <Exercises bodySection = {Object.keys(this.state.getSwole)} {...props} />
                    }} />
                    <Route path = '/fitness/:workOutType' render = {(props) => {
                        return <WorkOuts bodyPart = {this.state.getSwole} {...props} />
                    }} />
                    
                </div>
            </Router>
        );
    }
}


export default Fitness;