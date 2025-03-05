import React from 'react';
import { useApp } from '../components/appContext.js';
import ResumePage from './Resume.js';
import ProjectsPage from './Projects.js';
import HomePage from './Home.js';
import ResearchPage from './Research.js';
import ContactPage from './Contact.js';
import UpperLimbPage from './upperlimbPage.js';
import TrackMatePage from './trackmatePage.js';
import './css/Layout.css'; // We'll create this CSS file separately

const Layout = () => {
    const { currentPage, setCurrentPage, menuOpen, setMenuOpen } = useApp(); //access context

    const Navigation = () => (
        <nav className="navbar">
            <div className="nav-container">

                {/* upper menu navigation*/}
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

                {/* Mobile Navigation */}
            <div className="mobile-nav">
                <button 
                    className="mobile-menu-toggle" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {menuOpen && (
                    <div className="mobile-menu">
                        <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="nav-item">Home</button>
                        <button onClick={() => { setCurrentPage('projects'); setMenuOpen(false); }} className="nav-item">Projects</button>
                        <button onClick={() => { setCurrentPage('research'); setMenuOpen(false); }} className="nav-item">Research</button>
                        <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="nav-item">Contact</button>
                        <button onClick={() => { setCurrentPage('resume'); setMenuOpen(false); }} className="nav-item">Resume</button>
                    </div>
                )}
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
                {currentPage === 'trackmate' && <TrackMatePage />}
                {currentPage === 'upperlimb' && <UpperLimbPage />}
            </main>
            
            
        </div>
    );
};

export default Layout; 