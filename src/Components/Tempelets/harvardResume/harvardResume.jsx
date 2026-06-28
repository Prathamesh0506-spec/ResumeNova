import "./harvardResume.css";
import { useContext } from "react";
import { ResumeContext } from "../../../Context/ResumeContext";

// Resume Data Context मधून घेतला आहे.

export default function HarvardResume() {
    const {
    resumeData
} = useContext(ResumeContext);


    return (

        <>

            <div className="harvardResume">

                {/* ================= HEADER ================= */}

                <div className="resumeHeader">

                    {/* FULL NAME */}

                    <h1>

    {
        resumeData.personalDetails.fullName || "JORDAN TAYLOR"
    }

</h1>

                    {/* CONTACT DETAILS */}

                    <div className="contactRow">

                        <span>📍</span>

                        <span>•</span>

                        <span>📞</span>

                        <span>•</span>

                        <span>✉️</span>

                        <span>•</span>

                        <span>in</span>

                        <span>•</span>

                        <span>Git</span>

                    </div>

                </div>



                {/* ================= EDUCATION ================= */}

                <div className="resumeSection">

                    <h2>
                        EDUCATION
                    </h2>

                    <div className="sectionLine"></div>

                    <div className="sectionContent">

                    </div>

                </div>



                {/* ================= EXPERIENCE ================= */}

                <div className="resumeSection">

                    <h2>
                        EXPERIENCE
                    </h2>

                    <div className="sectionLine"></div>

                    <div className="sectionContent">

                    </div>

                </div>



                {/* ================= PROJECTS ================= */}

                <div className="resumeSection">

                    <h2>
                        PROJECTS
                    </h2>

                    <div className="sectionLine"></div>

                    <div className="sectionContent">

                    </div>

                </div>



                {/* ================= SKILLS ================= */}

                <div className="resumeSection">

                    <h2>
                        SKILLS
                    </h2>

                    <div className="sectionLine"></div>

                    <div className="sectionContent">

                    </div>

                </div>



                {/* ================= ACHIEVEMENTS ================= */}

                <div className="resumeSection">

                    <h2>
                        ACHIEVEMENTS
                    </h2>

                    <div className="sectionLine"></div>

                    <div className="sectionContent">

                    </div>

                </div>

            </div>

        </>

    );

}