import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../components/appContext.js';
import './css/upperlimbPage.css';
import jointPrediction from './upperlimb/images/jointPrediction.png';
import EmgImu from './upperlimb/images/EmgImu.png';
import EmgImuPlacement from './upperlimb/images/EmgImuPlacement.png';
import dataCollectionProto from './upperlimb/images/dataCollectionProto.png';
import OpensimProcessing from './upperlimb/images/OpensimProcessing.png';
import ProjectPipeline from './upperlimb/images/ProjectPipeline.png';
import ViconMotionCapture from './upperlimb/images/ViconMotionCapture.png';
import teacherStudent from './upperlimb/images/teacherStudent.gif';
import visualization from './upperlimb/images/visualization.png';

const UpperLimbPage = () => {

    // steps collection of how project works
    const steps = [
        {
            image: jointPrediction,
            title: "What is Pose Detection?",
            description: "Pose detection is the detection or tracking of the human body’s pose or posture through image, video or sensor input.",
            alt: "Video upload interface"
        },
        {
            image: EmgImu,
            title: "IMU and EMG",
            description: "Data is collected mainly through IMU and EMG.",
            alt: "Player selection interface"
        },
        {
            image: EmgImuPlacement,
            title: "EMG/IMU sensor placement",
            description: "This shows our placement for the sensors, in which on the left we see how our full setup looks with 6 sensors, 3 sensors prioritizing emg collection (biceps, brachii, triceps brachii and the deltoideus posterior). 3 sensors prioritize imu data collection around lower extremity of the arm, with thought in mind for the potential product extension coming from this project.",
            alt: "Processed first frame with player IDs"
        },
        {
            image: dataCollectionProto,
            title: "Data Collection Procedure",
            description: "A 5-stage procedure was designed which hopes to encapsulate the entire range of motion of our subject.",
            alt: "Player ID selection interface"
        },
        {
            image: ViconMotionCapture,
            title: "Vicon Motion Capture",
            description: "Motion capture data is additionally collected for ground truth values. In order to capture our motion data we first needed to design a marker set (a specified placement for each of the metallic balls seen in the image). In total we have around 60 markers. From here we are able to capture our motion data in Vicon Nexus to then be exported for processing. Joint angle data collected from the markers is processed on Vicon Nexus to produce raw marker trajectories that go into OpenSim.",
            alt: "Processed video download screen"
        },
        {
            image: OpensimProcessing,
            title: "OpenSim Processing",
            description: "The next step in processing the joint angles is to pass the raw trajectories for refinement in OpenSim, then achieving retrieval of accurate joint angles to be used as ground truth values.",
            alt: "Player ID selection interface"
        },
        {
            image: teacherStudent,
            title: "Model Output",
            description: "In the frame the upper limb prediction is shown. With the usage of a Teacher-Student Knowledge-Distillation model setup. From left to right: Ground Truth, Teacher, Student, Student with Knowledge-Distillation (Model info will be shown once model architecture is published as the original version belongs to a UCF graduate student who worked on this project.",
            alt: "Player ID selection interface"
        },
        {
            image: visualization,
            title: "Visualization",
            description: "Further visualization produced in this project, showcases EMG and IMU signals side to side with the visualization of the predicted joint angles.",
            alt: "Player ID selection interface"
        },
        {
            image: ProjectPipeline,
            title: "Project Pipeline",
            description: "Shown here is a pipeline diagram of how the project was developed, from marker placement to model output.",
            alt: "Processed video download screen"
        }
    ];

    return (
        <div className="upperlimb-page">
            {/* General explanation of project */}
            <section className="hero-section upperlimb-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h1 className="project-title">Upper-Limb Joint Prediction using IMUs</h1>
                            <div className="project-subtitle">
                                <p className="lead">Wearable sensor-based joint/pose prediction.</p>
                            </div>
                            <p className="project-description">
                                This project aims to make advancements on issue of invasive wearable sensor-based prediction.
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
                        <p>Check out the open-source repository on GitHub to learn more about how upperlimb works.</p>
                        <a href="https://github.com/stevenc15/Census_Dashboard" 
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
