import React, { Component } from 'react';
// import CoffeeForm from './CoffeeForm';
// import CoffeeOrders from './CoffeeOrders';

class CoffeeRun extends Component {
    constructor(props) {
        super(props)
            this.state = {
                firstName: '',
                lastName: '',
                coffee: '', 
                size: ''
            }
    }
    render() {
        return (
            <div className = 'coffeeApp'>
                <h1>Morning Brew</h1>
                <div className = 'content'>
                    <CoffeeForm 
                        newFirstName = {this.state.firstName}
                        newLastName = {this.state.lastName}
                        newCoffee = {this.state.coffee}
                        newSize = {this.state.size}
                    />

                    {/* <CoffeeOrders /> */}
                
                </div>
            </div>
        );
    }
}





export default CoffeeRun;