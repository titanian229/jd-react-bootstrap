import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo from '../components/Photo';

import jamesAndMouse from '../scenes/Contact/images/jamesAndMouse.jpg';

const Contact = () => {
    return (
        <div className="darkBG min-100 pt-4">
            <Container>
                <h1>Contact me</h1>
                <Row className=" d-flex mt-4 flex-row align-items-center">
                    <Col xs={12} sm={6} className="mb-4">
                        <Photo src={jamesAndMouse} alt="James Lee" />
                    </Col>
                    <Col xs={12} sm={6} className="d-flex flex-column align-items-center">
                        <div>
                            <p>
                                You can reach me at <a href="mailto:james@jamestlee.ca">james@jamestlee.ca</a>
                            </p>
                            <p>
                                Find me on <a href="https://www.linkedin.com/in/jamestlee221/">LinkedIn</a>
                            </p>
                            <p>
                                See my work on <a href="https://github.com/titanian229">GitHub</a>
                            </p>
                            <p>
                                Download my{' '}
                                <a href="./images/JamesLeeResume.pdf" download>
                                    resume
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
