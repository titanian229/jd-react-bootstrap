import React from 'react'
import Hero from '../scenes/Landing/Hero'
const Landing = (props) => {
    return (
        <>
            <Hero navref={props.navref} />
        </>
    )
}

export default Landing;
