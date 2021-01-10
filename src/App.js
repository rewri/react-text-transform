import React, { Component } from 'react';
import UserInput from './components/TextTransformer/UserInput';
import TransformedInputs from './components/TextTransformer/TransformedInputs';
import { reverse, toNumeric, toCSV, toSlug, onlyVowels, onlyConsonants, toVar } from './helpers/TextTransformer';

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
            reversedText      : reverse(newText),
            numericText       : toNumeric(newText),
            csvText           : toCSV(newText),
            slugText          : toSlug(newText),
            onlyVowelsText    : onlyVowels(newText),
            onlyConsonantsText: onlyConsonants(newText),
            toVarText         : toVar(newText),
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
