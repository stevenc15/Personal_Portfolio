import React from "react";
import "./css/Contact.css";

const ContactPage = () => {
    return (
        <div className="contact-container">
            {/* Heading */}
            <h2 className="contact-title">Contact Me</h2>

            {/* container for contact links*/}
            <div className="hero-links mt-4">
                {/*links*/}
                <a href="tel:+19547988713" className="btn btn-primary me-2">
                    <i className="bi bi-telephone-fill me-1"></i> Call
                </a>
                <a href="mailto:stevenacamachoperez@gmail.com" className="btn btn-primary me-2">
                    <i className="bi bi-envelope-fill me-1"></i> Email
                </a>
                <a href="https://github.com/stevenc15" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github me-1"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/steven-camacho-96a818268/" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin me-1"></i> LinkedIn
                </a>
            </div>
        </div>
    );
}

export default ContactPage;
