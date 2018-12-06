import React, { Component } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

import {
    toL33t, 
    toUpperCase
} from './Translations';

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
                    newText = {this.state.text}
                />
                <OutputBox
                    newText = {this.state.text}
                    transformFunction = {toUpperCase}
                />
                <OutputBox
                    newText = {this.state.text}
                    transformFunction = {toL33t}
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
