import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import Navbar from './components/Navbar'
import Header from './components/Header'

const NavbarWithRouter = withRouter(Navbar)

function App() {
    return (
    <Router>
        <Route exact path="/" component={Header} />
        <NavbarWithRouter />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </Router>
    );
}

export default App;
