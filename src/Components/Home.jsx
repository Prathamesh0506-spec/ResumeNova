import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        /* Full height layout minus the navbar height to avoid layout scrolling */
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "calc(100vh - 75px)", backgroundColor: "#C0F2F3" }}>
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    
                    {/* Canva-Style Centered Jumbotron Box */}
                    <div className="p-5 rounded-3 shadow-lg border" style={{ backgroundColor: "#ffffff", borderColor: "#81DBDB" }}>
                        
                        {/* MAIN APP BRANDING HEADLINE */}
                        <h1 className="display-4 fw-bold mb-3" style={{ color: "#064051" }}>
                            Welcome to <span style={{ color: "#1E9C99" }}>ResumeNova</span> App
                        </h1>
                        
                        {/* APP SUB-DESCRIPTION */}
                        <p className="fs-5 mb-4" style={{ color: "#064051" }}>
                            Create professional, ATS-friendly resumes in real-time. Choose your favorite template, type your details, and download your perfect A4 PDF instantly.
                        </p>
                        
                        {/* CALL TO ACTION BUTTON */}
                        <button 
                            className="btn btn-lg px-4 py-3 fw-bold rounded-pill shadow"
                            style={{ backgroundColor: "#1E9C99", borderColor: "#1E9C99", color: "white" }}
                            onClick={() => navigate("/edit")}
                        >
                            Getting Started with Editing
                        </button>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}