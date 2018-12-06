import React from 'react';

function DateList(props) {
    const dateArray = props.newDateItems.map((oneDate, i) => {
        return (
            <li key = {i}>
                {oneDate}
            </li>
        )    
    })
    return (
        <ul>
            {dateArray}
        </ul>
    )
}




export default DateList;