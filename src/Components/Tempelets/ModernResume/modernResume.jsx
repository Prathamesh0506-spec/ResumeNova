
import "./modernResume.css";
import { useContext } from "react";
import { ResumeContext } from "../../../Context/ResumeContext";

// Resume Data Context मधून घेतला आहे.
export default function ModernResume() {

    const { resumeData } = useContext(ResumeContext);

    return (

        <>
            <div className="modernResume">

                {/* ================= HEADER ================= */}

                <div className="resumeHeader">

                    <h1>
                        {resumeData.personalDetails.fullName || "AVERY DANIELS"}
                    </h1>

                    <h3>
                        {resumeData.personalDetails.jobRole || "INTERIOR DESIGNER"}
                    </h3>

                    <div className="designationLine"></div>

                </div>

                {/* ================= CONTACT STRIP ================= */}

                <div className="contactStrip">

                    {/* मूळ Template चे Icons पूर्ववत ठेवले आहेत. */}

                    <div className="leftIcons">

                        <div>✉️</div>
                        <div>📞</div>

                    </div>

                    <div className="profileImage">

                        <div className="imageCircle"></div>

                    </div>

                    <div className="rightIcons">

                        <div>📍</div>
                        <div>🌐</div>

                    </div>

                </div>

                {/* ================= MAIN BODY ================= */}

                <div className="resumeBody">

                    {/* LEFT COLUMN */}

                    <div className="leftColumn">

                        {/* ABOUT */}

                        <div className="leftSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">👤</span>

                                <h4>ABOUT ME</h4>

                            </div>

                            {/* वैयक्तिक माहिती ABOUT ME मध्ये दाखवली आहे. */}

                            <div className="sectionData">

                                {resumeData.personalDetails.summary && (
                                    <p>{resumeData.personalDetails.summary}</p>
                                )}

                                {resumeData.personalDetails.email && (
                                    <p><strong>Email :</strong> {resumeData.personalDetails.email}</p>
                                )}

                                {resumeData.personalDetails.phone && (
                                    <p><strong>Phone :</strong> {resumeData.personalDetails.phone}</p>
                                )}

                                {resumeData.personalDetails.location && (
                                    <p><strong>Location :</strong> {resumeData.personalDetails.location}</p>
                                )}

                                {resumeData.personalDetails.github && (
                                    <p><strong>GitHub :</strong> {resumeData.personalDetails.github}</p>
                                )}

                                {resumeData.personalDetails.linkedIn && (
                                    <p><strong>LinkedIn :</strong> {resumeData.personalDetails.linkedIn}</p>
                                )}

                            </div>

                        </div>

                        {/* SKILLS */}

                        <div className="leftSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">⚙️</span>

                                <h4>SKILLS</h4>

                            </div>

                            <div className="sectionData"></div>

                        </div>

                        {/* LANGUAGES */}

                        <div className="leftSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">🌍</span>

                                <h4>LANGUAGES</h4>

                            </div>

                            <div className="sectionData"></div>

                        </div>

                        {/* ACHIEVEMENTS */}

                        <div className="leftSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">🏆</span>

                                <h4>ACHIEVEMENTS</h4>

                            </div>

                            <div className="sectionData"></div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}

                    <div className="rightColumn">

                        {/* EXPERIENCE */}

                        <div className="rightSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">💼</span>

                                <h4>EXPERIENCE</h4>

                            </div>

                            <div className="sectionData"></div>

                        </div>

                        {/* EDUCATION */}

                        <div className="rightSection">

                            <div className="sectionTitle">

                                <span className="circleIcon">🎓</span>

                                <h4>EDUCATION</h4>

                            </div>

                            <div className="sectionData"></div>

                        </div>

                    </div>

                </div>

            </div>
        </>

    );

}
