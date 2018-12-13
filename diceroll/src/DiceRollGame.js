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
            p2DiceCount: 0,
            didP1Roll: false, 
            didP2Roll: false
        }
    }

    render() {
        return (
            <div className = 'Diceroll'>
                <h1>Dice Roll Game</h1>
                <Scoreboard
                    updateScoreP1 = {this.state.P1score}
                    updateScoreP2 = {this.state.P2score}
                />
                <Player1 
                    p1DiceRoll = {this.state.p1DiceCount}
                    p1Dice = {this._P1Rolled}
                    p1rolling = {this._p1AlreadyRolled}
                />
                <Player2 
                    p2DiceRoll = {this.state.p2DiceCount}
                    p2Dice = {this._P2Rolled}
                    p2rolling = {this._p2AlreadyRolled}
                />
            </div>
        );
    }

    _P1Rolled = () => {
        console.log('Player-1 clicked');
        const min = 2; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        console.log('Player-1 rolled')
        this.setState({
            p1DiceCount: random,
            didP1Roll: true
        }, this._setWinner);
    }
    _P2Rolled = () => {
        console.log('Player-2 clicked');
        const min = 2; 
        const max = 12;
        const random = Math.floor(Math.random() * (max-min) + min);
        console.log(random)
        console.log('Player-2 rolled')
        this.setState({
            p2DiceCount: random,
            didP2Roll: true
        }, this._setWinner);
    }

    _setWinner = () => {
        if(this.state.didP1Roll && this.state.didP2Roll) {
            console.log('Both rolled.');
            if (this.state.p1DiceCount < this.state.p2DiceCount) {
                console.log('Player 2 won!')
                this.setState({
                    P2score: this.state.P2score + 1,
                    didP1Roll: false,
                    didP2Roll: false
                })
            } else {
                console.log('Player 1 won!')
                this.setState({
                    P1score: this.state.P1score + 1,
                    didP1Roll: false,
                    didP2Roll: false
                })
            }
        }
    }
    // _p1AlreadyRolled = () => {
    //     console.log('Player-1 rolled')
    //     this.setState({
    //         didP1Roll: true
    //     });
    // }
    // _p2AlreadyRolled = () => {
    //     console.log('Player-2 rolled');
    //     this.setState({
    //         didP2Roll: true
    //     });
    // }


    // _comparison = () => {
    //     const P1Roll = this.state.p1DiceCount;
    //     const P2Roll = this.state.p2DiceCount;
        
    //     if(P1Roll > P2Roll) {
    //         const P1Point = this.state.P1score + 1;
    //         console.log(`Player1 has: ${P1Point}`) 
    //         return P1Roll
    //     } else if(P1Roll < P2Roll)  {
    //         const P2Point = this.state.P2score + 1;
    //         console.log(`Player2 has : ${P2Point}`)
    //     } else {
    //         console.log('TIE GAME')
    //     }
    // }


}



export default DiceRollGame;