import React from 'react';
import Button from './Button';
import DCP1 from './DCP1';


const Player1 = (props) => {
    return (
        <div className = 'player-one'>
            <h3>Player 1</h3>
            <Button 
                handleClick = {props.p1Dice}
            />
            <DCP1 
                P1Roll = {props.p1DiceRoll}
            />
        </div>
    )
}

export default Player1;

