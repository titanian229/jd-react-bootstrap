import React from 'react';
import Image from 'react-bootstrap/Image';
import './style.scss'

const Photo = (props) => {
    let className;
    if (props.offset) {
        className = 'offset' + props.offset;
    }

    return <Image fluid src={props.src} className={className} alt={props.alt} />;
};

export default Photo;
