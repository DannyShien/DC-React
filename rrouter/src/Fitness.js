import React from 'react';
import { Link } from 'react-router-dom';

const Fitness = (props) => {

    const workOuts = props.routineList.map(routinetype => {
        return (
            <div>
                <Link to = {`/fitness/${routinetype}`}>{routinetype}</Link>
            </div>
        );
    });

    return (
        <div>
            <h1>Fitness</h1>
            <ul>
                {workOuts}
            </ul>
        </div>
    );
};


export default Fitness;