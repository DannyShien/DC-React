import React from 'react';

function InputBox(props) {
    return (
        <input
            onChange = {(event) => {
                props.handleChange(event.target.value);
            }}
            value = {props.newText}
            placeholder = 'Text here'
        />
    )
}

export default InputBox;