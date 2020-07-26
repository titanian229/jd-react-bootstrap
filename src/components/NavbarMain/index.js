import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import React from 'react';

const NavbarMain = (props) => {
    return (
        <Navbar expand="sm">
            <Navbar.Brand href="/">JTL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" activeKey={props.location.pathname}>
                    <Nav.Item>
                        <Nav.Link href="/">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMain;
