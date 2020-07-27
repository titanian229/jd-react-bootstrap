import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
// import './cssreset.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import NavbarMain from './components/NavbarMain';
import Footer from './components/Footer';
// import Header from './components/Header';

import './styles/global.scss';

const NavbarWithRouter = withRouter(NavbarMain);
const FooterWithRouter = withRouter(Footer);

function App() {
    const navRef = useRef(null);

    useEffect(() => {AOS.init()})

    return (
        <Router>
            <div className="maincontent creamBG">
                {/* <Route exact path="/" component={Header} /> */}
                <NavbarWithRouter setref={navRef} />
                <Route exact path="/">
                    <Landing navref={navRef} />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <FooterWithRouter />
            </div>
        </Router>
    );
}

export default App;