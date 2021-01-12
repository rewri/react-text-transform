import React, { Component } from 'react';
import UserInput from './components/TextTransformer/UserInput';
import TransformedInputs from './components/TextTransformer/TransformedInputs';
import * as textTransformer from './helpers/TextTransformer';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            userInput         : '',
            reversedText      : '',
            numericText       : '',
            csvText           : '',
            slugText          : '',
            onlyVowelsText    : '',
            onlyConsonantsText: '',
            toVarText         : '',
        };
    }

    handleChangeText = (newText) => {
        
        this.setState({
            userInput         : newText,
            reversedText      : textTransformer.reverse(newText),
            numericText       : textTransformer.toNumeric(newText),
            csvText           : textTransformer.toCSV(newText),
            slugText          : textTransformer.toSlug(newText),
            onlyVowelsText    : textTransformer.onlyVowels(newText),
            onlyConsonantsText: textTransformer.onlyConsonants(newText),
            toVarText         : textTransformer.toVar(newText),
        });

    }

    render() {

        const { userInput, reversedText, numericText, csvText, slugText, onlyVowelsText, onlyConsonantsText, toVarText } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <h3 className="center col s12">react-text-transform</h3>
                    <UserInput 
                        userInput={userInput} 
                        onChangeText={this.handleChangeText} 
                    />
                    <TransformedInputs 
                        reversedText={reversedText} 
                        numericText={numericText} 
                        csvText={csvText} 
                        slugText={slugText}
                        onlyVowelsText={onlyVowelsText}
                        onlyConsonantsText={onlyConsonantsText}
                        toVarText={toVarText} 
                    />
                </div>
            </div>
        );
    }
}
