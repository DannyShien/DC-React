import React from 'react';

function ScoreCard(props) {
    return (
        <div>
            <div>
                <h2>
                    Name: {props.name}
                        <br />
                    Score: {props.score}  
                </h2>
                <button onClick={() => props.handleClick(props.id)}>+</button>
                {/* <button onClick={() => props.handleClick(props.id)}>-</button> */}
            </div>
        </div>
    );
}


export default ScoreCard;