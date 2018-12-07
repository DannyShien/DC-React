import React from 'react';

function Button(props) {
    return (
        <div>
            <button
            className = 'btn' 
            onClick = {props.handleClick}
            >Get Timestamp</button>
        </div>
        
        )
}



export default Button;