import React from 'react'
import './style.scss'

const Footer = (props) => {
    if (props.location.pathname === '/') return ''

    return (
        <footer className="text-center">
            &copy; 2020 James T Lee
        </footer>            
    )
}

export default Footer;
