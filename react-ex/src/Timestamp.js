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
            <div className = 'timestamp'>
                <h1 className = 'title'>Timestamp</h1>
                <Button 
                    handleClick = {this._getNewTime} 
                />
                <div className = 'listContainer'>
                    <DateList
                        newDateItems = {this.state.date}
                    />
                </div>
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