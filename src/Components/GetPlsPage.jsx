import React from "react";

export default function GetPlsPage() {
    return (
        <>
            <div
                className="container-fluid py-5"
                style={{
                    minHeight: "calc(100vh - 75px)",
                    backgroundColor: "#F2F3ED"
                }}
            >
                <div className="container">

                    {/* PAGE HEADING */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="fw-bold" style={{ color: "#2A4467" }}>
                                ResumeNova +
                            </h2>
                            <p className="fs-5 mb-0" style={{ color: "#2A4467" }}>
                                Unlock extra resume tools for a smarter editing experience.
                            </p>
                        </div>
                    </div>

                    {/* GET PLUS FEATURE CARDS */}
                    <div className="row g-4 justify-content-center">

                        {/* CARD 1 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="fs-1 mb-3">📄</div>

                                    <h5 className="card-title fw-bold mb-3" style={{ color: "#2A4467" }}>
                                        Premium Templates
                                    </h5>

                                    <p className="card-text" style={{ color: "#2A4467" }}>
                                        Access polished resume designs for executive, creative, tech, and academic profiles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="fs-1 mb-3">✅</div>

                                    <h5 className="card-title fw-bold mb-3" style={{ color: "#2A4467" }}>
                                        ATS Resume Checker
                                    </h5>

                                    <p className="card-text" style={{ color: "#2A4467" }}>
                                        Check basic resume quality, keyword usage, section formatting, and ATS-friendly structure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow-lg border-0 rounded-3">
                                <div className="card-body text-center p-4">
                                    <div className="fs-1 mb-3">✨</div>

                                    <h5 className="card-title fw-bold mb-3" style={{ color: "#2A4467" }}>
                                        AI Bullet Suggestions
                                    </h5>

                                    <p className="card-text" style={{ color: "#2A4467" }}>
                                        Improve simple experience lines into professional resume bullet points instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* GET PLUS BUTTON */}
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <button
                                className="btn btn-lg fw-bold rounded-pill px-5 py-3 shadow"
                                style={{
                                    backgroundColor: "#2A4467",
                                    borderColor: "#2A4467",
                                    color: "white"
                                }}
                            >
                                Get +
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}