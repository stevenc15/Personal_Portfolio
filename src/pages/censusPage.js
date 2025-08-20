import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../components/appContext.js';
import './css/censusPage.css';
import start from './upperlimb/images/start.png';
import NationWide from './upperlimb/images/NationWide.png';
import chooseStates from './upperlimb/images/chooseStates.png';
import stateBYstate from './upperlimb/images/stateBYstate.png';
import stateVSnation from './upperlimb/images/stateVSnation.png';

const UpperLimbPage = () => {

    // steps collection of how project works
    const steps = [
        {
            image: start,
            title: "Preview of Dataset and Selection",
            description: "Choose a Dataset to view (2009-2013, 2013-2018 or 2018-2023) and see a preview.",
            alt: "start point"
        },
        {
            image: chooseStates,
            title: "Choose a state or states",
            description: "For the first option, the user can pick a single state or several states to view and compare their data.",
            alt: "State selection"
        },
        {
            image: stateBYstate,
            title: "State view",
            description: "This shows an example of what data visualization for state selection can look like depending on user selection.",
            alt: "State selection example"
        },
        {
            image: NationWide,
            title: "Nation-level Map View",
            description: "The second option gives the user the ability to check out metrics such as Median Home Value in a map-like view to allow for quicker and more general visualization of data.",
            alt: "Nation Wide data"
        },
        {
            image: stateVSnation,
            title: "State vs Nation-Wide average",
            description: "This third opton allows the user to choose a single state and compare a certain metric such as Unemployment Rate versus the national average for that metric",
            alt: "Processed video download screen"
        },
    ];

    return (
        <div className="upperlimb-page">
            {/* General explanation of project */}
            <section className="hero-section upperlimb-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h1 className="project-title">Census Dashboard</h1>
                            <div className="project-subtitle">
                                <p className="lead">An interactive Streamlit dashboard built with American Community Survey (ACS) 5-Year Estimates data.</p>
                            </div>
                            <p className="project-description">
                                This project aims provide visualizations that help breakdown 3 datasets from the Census.
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

            

            {/* breakdown section */}
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
                        <p>Check out the open-source repository on GitHub to learn more about how the Census Dashboard works.</p>
                        <a href="https://github.com/stevenc15/upper-limb-joint-prediction" 
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

export default UpperLimbPage;
