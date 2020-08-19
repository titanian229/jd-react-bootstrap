import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.scss';
import React from 'react';

// import jtlLogo from './JTL CombinedLogo.png';
import jtlLogo from './JTLLogoTransparentBG.png';

const NavbarMain = (props) => {
    let classes = '';
    if (props.location.pathname === '/') {
        classes = 'darkNav';
        // bgType='dark'
    } else {
        classes = 'lightNav';
    }

    return (
        <Navbar ref={props.setref} id="navbar" className={classes} expand="sm">
            <Navbar.Brand href="/">
                <img height="30" width="auto" className='d-inline-block align-top'  src={jtlLogo} alt="JTL" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navContent" defaultActiveKey="/home" activeKey={props.location.pathname}>
                    <Nav.Item>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio">My Work</Nav.Link>
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
