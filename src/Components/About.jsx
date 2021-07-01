import React from 'react';
import Banner from './banner.PNG'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <br />
            <Container>
                <Row>
                    <Col>
                        <p>Founded in 2021 by 4 crackheads on Teams, Super Cinema provides the latest, biggest films at affordable prices. </p>
                        <p>Kevin sits daydreaming at his computer, thinking about Scott in those cute kittycat ears. It was last evening when Kevin brought those doggy biscuits and seductively ate them off his toes. He is brought to a rude awakening when he hears Scott scream "Kevin is a feeder". He reaches under the desk and grabs a pack of dog biscuits. It's feeding time...</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + Banner} alt="Banner" />;
                    </Col>
                </Row>
            </Container>
            <center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
        </div>
    );
}

export default About;