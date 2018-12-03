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
              </div>
          );
      });
      return cards;
  }
}

export default App;
