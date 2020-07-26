import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import astronaut from './astronaut.png';
import earth from './earth.png';
import './style.scss';
import InfoBox from '../InfoBox';

const Hero = (props) => {
    const astronautRef = useRef(null);
    const earthRef = useRef(null);
    const nameRef = useRef(null);
    const subRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        let timeline = gsap.timeline({ paused: true });
        timeline
            .to(
                earthRef.current,
                {
                    delay: 2,
                    duration: 2,
                    y: '80vh',
                    opacity: 0,
                    ease: 'sine.in',
                },
                'earthFade'
            )
            .from(
                astronautRef.current,
                {
                    delay: 2,
                    duration: 2,
                    css: { scale: 0.4 },
                    ease: 'power1.inOut',
                },
                'earthFade'
            )
            .from(
                nameRef.current,
                {
                    duration: 0.7,
                    x: 110,
                    opacity: 0,
                    ease: 'circ',
                },
                'name'
            )
            .from(
                subRef.current,
                {
                    duration: 0.7,
                    x: -110,
                    opacity: 0,
                    ease: 'circ',
                },
                'name'
            )
            .from(infoRef.current, {
                opacity: 0,
            })
            .from(props.navref.current, {
                opacity: 0,
            });
        timeline.play();
    });

    return (
        <div className="heroContainer">
            <img src={astronaut} alt="Astronaut" ref={astronautRef} id="astro" />
            <img id="earth" src={earth} alt="earth" ref={earthRef} />
            <h2 id="subtitle" className="midlight" ref={subRef}>
                Full Stack Web Developer
            </h2>
            <h1 ref={nameRef} id="name">
                <span>James</span>
                <br />
                <span className="midlight">Lee</span>
            </h1>
            <InfoBox setref={infoRef} />
        </div>
    );
};

export default Hero;
