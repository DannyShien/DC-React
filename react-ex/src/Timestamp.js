import React, { Component } from 'react';
import DateList from './DateList';
import Button from './Button';


class Timestamp extends Component {
    constructor(props) {
        super(props)
            this.state = {
                date: []
            }
    }

    render() {
        return (
            <div className="App">
                <h1>React Exercise: Small</h1>
                <Button 
                handleClick = {this._getNewTime} 
                />

                <DateList 
                newDateItems = {this.state.date}
                />

            </div>
        );
    }

    _getNewTime = () => {
        console.log('click');
        const currentTime = Date.now();
        // const humanTime = currentTime.toString()
        // console.log(currentTime);
        this.setState({ 
            date: [...this.state.date, currentTime]    
        })
        console.log(this.state.date)
    };
}

export default Timestamp;