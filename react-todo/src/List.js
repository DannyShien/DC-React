import React from 'react';

const List = (props) => {
    return ( 
        <ul>
           {props.items.map((item, index) => {
                return <div key = {index}>{item}</div>
           })} 
        </ul>
    );    
};


export default List;