import React, { Component } from 'react';
import Button from './Button';
import DCP1 from './DCP1';
import DCP2 from './DCP2';


class Players extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            scores: 0,
            P1roll: 0,
            P2roll: 0
        }
    }

    render() {
        return (
            <div className = 'players-container'>
                <div className = 'player'>
                    <h3>Player 1</h3>
                    <Button
                        handleClick = {this._P1Rolled}
                    />
                    <DCP1 
                        P1Roll = {this.state.P1roll}
                    />
                </div>
                <div className = 'player'>
                    <h3>Player 2</h3>
                    <Button 
                        handleClick = {this._P2Rolled}
                    />
                    <DCP2
                        P2Roll = {this.state.P2roll}
                    />
                </div>
            </div>
        );
    }

    _P1Rolled = () => {
        console.log('clicked')
        const min = 1; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        this.setState({
            P1roll: random
        });
    }
    _P2Rolled = () => {
        console.log('clicked')
        const min = 1; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        this.setState({
            P2roll: random
        });
    }
    
    _incrementScore = (count) => {
        console.log('count')
        const newScore = this.state.scores + 1
        this.setState({
            scores: newScore
        });
    }
}

export default Players;