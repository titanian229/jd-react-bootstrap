import React from 'react';
import './style.scss'

const Bio = () => {
    return (
        <div className="bioSection">
            <p>Hello, I'm James Lee. I'm a full stack web developer, based in Toronto.</p>
            <p>
                I'm focused on <span className="emphasize">clean</span>, <span className="emphasize">efficient</span>,
                and <span className="emphasize">easily expandable</span> code.
            </p>
            <p>
                I first encountered programming by exploring it myself, creating software to automate my life and work
                and improve the things I encountered day to day. Mapping and planning the routes I kayak, automating the
                bulky process of creating GCal events around work schedules, android applications to take my software on
                the go with me. I taught myself by exploring documentation, picking things apart and playing with new
                ways to code and new design patterns. I found my passion in it. I’m always growing my skill set taking
                online and physical classes, most recently a University of Toronto coding bootcamp.
            </p>
        </div>
    );
};

export default Bio;
