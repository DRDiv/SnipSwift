import React, { Component } from 'react';

import Skills from '../components/Skills';
import InputField from '../components/Input';

class Extractive extends Component {
    render () {
        const headingStyle = {
            textAlign: 'center'
        };

        return (
            <div className="container">
                <div style={headingStyle}>
                    <h1>Extractive Summary</h1>
                    <InputField/>
                </div>
            </div>
        );
    }
}

export default Extractive;