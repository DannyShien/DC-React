import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button 
                className = 'btn'
                onClick = {() => {props.handleClick()}}

                >::</button>
        </div>
    );
}

export default Button;