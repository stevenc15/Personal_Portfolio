//Projects.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Resume.css';

//import resume from './resume.pdf';


const ResumePage = () => {
    return (
        <div className="resume-container">
            
            <h1 className="resume-title">My Resume</h1>
            
            {/* simple resume display*/}
            <iframe 
                src='/resume.pdf'
                className="resume-frame"
                title="Resume"
                width="100%"
                height="600px"
            ></iframe>
        </div>
    );

};

export default ResumePage;