import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaGithub, FaAnchor } from 'react-icons/fa';
import './style.scss';

const Project = (props) => {
    return (
        <Card data-aos="fade-up">
            {/* <Card.Img variant="top" src={props.imageURL} className="limitedHeight" /> */}
            <div className="projectImage" style={{ backgroundImage: `url(${props.imageURL})` }}></div>
            <Card.Header className="cardTitle">{props.name}</Card.Header>
            <Card.Text as="div" className="cardText">
                {/* {props} */}
                <p className="cardSubtitle">{props.subtitle}</p>
                <p className="cardDescription">{props.description}</p>
                <div className="techContainer">
                    {props.technologies.map((tech, ind) => (
                        <Badge key={ind} variant="info" className="tech">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <div className="linkContainer">
                    {props.liveLink ? (
                        <a href={props.liveLink}>
                            <FaAnchor />
                        </a>
                    ) : (
                        ''
                    )}
                    {props.githubLink ? (
                        <a href={props.githubLink}>
                            <FaGithub />
                        </a>
                    ) : (
                        ''
                    )}
                </div>
            </Card.Text>
        </Card>
    );
};

export default Project;
