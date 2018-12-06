import React from 'react';

function DateList(props) {
    const dateArray = props.newDateItems.map((oneDate, i) => {
        return (
            <div key = {i}>
                {oneDate}
            </div>
        )    
    })
    return (
        <ul>
            {dateArray}
        </ul>
    )
}

// Modern, 'hipster-ish' way of writing a function conponent
// const DateList = (props) => {
//     return ();
// }



export default DateList;