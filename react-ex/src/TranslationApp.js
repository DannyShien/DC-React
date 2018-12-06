import React, { Component } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

class TranslationApp extends Component {
    constructor(props) {
        super(props)
            this.state = {
                text: '',
                // inputText: []
            }
    }
    render() {
        return (
            <div>
                <h1>Walky Talky</h1>
                <InputBox
                    newText = {this.state.text}
                    handleChange = {this._updateText}
                />
                <OutputBox
                    newText = {this.state.text.toUpperCase()}
                />
            </div>
        );
    }

    _updateText = (text) => {
        console.log(text);
        this.setState ({
            text
        });
    }

}

export default TranslationApp;
