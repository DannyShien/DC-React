import React from 'react';

function Button(props) {
    return (
        <div>

            <button 
            onClick = {props.handleClick}
            >Timestamp</button>
        </div>
        
        )
}



export default Button;