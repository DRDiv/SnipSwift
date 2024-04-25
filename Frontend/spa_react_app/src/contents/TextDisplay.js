import React, {Component} from 'react';

import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

import TypewriterEffect from "react-typewriter-effect";
import AOS from 'aos';



import '../assets/scss/home.scss';

class TextDisplay extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        const { texts } = this.props;
        return (
            <Container className='homepage'>
                <Row>
                    <Col lg={11} className='order-2 order-sm-1'>
                   
                       
                    <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                            English
                        </div>
                       
                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                text={texts[0]}
                                cursorColor="black"
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                            Hindi
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text={texts[1]}
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                            Gujarati
                        </div>

                        <div className='typewriter3'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text={texts[2]}
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                            Braille
                        </div>

                        <div className='typewriter4'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text={""}
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    
                </Row>
            </Container>
        );
    }
}

export default TextDisplay;