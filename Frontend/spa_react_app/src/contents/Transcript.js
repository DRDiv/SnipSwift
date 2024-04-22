import React, { Component } from 'react';

import Skills from '../components/Skills';
import InputField from '../components/Input';

class Transcript extends Component {
    render () {
        const headingStyle = {
            textAlign: 'center'
        };

        return (
            <div className="container">
                <div style={headingStyle}>
                    <h1>Transcript</h1>
                    <InputField/>
                </div>
            </div>
        );
    }
}

export default Transcript;