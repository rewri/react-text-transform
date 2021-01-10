import React, { Component } from 'react'

export default class TransformedInputs extends Component {
    render() {

        const { reversedText, numericText, csvText, slugText, onlyVowelsText, onlyConsonantsText, toVarText } = this.props;

        return (
            <div>
                <div className="row">
                    <h5 className="center col s12">Transformações</h5>
                    <div className="row">
                        
                        <div className="input-field col s12">
                            <p>Texto invertido:</p>
                            <input placeholder="Texto invertido" type="text" readOnly value={reversedText} />
                        </div>

                        <div className="input-field col s12">
                            <p>Texto numérico:</p>
                            <input placeholder="Texto numérico" type="text" readOnly value={numericText} />
                        </div>     

                        <div className="input-field col s12">
                            <p>CSV:</p>
                            <input placeholder="CSV" type="text" readOnly value={csvText} />
                        </div>  

                        <div className="input-field col s12">
                            <p>Slug:</p>
                            <input placeholder="Slug" type="text" readOnly value={slugText} />
                        </div>     

                        <div className="input-field col s12">
                            <p>Somente vogais:</p>
                            <input placeholder="Somente vogais" type="text" readOnly value={onlyVowelsText} />
                        </div>  

                        <div className="input-field col s12">
                            <p>Somente consoantes:</p>
                            <input placeholder="Somente consoantes" type="text" readOnly value={onlyConsonantsText} />
                        </div>  

                        <div className="input-field col s12">
                            <p>Variável:</p>
                            <input placeholder="Variável" type="text" readOnly value={toVarText} />
                        </div>                                                                                          

                    </div>
                </div>
            </div>
        )
    }
}
