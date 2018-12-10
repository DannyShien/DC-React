import React from 'react';

const WorkOutType = (props) => {
    const allWorkOuts = props.bodyPart;
    const routinetype = props.match.params.routinetype;
    const myRoutine = allWorkOuts[routinetype];
    return (
        <div>   
            <h2>
                {routinetype}
            </h2>
            <ul>
                {myRoutine.map((workout) => {
                    return <div>{workout}</div>
                })}
            </ul>
        </div>
    );
};

export default WorkOutType;