import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
// import './cssreset.css'

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import NavbarMain from './components/NavbarMain';
import Footer from './components/Footer'
// import Header from './components/Header';


import './styles/global.scss';

const NavbarWithRouter = withRouter(NavbarMain);

function App() {
    return (
        <Router>
            <div className="maincontent creamBG">
                {/* <Route exact path="/" component={Header} /> */}
                <NavbarWithRouter />
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
