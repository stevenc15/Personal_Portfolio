import React from 'react';
import { useApp } from '../components/appContext.js';
import ResumePage from './Resume.js';
import ProjectsPage from './Projects.js';
import HomePage from './Home.js';
import ResearchPage from './Research.js';
import ContactPage from './Contact.js';
import './css/Layout.css'; // We'll create this CSS file separately

const Layout = () => {
    const { currentPage, setCurrentPage, menuOpen, setMenuOpen } = useApp(); //access context

    const Navigation = () => (
        <nav className="navbar">
            <div className="nav-container">

                {/* Desktop Navigation */}
                <div className="desktop-nav">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
                    >
                        
                        <span className="nav-text">Home</span>
                    </button>

                    <button
                        onClick={() => setCurrentPage('projects')}
                        className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`}
                    >
                        
                        <span className="nav-text">Projects</span>
                    </button>

                    <button
                        onClick={() => setCurrentPage('research')}
                        className={`nav-item ${currentPage === 'research' ? 'active' : ''}`}
                    >
                        
                        <span className="nav-text">Research</span>
                    </button>

                    <button
                        onClick={() => setCurrentPage('contact')}
                        className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
                    >
                        
                        <span className="nav-text">Contact</span>
                    </button>

                    <button
                        onClick={() => setCurrentPage('resume')}
                        className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
                    >
                        <span className="nav-text">Resume</span>
                    </button>
                </div>

            </div>
        </nav>
    );

    return (
        <div className="layout-container">
            <Navigation />
            <main className="main-content">
                {currentPage === 'home' && <HomePage/>}
                {currentPage === 'projects' && <ProjectsPage/>}
                {currentPage === 'research' && <ResearchPage/>}
                {currentPage === 'resume' && <ResumePage />}
                {currentPage === 'contact' && <ContactPage />}
            </main>
            
            
        </div>
    );
};

export default Layout; 