import React from "react";
import templateOne from "../Images/Generated image 1.png";
import templateTwo from "../Images/Generated image 2.png";
import templateThree from "../Images/Generated image 3.png";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../Context/ResumeContext";

export default function TempDisplayPage() {

    const navigate = useNavigate();

    const {
        setSelectedTemplateId
    } = useContext(ResumeContext);

    const templates = [
        {
            id: 1,
            title: "Modern Designer Resume",
            image: templateOne
        },
        {
            id: 2,
            title: "Premium Sidebar Resume",
            image: templateTwo
        },
        {
            id: 3,
            title: "Harvard ATS Resume",
            image: templateThree
        }
    ];


    /* ================= TEMPLATE SELECTION ================= */

    const handleTemplateSelection = (id) => {

        console.log("Selected Template :", id);

        setSelectedTemplateId(id);

        navigate("/edit");

    };


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

                    <div className="row mb-4">
                        <div className="col-12 text-center">

                            <h2
                                className="fw-bold"
                                style={{ color: "#2A4467" }}
                            >
                                Choose Your Resume Template
                            </h2>

                            <p
                                className="fs-5 mb-0"
                                style={{ color: "#2A4467" }}
                            >
                                Pick one template design and start editing your resume.
                            </p>

                        </div>
                    </div>


                    {/* TEMPLATE CARDS */}

                    <div className="row g-4">

                        {
                            templates.map((template) => {

                                return (

                                    <div
                                        className="col-12 col-md-6 col-lg-4"
                                        key={template.id}
                                    >

                                        <div className="card h-100 shadow-lg border-0 rounded-3 overflow-hidden">

                                            {/* TEMPLATE IMAGE */}

                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    height: "420px",
                                                    backgroundColor: "#f8f9fa"
                                                }}
                                            >

                                                <img
                                                    src={template.image}
                                                    className="img-fluid"
                                                    alt={template.title}
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                        objectFit: "contain"
                                                    }}
                                                />

                                            </div>


                                            {/* CARD BODY */}

                                            <div className="card-body text-center">

                                                <h5
                                                    className="card-title fw-bold mb-3"
                                                    style={{ color: "#2A4467" }}
                                                >
                                                    {template.title}
                                                </h5>


                                                {/* SELECT BUTTON */}

                                                <button
                                                    className="btn fw-bold rounded-pill px-4 py-2"
                                                    style={{
                                                        backgroundColor: "#2A4467",
                                                        borderColor: "#2A4467",
                                                        color: "white"
                                                    }}
                                                    onClick={() => handleTemplateSelection(template.id)}
                                                >
                                                    Select Template
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })
                        }

                    </div>

                </div>

            </div>
        </>
    );

}