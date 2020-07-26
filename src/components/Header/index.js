import React, { useRef, useState } from 'react'
import astronaut from './astronaut.png'
import earth from './earth.png';

const Header = () => {

    const astronautRef = useRef(null)
    const earthRef = useRef(null)
    const nameRef = useRef(null)


    return (
        <div id="welcome-container">
            <img
                src={astronaut}
                alt="Astronaut"
                ref={astronautRef}
            />
            <img src={earth} alt="earth" ref={earthRef} />
            <h1 ref={nameRef}>
                <span>James</span>
                <br />
                <span>Lee</span>
            </h1>
        </div>
    )
}

export default Header;
