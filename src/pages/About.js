import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Skills from '../scenes/About/Skills';
import Bio from '../scenes/About/Bio';
import Photo from '../components/Photo';
import ContactIcons from '../scenes/About/ContactIcons'

import james from '../scenes/About/images/JamesLeeOp.png';

const About = () => {
    return (
        <div style={{ backgroundColor: '#F0EEF0' }} className="pt-4 pb-4 px-2 h-100 min-100">
            <Skills />
            <Container className="largeTopSpace whiteBG">
                <Row>
                    <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 8, order: 1}}>
                        <Bio />
                    </Col>
                    <Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 4, order: 2}} className="mb-4">
                        <Photo src={james} />
                    </Col>
                </Row>
            </Container>
            <ContactIcons />
        </div>
    );
};

export default About;
