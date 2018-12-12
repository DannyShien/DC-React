import React from 'react';
import { Link } from 'react-router-dom';

const Exercises = (props) => {

    const bodyExercises = props.bodySection.map(workOutType => {
        return (
            <div>
                <Link to = {`/fitness/${workOutType}`}>{workOutType}</Link>
            </div>
        );
    });

    return (
        <div>
            <h1>Exercises</h1>
            <ul>
                {bodyExercises}
            </ul>
        </div>
    );
};


export default Exercises;