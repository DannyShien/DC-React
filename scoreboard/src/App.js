import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        //Set up state
        this.state = {
            scores: [
                {
                    id: 1, 
                    name: 'ahjumah', 
                    score: 1001
                },
                {
                    id: 2, 
                    name: 'ahjassi', 
                    score: 20
                },
                {
                    id: 3, 
                    name: 'stinkface', 
                    score: 500
                } 
            ]
        }
    }

    render() {
      return (
        <div className="App">
            <h1>Scoreboard App</h1>
                <div className='score-container'> 
                    {this._scoresAsCards()}
                </div>
              </div>
        );
    }

    _scoresAsCards() {
        const cards = this.state.scores.map(score => {
            return (
                <div key= {score.id}>
                    <h2>
                        Name: {score.name}
                            <br />
                        Score: {score.score}  
                    </h2>
                    <button onClick={() => this._incrementScoreById(score.id)}>+</button>
                </div>
            );
        });
        return cards;
    }


    // Version 1 .map, manaully constructing replacement
    _incrementScoreById(id) {
        // console.log('Adding a score')
        // find the player in this.state.scores
        // increment their score
        const newScores = this.state.scores.map(score => {
            if(score.id !== id) {
                return score
            } else {
                return {
                    id: score.id, 
                    name: score.name, 
                    score: score.score + 1
                }
            }
        })
        // and call this.setState
        this.setState({
            scores: newScores
        })
    }

    _incrementScoreById(id) {
        // find the player in this.state.scores
        // increment their score
        const newScores = this.state.scores.map(bruce => {
            if(bruce.id !== id) {
                return bruce
            } else {
                return {
                    ...bruce,
                    score: bruce.score + 1
                };
            }
        });
        // and call this.setScore
        this.setState({
            scores: newScores
        });
    }
}

export default App;
