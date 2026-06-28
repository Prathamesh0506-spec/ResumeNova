import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    // Direct Method for Theme Changer Click
    const handleThemeChange = () => {
        console.log("Theme Changer Button Clicked...!!");
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-dark px-4 shadow sticky-top" style={{ backgroundColor: "#2A4467" }}>
            <div class="container-fluid">

                {/* BRANDING / LOGO */}
                <Link class="navbar-brand fw-bold text-uppercase" to="/">
                    <span style={{ color: "#DED38A" }}>Resume</span>Nova
                </Link>

                {/* RESPONSIVE TOGGLE BUTTON (MOBILE VIEW) */}
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#resumeNavbar"
                    aria-controls="resumeNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* NAVBAR MAIN LINK OPTIONS */}
                <div class="collapse navbar-collapse justify-content-between" id="resumeNavbar">

                    {/* Central Menu Links */}
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active fw-semibold mx-2">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/edit" class="nav-link fw-semibold mx-2">Edit</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/Templetes" class="nav-link fw-semibold mx-2">More Templates</Link>
                        </li>

                        <li class="nav-item">
                            <Link
                                to="/Get-plus"
                                class="nav-link fw-bold mx-2"
                                style={{ color: "#DED38A" }}
                            >
                                Get+
                            </Link>
                        </li>
                    </ul>

                    {/* EXTREME RIGHT END: Theme Changer Button */}
                    <div class="d-flex align-items-center">
                        <button
                            class="btn btn-sm fw-bold px-3 py-2 rounded-pill shadow-sm"
                            style={{
                                borderColor: "#DED38A",
                                color: "#DED38A",
                                backgroundColor: "transparent"
                            }}
                            onClick={handleThemeChange}
                        >
                            🌓 Dark / Light
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}