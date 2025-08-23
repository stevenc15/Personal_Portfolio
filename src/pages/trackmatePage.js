import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../components/appContext.js';
import IDselected from './trackmate/images/IDselected.png';
import inputVideoEntered from './trackmate/images/inputVideoEntered.png';
import pickPlayerOption from './trackmate/images/pick_player_option.png';
import inputVideoNotEntered from './trackmate/images/inputVideoNotEntered.png';
import processedVideoDownload from './trackmate/images/processed_video_download.png';
import trackedFirstFrame from './trackmate/images/Tracked_first_frame.png';
import './css/trackmatePage.css';
import exampleVideo1 from './Example1.mp4';
import exampleVideo2 from './Example2.mp4';

const TrackMatePage = () => {
    const { setCurrentPage } = useApp();
    
    // controls demo visibility
    const [showDemo, setShowDemo] = useState(false);
    
    // steps collection of how project works
    const steps = [
        {
            image: inputVideoEntered,
            title: "1. Enter video for processing",
            description: "Upload a video of around 30 seconds of the in-game play you highlighted.",
            alt: "Video upload interface"
        },
        {
            image: pickPlayerOption,
            title: "2. Select Pick Player",
            description: "The 'Pick Player' option grabs the first frame of the video and categorizes each player with a bounding box and ID.",
            alt: "Player selection interface"
        },
        {
            image: trackedFirstFrame,
            title: "3. View processed first frame",
            description: "A processed version of the first frame is returned. Each player shows an ID and a bounding box to indicate the tracking area. Select which player to track by entering their ID.",
            alt: "Processed first frame with player IDs"
        },
        {
            image: IDselected,
            title: "4. Start Processing Video",
            description: "The 'Start Processing Video' feature takes the input video and selected ID, and adds annotation tracking to the player throughout the entire length of the video.",
            alt: "Player ID selection interface"
        },
        {
            image: processedVideoDownload,
            title: "5. Download Processed Video",
            description: "The processed video is returned showing the selected player being tracked throughout the entirety of the video. The user has the option to directly download their newly processed video!",
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

            {/* demo vid section */}
            <section className="demo-section">
                <div className="container">
                    <div className="section-title">
                        <h2>See It In Action</h2>
                        <div className="underline"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="demo-card">
                                <div className="demo-placeholder">
                                    {showDemo ? (
                                        <div className="ratio ratio-16x9">
                                            <iframe 
                                                src="https://www.youtube.com/embed/PibIhiw_kro" 
                                                title="TrackMate Demo"
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="demo-overlay" onClick={() => setShowDemo(true)}>
                                            <div className="play-button">
                                                <i className="bi bi-play-circle-fill"></i>
                                            </div>
                                            <p>Click to watch demo</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <div style={{ color: 'black', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Check out this example!
                </div>

                        <div className="flex flex-col items-center mt-12 space-y-8">

  {/* Section heading */}
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4 text-black">Check out this example!</h2>
  </div>

  {/* First video */}
  <div className="w-full max-w-4xl" style={{ height: '25vh' }}>
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <video 
        className="w-full h-full object-cover"
        controls
        src={exampleVideo1} 
      />
    </div>
    <p className="text-center text-xl text-gray-800 mt-2">Processed Video by TrackMate</p>
  </div>

  {/* Second video */}
  <div className="w-full max-w-4xl" style={{ height: '25vh' }}>
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <video 
        className="w-full h-full object-cover"
        controls
        src={exampleVideo2} 
      />
    </div>
    <p className="text-center text-xl text-gray-800 mt-2">Processed Video by TrackMate</p>
  </div>

</div>

            {/* github link */}
            <section className="github-section">
                <div className="container text-center">
                    <div className="github-card">
                        <h3>Explore the Code</h3>
                        <p>Check out the open-source repository on GitHub to learn more about how TrackMate works.</p>
                        <a href="https://github.com/stevenc15/TrackMate" 
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

export default TrackMatePage;
