import React from 'react';

const Scoreboard = (props) => {
    const newScoreP1 = props.updateScoreP1;
    const newScoreP2 = props.updateScoreP2;
        return (
            <div className = 'scoreboard'>
                <div className = 'score-title'>
                    <h1>Player's Score</h1>
                </div>
                <div className = 'players-score'>
                    <div className = 'playerOne-score'>
                        <h3>Player 1: {newScoreP1} </h3>
                    </div>
                    <div className = 'playerTwo-score'>
                        <h3>Player 2: {newScoreP2} </h3>
                    </div>
                </div>
            </div>
        );
}


export default Scoreboard;