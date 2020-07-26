import React from 'react';
import Project from '../scenes/Portfolio/Project';
import projectsList from '../scenes/Portfolio/projects.json';
import Container from 'react-bootstrap/Container';

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: '#F0EEF0' }}>
            <Container className="py-4">
                <h1>My Projects</h1>
                <p>Ranging from web design to mobile applications</p>
                <div className="projectsContainer">
                    {projectsList.map((projectData) => (
                        <Project {...projectData} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;
