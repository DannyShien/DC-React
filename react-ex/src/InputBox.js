import React from 'react';

function InputBox(props) {
    return (
        <div>
            <input
            onSubmit = {props.onSubmit}
            onChange = {props.onChange}
            value = {props.text}
            placeholder = 'Text here'
            >
            
            </input>

            <button
            onClick = {props.handleClick}
            >Submit</button>
        </div>
    )
}

export default InputBox;