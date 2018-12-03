import React, { Component } from 'react';
import ScoreCard from './ScoreCard'
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
                <ScoreCard
                    key = {score.id} 
                    id = {score.id}
                    name = {score.name}
                    score = {score.score}
                    // handleClick = {this._incrementScoreById.bind(this)}
                    handleClick = {id => this._incrementScoreById(id)}
                    // handleClick = {this._decrementScoreById.bind(this)}
                />
                
            );
        });
        return cards;
    }


    // Version 1: .map, manaully constructing replacement
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

    // Version 2: .map, using shorthand to copy values out of the original
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

    // Version 3: .map, obeject copy + ternary + implicit return
    // using shorthand to copy values out of the origianl score
    _incrementScoreById(id) {
        // find the player in this state.scores
        // increment their score
        const newScores = this.state.scores.map(bob => {
            return bob.id !== id ? bob: {...bob, score: bob.score + 1};
        });
        // and call this.setState
        this.setState({
            scores: newScores
        });
    }

    _decrementScoreById(id) {
        const newScores = this.state.scores.map(score => {
            if(score.id !== id) {
                return score
            } else {
                return {
                    id: score.id,
                    name: score.name,
                    score: score.score - 1
                }
            }
        })
        this.setState({
            scores: newScores
        })
    }    
}

export default App;
