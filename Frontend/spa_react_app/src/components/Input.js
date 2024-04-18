import React, { Component } from 'react';
import './input.css'; // Import the CSS file

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label className="input-field">
                    <input type="text" value={this.state.youtubeLink} onChange={this.handleChange} className="input-field" placeholder="Enter YouTube link" />
                </label>
                <button type="submit" className="submit-button" style={{marginTop: '10px'}}>Generate</button>
            </form>
        );
    }
}

export default InputField;