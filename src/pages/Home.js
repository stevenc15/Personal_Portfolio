import React from 'react';
import { useApp } from '../components/appContext.js';
import './css/Home.css'; // We'll create this CSS file separately

const HomePage = () => {
    const { setCurrentPage } = useApp();

    return (
        // main container
        <div className="home-container">
            {/* secondary container */}
            <div className="home-content">
                
                {/* Central Main Statement*/}
                <section className="intro-section">
                    <h2 className="name-heading">Steven Camacho</h2>
                    <p className="intro-text">
                        Aspiring Engineer and avid Learner.
                    </p>
                </section>

                {/* Place contact links and info below*/}
                <section className="links-section">
                    <h2 className="links-heading">Checkout my Links!</h2>
                    <div className="links-container">
                        <a href="mailto:your.email@example.com" className="social-link">Email</a>
                        <a href="https://github.com/yourusername" className="social-link">GitHub</a>
                        <a href="https://linkedin.com/in/yourusername" className="social-link">LinkedIn</a>
                        <a href="https://indeed.com/profile/yourusername" className="social-link">Indeed</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;