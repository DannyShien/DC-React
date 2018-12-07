import React from 'react';

const OutputBox = (props) => {
    let textToDisplay = props.newText;
    if (props.transformFunction) {
        textToDisplay = props.transformFunction(props.newText);
    }

    return (
        <div className = 'output-boxContainer'>
            <h1></h1>
            <div className='output-box'>

                {textToDisplay}
            </div>        
        </div>
    ); 
};

export default OutputBox;





    
