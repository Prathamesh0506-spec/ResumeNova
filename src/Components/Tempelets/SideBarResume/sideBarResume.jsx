import "./SideBarResume.css";
import { useContext } from "react";
import { ResumeContext } from "../../../Context/ResumeContext";

// ResumeContext पर्यंत योग्य relative path वापरला आहे.

// Resume Data Context मधून घेतला आहे.
// CSS फाईलचे नाव actual file प्रमाणे import केले आहे.

export default function SidebarResume() {
    const {
    resumeData
} = useContext(ResumeContext);

    return (
        <>
            <div className="resume-sheet">

                {/* LEFT SIDEBAR */}

                <div className="resume-left">

                    {/* PROFILE IMAGE */}

                    <div className="profile-section">
                        <div className="profile-circle"></div>
                    </div>

                    {/* CONTACT */}

                    <div className="left-section">
                        <h3>CONTACT</h3>

                        <div className="left-content">
                            {/* Dynamic Contact Details */}
                        </div>
                    </div>

                    {/* EDUCATION */}

                    <div className="left-section">
                        <h3>EDUCATION</h3>

                        <div className="left-content">

                        </div>
                    </div>

                    {/* SKILLS */}

                    <div className="left-section">
                        <h3>SKILLS</h3>

                        <div className="left-content">

                        </div>
                    </div>

                    {/* LANGUAGES */}

                    <div className="left-section">
                        <h3>LANGUAGES</h3>

                        <div className="left-content">

                        </div>
                    </div>

                </div>


                {/* RIGHT CONTENT */}

                <div className="resume-right">

                    {/* NAME */}

                    <div className="header">

                        <h1>

    {
        resumeData.personalDetails.fullName || "PRATHAMESH OHOL"
    }

</h1>
                       <h2>

    {
        resumeData.personalDetails.jobRole || "FULL STACK DEVELOPER"
    }

</h2>
                    </div>


                    {/* PROFILE */}

                    <div className="resume-section">

                        <div className="section-heading">

                            <div className="icon-circle">
                                👤
                            </div>

                            <h3>PROFILE</h3>

                            <div className="heading-line"></div>

                        </div>

                        <div className="section-content">

                        </div>

                    </div>



                    {/* EXPERIENCE */}

                    <div className="resume-section">

                        <div className="section-heading">

                            <div className="icon-circle">
                                💼
                            </div>

                            <h3>PROFESSIONAL EXPERIENCE</h3>

                            <div className="heading-line"></div>

                        </div>

                        <div className="section-content">

                        </div>

                    </div>



                    {/* PROJECTS */}

                    <div className="resume-section">

                        <div className="section-heading">

                            <div className="icon-circle">
                                ⭐
                            </div>

                            <h3>PROJECTS</h3>

                            <div className="heading-line"></div>

                        </div>

                        <div className="section-content">

                        </div>

                    </div>



                    {/* ACHIEVEMENTS */}

                    <div className="resume-section">

                        <div className="section-heading">

                            <div className="icon-circle">
                                🏆
                            </div>

                            <h3>ACHIEVEMENTS</h3>

                            <div className="heading-line"></div>

                        </div>

                        <div className="section-content">

                        </div>

                    </div>



                    {/* CERTIFICATIONS */}

                    <div className="resume-section">

                        <div className="section-heading">

                            <div className="icon-circle">
                                🎓
                            </div>

                            <h3>CERTIFICATIONS</h3>

                            <div className="heading-line"></div>

                        </div>

                        <div className="section-content">

                        </div>

                    </div>

                </div>

            </div>
        </>
    );

}