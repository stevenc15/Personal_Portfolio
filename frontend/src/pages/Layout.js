
import React from 'react';
import { useApp } from '../components/appContext.js';
import ResumePage from './Resume.js';
import ProjectsPage from './Projects.js';
import HomePage from './Home.js';
import ResearchPage from './Research.js';
import ContactPage from './Contact.js';
import { motion } from 'framer-motion';

const Layout = () => {
    const { currentPage, setCurrentPage, menuOpen, setMenuOpen } = useApp(); //access context

    const Navigation = () => (
        <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title/Logo and Menu */}
                <div className="flex items-center justify-between h-16">

                    {/* Navigation Items with numbered format */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`group flex items-center space-x-1 ${
                                currentPage === 'home' ? 'text-teal-500' : 'text-gray-600'
                            }`}
                        >
                            <span className="text-sm group-hover:text-teal-500 transition-colors duration-200">Home</span>
                        </button>

                        <button
                            onClick={() => setCurrentPage('projects')}
                            className={`group flex items-center space-x-1 ${
                                currentPage === 'projects' ? 'text-teal-500' : 'text-gray-600'
                            }`}
                        >
                            <span className="text-sm group-hover:text-teal-500 transition-colors duration-200">Projects</span>
                        </button>

                        <button
                            onClick={() => setCurrentPage('research')}
                            className={`group flex items-center space-x-1 ${
                                currentPage === 'research' ? 'text-teal-500' : 'text-gray-600'
                            }`}
                        >
                            <span className="text-sm group-hover:text-teal-500 transition-colors duration-200">Research</span>
                        </button>

                        <button
                            onClick={() => setCurrentPage('contact')}
                            className={`group flex items-center space-x-1 ${
                                currentPage === 'contact' ? 'text-teal-500' : 'text-gray-600'
                            }`}
                        >
                            <span className="text-sm group-hover:text-teal-500 transition-colors duration-200">Contact</span>
                        </button>

                        {/* Resume button styled like in the inspiration */}
                        <button
                            onClick={() => setCurrentPage('resume')}
                            className="px-4 py-1 border border-teal-500 text-teal-500 rounded text-sm hover:bg-teal-500 hover:text-white transition-colors duration-200"
                        >
                            Resume
                        </button>
                    </div>

                </div>
            </div>

        </nav>
    );

    // Layout setup, page navigation with padding for fixed navbar
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navigation />
            <main className="pt-16"> {/* Adding padding top for the fixed navbar */}
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="container mx-auto px-4 py-8"
                >
                    {currentPage === 'home' && <HomePage/>}
                    {currentPage === 'projects' && <ProjectsPage/>}
                    {currentPage === 'research' && <ResearchPage/>}
                    {currentPage === 'resume' && <ResumePage />}
                    {currentPage === 'contact' && <ContactPage />}
                </motion.div>
            </main>
            
            {/* Simple footer */}
            <footer className="py-6 px-4 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;