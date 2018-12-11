import React from 'react';
import { Link } from 'react-router-dom';

const Fitness = (props) => {

    const bodyExercises = props.bodySection.map(workOutType => {
        return (
            <div>
                <Link to = {`/fitness/${workOutType}`}>{workOutType}</Link>
            </div>
        );
    });

    return (
        <div>
            <h1>Fitness</h1>
            <ul>
                {bodyExercises}
            </ul>
        </div>
    );
};


export default Fitness;