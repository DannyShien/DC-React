import React, { Component } from 'react';


import Scoreboard from './Scoreboard';
import Players from './Players';
// import Button from './Button';


class DiceRollGame extends Component {
    render() {
        return (
            <div>
                <div className = 'Diceroll'>
                    <h1>Dice Roll Game</h1>
                    <Scoreboard />
                    <Players />
                </div>
            </div>
        );
    }
}

export default DiceRollGame;