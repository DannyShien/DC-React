import React from 'react';

function InputBox(props) {
    return (
        <input
            className = 'input'
            onChange = {(event) => {
                console.log(event.target.value);
                props.handleChange(event.target.value);
            }}
            value = {props.newText}
            placeholder = 'Text here'
        />
    )
}

export default InputBox;