import React from "react";
import "./css/Research.css";

const research = [
    {
        title: "Upper-Limb Joint Prediction Using IMUs: A Deep Learning Approach for Kinematics Estimation",
        description: "Co-authoring a paper on the application of IMU and EMG data for predicting upper-limb joint movements using deep learning techniques. Focus on data processing, model development and pipeline implemented with PyTorch, and comparative analysis with a domain adaptation-based model."
    },
    {
        title: "Creation and Utilization of an Upper Limb Movement Dataset for Machine Learning Applications",
        description: "Co-authoring a paper detailing the creation of a comprehensive dataset containing five different upper limb movements from each of the ten subjects used in the above research paper. Responsibilities include data collection, preprocessing using Pandas and NumPy, and ensuring the dataset's quality and consistency for robust model training and validation."
    }
];

const ResearchPage = () => {
    return (
        <div className="research-container">
            {/* general research heading */}
            <h1 className="research-title">Research</h1>

            {/* research still in progress */}
            <h2 className="section-title">Research in Progress</h2>
            <div className="research-list">
                {research.map((item, index) => (
                    <div key={index} className="research-item">
                        <h3 className="research-item-title">{item.title}</h3>
                        <p className="research-item-description">{item.description}</p>
                    </div>
                ))}
            </div>
            
            {/* published research */}
            <h2 className="section-title">Published Research</h2>
            <p className="placeholder">(To be added when available)</p>
        </div>
    );
};

export default ResearchPage;
