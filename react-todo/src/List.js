import React from 'react';

const List = (props) => {
    return ( 
        <ul>
            {props.items.map((item, index) => {
                return (
                    <div key = {index}
                    onClick ={() => props.handleClick(index)}
                    
                    >
                        {item}
                    </div>
                );
            })} 
        </ul>
    );    
};


export default List;