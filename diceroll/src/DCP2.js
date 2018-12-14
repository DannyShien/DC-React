import React from 'react';

const DCP2 = (props) => {
    const numRolled = props.P2Roll; 
        return (
            <div>
                <div className = 'dice-count'>
                    Number rolled: {numRolled} 
                </div>
            </div>
        )
}

export default DCP2;