import React, { Component } from 'react';
import InputBox from './InputBox';

class TranslationApp extends Component {
    constructor(props) {
        super(props)
            this.state = {
                text: '',
                inputText: []
            }
    }
    render() {
        return (
            <div>
                <h1>Walky Talky</h1>
                <InputBox
                text = {this.state.text}
                handleClick = {this._onSubmit}
                onChange = {(event) => this._onChange(event.target.value)}
                // onSubmit = {this._onSubmit}
                />
            </div>
        );
    }

    _onSubmit = () => {
        console.log('submitted')
        // const newText = this.state.text;
        this.setState({
            text: '',
            inputText: [...this.state.inputText, this.state.text]
        })
        console.log(this.state.text);
    };

    _onChange = (textInput) => {
        console.log(textInput);
        this.setState ({
            text : textInput
        }, () => {
            console.log('Receiving text');
        })
    };




}

export default TranslationApp;
