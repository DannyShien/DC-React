import React, { Component } from 'react';
import Button from './Button';

class Players extends Component {
    render() {
        return (
            <div>
                <div className = 'players-container'>
                    <div className = 'player'>
                        <h3>Player 1</h3>
                        <Button />
                        <div>Number rolled:</div>
                    </div>
                    {/* <div className = 'player'>
                        <Button />
                        <div>Number rolled:</div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Players;