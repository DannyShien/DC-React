import React from 'react';

const DCP1 = (props) => {
    const numRolled = props.P1Roll; 
        return (
            <div>
                <div className = 'dice-count'>
                    Number rolled: {numRolled} 
                </div>
            </div>
        )
}

export default DCP1;