import React from 'react';

const WorkOuts = (props) => {
    const allWorkOuts = props.bodyPart;
    const workOutType = props.match.params.workOutType;
    const myRoutine = allWorkOuts[workOutType];
    return (
        <div>   
            <h2>
                {workOutType}
            </h2>
            <ul>
                {myRoutine.map((workout) => {
                    return <div>{workout}</div>
                })}
            </ul>
        </div>
    );
};

export default WorkOuts;