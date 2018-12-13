import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Player1 from './Player1';
import Player2 from './Player2';




class DiceRollGame extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            P1score: 0,
            P2score: 0,
            p1DiceCount: 0,
            p2DiceCount: 0
        }
    }

    render() {
        return (
            <div className = 'Diceroll'>
                <h1>Dice Roll Game</h1>
                <Scoreboard
                    updateScore = {this._comparison}
                />
                <Player1 
                    p1DiceRoll = {this.state.p1DiceCount}
                    p1Dice = {this._P1Rolled}
                />
                <Player2 
                    p2DiceRoll = {this.state.p2DiceCount}
                    p2Dice = {this._P2Rolled}
                />
            </div>
        );
    }

    _P1Rolled = () => {
        console.log('P1 clicked')
        const min = 2; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        this.setState({
            p1DiceCount: random
        });
    }
    _P2Rolled = () => {
        console.log('P2 clicked')
        const min = 2; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        this.setState({
            p2DiceCount: random
        });
    }
    _comparison = () => {
        const P1Roll = this.state.p1DiceCount;
        const P2Roll = this.state.p2DiceCount;
        
        if(P1Roll > P2Roll) {
            const P1Point = this.state.P1score + 1;
            this.setState({
                P1score: P1Point
            })
            console.log('Player 1 gets a point.') 
        } else if(P1Roll < P2Roll)  {
            const P2Point = this.state.P2score + 1;
            this.setState({
                P2score: P2Point
            })
            console.log('Player 2 gets a point')
        } else {
            console.log('TIE GAME')
        }
    }


}



export default DiceRollGame;