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
                <h1>Timestamp</h1>
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
        const currentDate = new Date().toLocaleString();
        // const humanTime = currentTime.toString()
        // console.log(currentTime);
        this.setState({ 
            date: [...this.state.date, currentDate]    
        })
        console.log(this.state.date)
    };
}

export default Timestamp;