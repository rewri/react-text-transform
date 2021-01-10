import React, { Component } from 'react'

export default class UserInput extends Component {

    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeText(newText);
    }

    render() {

        const { userInput } = this.props;

        return (
            <div>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <p>Digite um texto:</p>
                            <input placeholder="Aprendendo react" value={userInput} onChange={this.handleInputChange} type="text" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
