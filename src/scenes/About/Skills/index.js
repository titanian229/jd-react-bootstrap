import React from 'react';
import './style.scss';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

let skillsListData = [
    ['HTML5', 'CSS3', 'JavaScript ES6', 'Python', 'SQL', 'Git'],
    ['MongoDB / Express / React / Node.js (MERN) Stack'],
    ['Handlebars.js', 'Bootstrap', 'Semantic UI', 'Sass'],
];

const arrowStyle = {
    fontSize: '0.6em',
    margin: '0 0.3em',
    marginBottom: '0.2em',
};

const Skills = () => {
    let skillsList = skillsListData.map((row, ind) => (
        <div key={ind} className="skills">
            <FaLessThan style={arrowStyle} />
            {row.map((item, index) => (
                <span key={index} className="skill">
                    {item}
                </span>
            ))}
            <FaGreaterThan style={arrowStyle} />
        </div>
    ));
    // skillsList = skillsList.map((row, index) => (
    //     <div className={styles.skills} key={index}>
    //         {row}
    //     </div>
    // ));
    return <div className="skillsContainer">{skillsList}</div>;
};

export default Skills;
