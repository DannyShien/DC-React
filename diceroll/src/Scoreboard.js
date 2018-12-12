import React from 'react';
import ScoreDisplay from './ScoreDisplay';

const Scoreboard = (props) => {
    return (
        <div>
            <div className = 'scoreboard'>
                <h1>Player's Score</h1>
                <ScoreDisplay />
            </div>
        </div>
    );
}


export default Scoreboard;