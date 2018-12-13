import React from 'react';

const Scoreboard = (props) => {
    const newScoreP1 = props.updateScoreP1;
    const newScoreP2 = props.updateScoreP2;
        return (
            <div>
                <div className = 'scoreboard'>
                    <h1>Player's Score</h1>
                    <div>
                        <h3>Player 1: {newScoreP1} </h3>

                    </div>
                    <div>
                        <h3>Player 2: {newScoreP2} </h3>
                    </div>
                </div>
            </div>
        );
}


export default Scoreboard;