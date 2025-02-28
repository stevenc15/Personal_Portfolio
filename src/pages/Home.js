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
                        <a href="stevenacamachoperez@gmail.com" className="social-link">Email</a>
                        <a href="https://github.com/stevenc15" className="social-link">GitHub</a>
                        <a href="https://www.linkedin.com/in/steven-camacho-96a818268/" className="social-link">LinkedIn</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;