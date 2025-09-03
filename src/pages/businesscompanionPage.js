import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../components/appContext.js';
import IDselected from './trackmate/images/signinPage.png';
import inputVideoEntered from './trackmate/images/activityDashboard.png';
import pickPlayerOption from './trackmate/images/clientDashboard.png';
import inputVideoNotEntered from './trackmate/images/addClient.png';
import processedVideoDownload from './trackmate/images/clientQR.png';
import trackedFirstFrame from './trackmate/images/employeeForm.png';
import './css/trackmatePage.css';

const BusinessCompanionPage = () => {
    const { setCurrentPage } = useApp();
    
    // controls demo visibility
    const [showDemo, setShowDemo] = useState(false);
    
    // steps collection of how project works
    const steps = [
        {
            image: IDselected,
            title: "1. Sign in",
            description: "Sign in with an authorized Gmail account",
            alt: "Video upload interface"
        },
        {
            image: inputVideoEntered,
            title: "2. Activity Dashboard",
            description: "The Activity Dashboard provides the employer a direct look at the centralized Google Sheets file in which all client inspections are logged. The employer has direct access and full control to this Google Sheets file.",
            alt: "Player selection interface"
        },
        {
            image: pickPlayerOption,
            title: "3. Client Dashboard",
            description: "The Client Dashboard holds all the client records from which the employer is free to modify as they like, and QR codes can be created for each client from this page.",
            alt: "Processed first frame with player IDs"
        },
        {
            image: inputVideoNotEntered,
            title: "4. Add Client",
            description: "The employer can directly create client records from here.",
            alt: "Player ID selection interface"
        },
        {
            image: processedVideoDownload,
            title: "5. Client QR code",
            description: "The intended use of the QR code feature is for the employer to print them and stick them to the targeted residences, letting employees scan it to be taken to an online form to log activity with the client information pre-filled.",
            alt: "Processed video download screen"
        },
        {
            image: trackedFirstFrame,
            title: "6. Logging Form",
            description: "Given a successful scan of the client-based QR code, the employee can document their activity and, once submitted, auto-logged onto the Google Sheets file used by the employer.",
            alt: "Processed video download screen"
        }
    ];

    return (
        <div className="trackmate-page">
            
            {/* General explanation of project */}
            <section className="hero-section trackmate-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h1 className="project-title">TrackMate</h1>
                            <div className="project-subtitle">
                                <p className="lead">Innovative solution to highlighting your best skills!</p>
                            </div>
                            <p className="project-description">
                                TrackMate uses the YOLOv5 machine-learning model to track player movements in soccer videos, 
                                making it easier to create highlights and analyze performance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scroll-down">
                    <a href="#features">
                        <i className="bi bi-chevron-down"></i>
                    </a>
                </div>
            </section>

            {/* features overview */}
            <section id="features" className="features-section">
                <div className="container">
                <div className="section-title">
                        <h2>What problem is TrackMate solving?</h2>
                        <div className="underline"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="feature-overview">
                                <p className="text-center mb-5">
                                    Many players aiming for College or Professional careers in Soccer need to edit their highlight 
                                    videos to be able to share them with coaches and scouts. Editing requires significant hours when all that is being done 
                                    is just highlighting which player they are in the video. How can we fix this?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        <h2>Solution</h2>
                        <div className="underline"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="feature-overview">
                                <p className="text-center mb-5">
                                    TrackMate simplifies player tracking in soccer videos through a straightforward 
                                    5-step process. Upload your footage, select which player to track, and TrackMate then highlights said player
                                    for the length of the video in minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* steps section */}
            <section className="steps-section">
                <div className="container">
                    {steps.map((step, index) => (
                        <div className={`step-card ${index % 2 === 0 ? 'step-left' : 'step-right'}`} key={index}>
                            <div className="row align-items-center">
                                <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                    <div className="step-image-container">
                                        <img 
                                            src={step.image} 
                                            alt={step.alt} 
                                            className="step-image"
                                        />
                                    </div>
                                </div>
                                <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-1' : ''}`}>
                                    <div className="step-content">
                                        <h3 className="step-title">{step.title}</h3>
                                        <p className="step-description">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
             
                                                
            {/* github link */}
            <section className="github-section">
                <div className="container text-center">
                    <div className="github-card">
                        <h3>Explore the Code</h3>
                        <p>Check out the open-source repository on GitHub to learn more about how BusinessCompanion works.</p>
                        <a href="https://github.com/stevenc15/businessCompanion" 
                           className="btn btn-github" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <i className="bi bi-github me-2"></i>
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessCompanionPage;
