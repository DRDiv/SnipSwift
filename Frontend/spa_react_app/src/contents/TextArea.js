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
                    <Col lg={11} className='order-2 order-sm-1'>
                    <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '4rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={100}
                                cursorColor="black"
                                text="Extractive Summary"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>
                        <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={1400}
                                cursorColor="black"
                                text="English"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={1400}
                                cursorColor="black"
                                text="Hindi"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                typeSpeed={25}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={1400}
                                cursorColor="black"
                                text="Braille"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={2000}
                                cursorColor="black"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?                                "
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

export default Home;