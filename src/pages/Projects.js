//Projects.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Project.css';
import { useApp } from '../components/appContext.js';

const projects = [
    {
        title: "TrackMate",
        description: "A machine learning-based soccer software application that provides accurate tracking for any player.",
        page: "trackmate"
    },
    {
        title: "Upper Limb Joint Prediction Using IMUs",
        description: "A deep-learning based application that predicts upper limb movement using IMUs.",
        page: "upperlimb"
    },
    {
        title: "Census Dashboard",
        description: "An interactive Streamlit dashboard built with American Community Survey (ACS) 5-Year Estimates data.",
        page: "trackmate"
    },
];

const ProjectsPage = () => {
    const { currentPage, setCurrentPage} = useApp();

    return (
        <div>
            {/* heading container */}
            <section className="hero-section">
                <div className="container text-center">
                    <h1 className="name-heading">My Projects</h1>
                    <p className="typed-text">A collection of my work in software engineering</p>
                </div>
            </section>

            {/* project selection menu */}
            <section className="about-section">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Projects</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card about-card mb-4">
                                    <div className="card-body">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <button
                                            onClick={() => setCurrentPage(project.page)}
                                            className={`nav-item ${currentPage === project.page ? 'active' : ''}`}
                                        >
                                            <span className="btn btn-primary">View Project</span>
                                        </button>
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

export default ProjectsPage;