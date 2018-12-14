import React from 'react';
import Button from './Button';
import DCP2 from './DCP2';


const Player2 = (props) => {
    return (
        <div className = 'player-two'>
            <h3>Player 2</h3>
            <Button 
                handleClick = {props.p2Dice}
            />
            <DCP2 
                P2Roll = {props.p2DiceRoll}
            />
        </div>
    )
}

export default Player2;