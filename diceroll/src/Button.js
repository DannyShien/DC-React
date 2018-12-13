import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button 
                className = 'btn'
                onClick = {() => {props.handleClick()}}
                // onChange = {props.handleChange}

                >::</button>
        </div>
    );
}

export default Button;