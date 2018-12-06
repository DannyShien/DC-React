import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    componentDidMount() {
        // Making an Ajax call
        console.log('about to fetch');
        fetch('/make')
            .then(r => r.json())
            .then(makeArray => {
                console.log(makeArray);
                // console.table(makeArray);
                this.setState({
                    items: makeArray
                })
            }
    }

    render () {
        return (
            <div>
                <h1>React Todo App</h1>
                <Form 
                    onSubmit = {this._onSubmit}
                    term = {this.state.term}
                    onChange = {(event) => this._onChange(event.target.value)}
                    />
                <div>
                    <List 
                    items = {this.state.items} 
                    handleClick = {this._deleteTodo}
                    />
                </div>
            </div>
        );
    }

    _onChange = (userInput) => {
        console.log(userInput);
        this.setState ({ 
            term: userInput
        }, () => {
            console.log('User is typing');
        });
    };

    _onSubmit = (event) => {
        // puts on the brakes
        event.preventDefault();
        // console.log('submitted');
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]

        })
    }

    _deleteTodo = (indexToDelete) => {
    // _deleteTodo = (idToDelete) => {

        // this.setState({
        //     items: this.state.items.filter(items => items.id !== idToDelete)
        // })

        let itemToKeep = [];
        this.state.items.forEach((item,index) => {
            if(index  === indexToDelete) {
                console.log(`${index} index is deleted`);
            } else {
                console.log(`${index} index is kept`);
                itemToKeep.push(item);
            }
        });
        this.state.item = itemToKeep;
        this.setState({
            items: itemToKeep
        })
    }





}


export default TodoList;