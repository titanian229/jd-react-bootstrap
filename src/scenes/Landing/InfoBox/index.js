import React from 'react';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'
import './style.scss';

const InfoBox = (props) => {
    return (
        <div ref={props.setref} className="infoBox">
            <a href="https://github.com/titanian229">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jamestlee221/">
                <FaLinkedin />
            </a>
            <a href="mailto:james@jamestlee.ca">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default InfoBox;
