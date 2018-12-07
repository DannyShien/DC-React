import React from 'react';

const CoffeeForm =(props) => {
    return (
        <div className = 'formContainer'>
            <form className = 'form'>
                <label className = 'formLabel'>
                    <input
                        className = 'formInput'
                        // value = 
                        placeholder = 'First Name'
                        />
                </label>
                <label className = 'formLabel'>
                    <input 
                    className = 'formInput'
                    // value = 
                    placeholder = 'Last Name'
                    />
                </label>
                <label className = 'formLabel'>
                    <input 
                    className = 'formInput'
                    // value = 
                    placeholder = 'Coffee'
                    />
                </label>
                <label className = 'formLabel'>
                    <input 
                    className = 'formInput'
                    // value = 
                    placeholder = 'Size'
                    />
                </label>
            </form>
        </div>
    )

}

export default CoffeeForm;