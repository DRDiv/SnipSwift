import React, {Component} from 'react';

import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

import TypewriterEffect from "react-typewriter-effect";
import AOS from 'aos';

import userpic from '../assets/resources/user.png';

import Social from '../components/Social';

import '../assets/scss/home.scss';

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <Container className='homepage'>
                <Row>
                    <Col lg={7} className='order-2 order-sm-1'>
                        <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '5rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={100}
                                cursorColor="black"
                                text="Hi there, I'm SnipSwift"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={1600}
                                cursorColor="black"
                                text="Your one stop to summarize a youtube transcipt"
                                typeSpeed={40}
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

export default Home;