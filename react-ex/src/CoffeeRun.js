import React, { Component } from 'react';
import CoffeeForm from './CoffeeForm';
import CoffeeOrders from './CoffeeOrders';

class CoffeeRun extends Component {
    constructor(props) {
        super(props)
            this.state = {
                firstName: '',
                lastName: '',
                coffee: '', 
                size: '',
                coffeeOrders: []
            }
    }
    render() {
        return (
            <div className = 'coffeeApp'>
                <h1>Morning Brew</h1>
                <div className = 'content'>
                    <CoffeeForm 
                        FirstName = {this.state.firstName}
                        LastName = {this.state.lastName}
                        Coffee = {this.state.coffee}
                        Size = {this.state.size}
                        updateFirstName = {this._updateFirstName}
                        updateLastName = {this._updateLastName}
                        updateCoffee = {this._updateCoffee}
                        updateSize = {this._updateSize}
                        onSubmit = {this._onSubmit}
                        onReset = {this._onReset}
                    />

                    <CoffeeOrders 
                        coffeeOrders = {this.state.coffeeOrders}
                    />
                
                </div>
            </div>
        );
    }
    
    _updateFirstName = (inputFirstName) => {
        console.log(inputFirstName); 
        this.setState ({
            firstName: inputFirstName
        });
    }
    _updateLastName = (inputLastName) => {
        this.setState ({
            lastName: inputLastName
        });
    }
    _updateCoffee = (inputCoffee) => {
        this.setState ({
            coffee: inputCoffee
        });
    }
    _updateSize = (inputSize) => {
        this.setState ({
            size: inputSize
        });
    }

    _onSubmit = (event) => {
        this.setState ({
            coffeeOrder: [...this.state.coffeeOrders, {
            firstname: this.state.firstName, 
            lastName: this.state.lastName, 
            coffee: this.state.coffee, 
            size: this.state.size,
            }]
        }, () => {
            this._onReset();
        })
    }
    _onReset = () => {
        this.setState ({
            firstName: '',
            lastName: '', 
            coffee: '',
            size: '',
        })
    }



}



export default CoffeeRun;