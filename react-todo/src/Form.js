import React from 'react';

function Form(props) {
    return (
        <form onSubmit = {props.onSubmit}>
            <input value =  {props.term} 
            onChange = {props.onChange}
            placeholder = 'Enter Task' 
            />
            <button type = 'submit'>add</button>
        </form>
    )
}

export default Form;