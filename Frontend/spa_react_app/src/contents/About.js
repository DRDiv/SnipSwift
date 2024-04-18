import React, { Component } from 'react';

import Skills from '../components/Skills';
import InputField from '../components/Input';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>Get Summary</h1>
                <div>
                    <InputField/>
                </div>
                
            </div>
        );
    }
}

export default About;