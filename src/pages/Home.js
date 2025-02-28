import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';

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
    
    return (
        <div>
            {/* Hero Section */}
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

            {/* About Section (placeholder) */}
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
                                    <p>Hi! My name is Steven Camacho, I am a recent grad from the University of Central Florida with a B.S. in Computer Science with a passion for software engineering and the solutions it can bring to the world. I love to learn and gain new experiences!</p>
                                </div>
                                <div className="col-md-6">
                                    <h3>My Skills</h3>
                                    <div className="skills-container">
                                        {["JavaScript", "React", "Node.js", "Python", "Java", "Data Structures", "Algorithms"].map((skill, index) => (
                                            <span key={index} className="skill-badge">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
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