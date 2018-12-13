import React from 'react';

const Scoreboard = (props) => {
    const newScore = props.updateScore;
        return (
            <div>
                <div className = 'scoreboard'>
                    <h1>Player's Score</h1>
                    <div>
                        <h3>Player 1: {newScore}</h3>
                        
                    </div>
                    <h3>Player 2: {newScore}</h3>
                </div>
            </div>
        );
}


export default Scoreboard;