import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import trackmateHome from './trackmate/images/home.png';
import visualization from './upperlimb/images/visualization.png';

import { useApp } from '../components/appContext.js';

const HomePage = () => {
    const [typingText, setTypingText] = useState("");
    const fullText = "Software Engineer • Problem Solver • Innovator";
    const [activeSection, setActiveSection] = useState("about");
    
    // Typing animation effect
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= fullText.length) {
                setTypingText(fullText.substring(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 70);
        
        return () => clearInterval(typingInterval);
    }, []);
    
    const { currentPage, setCurrentPage} = useApp();

    return (
        <div>

            {/* section for name intro and links*/}
            <section id="home" className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="avatar-container">
                                <div className="avatar">SC</div>
                            </div>
                            <h1 className="name-heading">Steven Camacho</h1>
                            <div className="typing-container">
                                <p className="typed-text">{typingText}<span className="cursor">|</span></p>
                            </div>
                            <div className="hero-links mt-4">
                                <a href="mailto:stevenacamachoperez@gmail.com" className="btn btn-primary me-2">
                                    <i className="bi bi-envelope-fill me-1"></i> Email
                                </a>
                                <a href="https://github.com/stevenc15" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github me-1"></i> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/steven-camacho-96a818268/" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin me-1"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-down">
                    <a href="#about">
                        <i className="bi bi-chevron-down"></i>
                    </a>
                </div>
            </section>

            {/* About Me section */}
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-title">
                        <h2>About Me</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="card about-card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Who I Am</h3>
                                    <p>Hi! My name is Steven Camacho, and I am currently pursuing my Master’s in Computer Science at the University of Central Florida. I previously earned my B.S. in Computer Science at UCF, and I’m passionate about machine learning and the innovative solutions it can bring to the world. I’m always eager to learn, grow, and gain new experiences!</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>My Skills</h3>
                                    <div className="skills-container">
                                        {["JavaScript", "React", "Node.js", "Python", "Java", "Data Structures", "Algorithms", "Pandas"].map((skill, index) => (
                                            <span key={index} className="skill-badge">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Checkout my Projects!</h2>
                    <div className="underline"></div>
                </div>
                <div className="row">
                {[
                    {
                        title: "TrackMate",
                        description: "A machine learning-based soccer tracking system that provides accurate tracking for any player.",
                        skills: ["React", "Javascript", "Python", "Machine Learning"],
                        image: trackmateHome, // Replace with actual project screenshot
                        githubLink: "https://github.com/stevenc15/TrackMate",
                        page: "trackmate"
                    },
                    {
                        title: "Upper Limb Joint Prediction Using IMUs",
                        description: "A deep-learning based application that predicts upper limb movement using IMUs.",
                        skills: ["Python", "Project Management", "Data preprocessing"],
                        image: visualization, // Replace with actual project screenshot
                        githubLink: "https://github.com/stevenc15/upper-limb-joint-prediction",
                        page: "upperlimb"
                    },
                    {
                        title: "Census Dashboard",
                        description: "An interactive Streamlit dashboard built with American Community Survey (ACS) 5-Year Estimates data.",
                        skills: ["Python", "Pandas", "Data preprocessing"],
                        image: trackmateHome, // Replace with actual project screenshot
                        githubLink: "https://github.com/stevenc15/Census_Dashboard",
                        page: "census"
                    },
                ].map((project, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="project-card card h-100">
                        <div className="project-image-container">
                            <img 
                                src={project.image} 
                                className="card-img-top project-image" 
                                alt={project.title} 
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <div className="project-skills">
                                {project.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-between">
                                <a 
                                    href={project.githubLink} 
                                    className="btn btn-outline-dark btn-sm" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-github me-1"></i>GitHub
                                </a>
                                <button
                                    onClick={() => setCurrentPage(project.page)}
                                    className={`nav-item ${currentPage === project.page ? 'active' : ''}`}                                   
                                >
                                    <span className="btn btn-primary">View Project</span>
                                </button>
                                    {/*<i className="bi bi-eye-fill me-1"></i>Check it out!*/}
                            
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
            {/* Footer */}
            <footer className="footer">
                <div className="container text-center">
                    <p>© 2025 Steven Camacho. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
