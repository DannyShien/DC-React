import React from 'react';

const CoffeeForm = (props) => {
    return (
        <div className = 'formContainer'>
            <form className = 'form' onSubmit = {props.onSubmit}>
                <label className = 'formLabel'>
                    <input
                        className = 'formInput'
                        onChange = {(event) => {
                            // console.log(event.target.value);
                            props.updateFirstName(event.target.value);
                        }}
                        value = {props.FirstName}
                        placeholder = 'First Name'
                    />
                </label>
                <label className = 'formLabel'>
                    <input 
                        className = 'formInput'
                        onChange = {(event) => {
                            props.updateLastName(event.target.value);
                        }}
                        value = {props.LastName}
                        placeholder = 'Last Name'
                    />
                </label>
                <label className = 'formLabel'>
                    <input 
                        className = 'formInput'
                        onChange = {(event) => {
                            props.updateCoffee(event.target.value);
                        }}
                        value = {props.Coffee}
                        placeholder = 'Coffee'
                    />
                </label>
                <label className = 'formLabel'>
                    <input 
                        className = 'formInput'
                        onChange = {(event) => {
                            props.updateSize(event.target.value);
                        }}
                        value = {props.Size}
                        placeholder = 'Size'
                    />
                </label>

                <button
                    className = 'button'
                    type = 'submit'
                >Submit</button>        

                <button
                    className = 'button'
                    onClick = {props.onReset}
                    type = 'reset'
                >Reset</button>
            </form>
        </div>
    )

}

export default CoffeeForm;