import React from 'react';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'
import './style.scss';

const ContactIcons = () => {
    return (
        <div className="contactIconContainer">
            <a data-aos="flip-up" data-aos-anchor-placement="center-bottom" href="https://github.com/titanian229">
                <FaGithub />
            </a>
            <a data-aos="flip-up" data-aos-anchor-placement="center-bottom" href="https://www.linkedin.com/in/jamestlee221/">
                <FaLinkedin />
            </a>
            <a data-aos="flip-up" data-aos-anchor-placement="center-bottom" href="mailto:james@jamestlee.ca">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default ContactIcons;
