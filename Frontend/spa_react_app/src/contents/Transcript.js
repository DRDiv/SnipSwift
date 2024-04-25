import React, { Component } from 'react';
import TypewriterEffect from "react-typewriter-effect";

import InputField from '../components/Input';

class Transcript extends Component {
    render () {
        

        return (
            <div className="container">
               
                <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2',textAlign: 'center'}
                                }
                                startDelay={100}
                                cursorColor="black"
                                text="Transcript Generator"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                    <InputField/>
                </div>
          
        );
    }
}

export default Transcript;