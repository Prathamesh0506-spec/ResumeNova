import { useContext } from "react";
import { ResumeContext } from "../../Context/ResumeContext";

export default function LeftPanel() {

    // Resume Data Context मधून घेतला आहे.
    const {
        resumeData,
        setResumeData
    } = useContext(ResumeContext);

    // Full Name update करण्यासाठी function तयार केले आहे.
    const handleFullNameChange = (event) => {

        setResumeData({

            ...resumeData,

            personalDetails: {

                ...resumeData.personalDetails,

                fullName: event.target.value

            }

        });

    };

    // Personal Details चे Input Handle करण्यासाठी Generic Function तयार केले आहे.
    const handlePersonalDetailsChange = (fieldName, value) => {

        setResumeData({

            ...resumeData,

            personalDetails: {

                ...resumeData.personalDetails,

                [fieldName]: value

            }

        });

    };

    return (
        <>
            <div
                className="p-4"
            >

                <h2
                    style={{
                        color: "#2A4467",
                        fontWeight: "bold"
                    }}
                >
                    ...
                    Left Panel
                </h2>

                <hr />

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Full Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={resumeData.personalDetails.fullName}
                        onChange={handleFullNameChange}
                    />

                </div>

                {/* Job Role साठी Live Input जोडला आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Job Role
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Job Role"
                        value={resumeData.personalDetails.jobRole}
                        onChange={(event) =>
                            handlePersonalDetailsChange("jobRole", event.target.value)
                        }
                    />

                </div>

                {/* Email साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={resumeData.personalDetails.email}
                        onChange={(event) =>
                            handlePersonalDetailsChange("email", event.target.value)
                        }
                    />

                </div>

                {/* Phone साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Phone
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        value={resumeData.personalDetails.phone}
                        onChange={(event) =>
                            handlePersonalDetailsChange("phone", event.target.value)
                        }
                    />

                </div>

                {/* Location साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Location
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                        value={resumeData.personalDetails.location}
                        onChange={(event) =>
                            handlePersonalDetailsChange("location", event.target.value)
                        }
                    />

                </div>

                {/* LinkedIn साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        LinkedIn
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter LinkedIn URL"
                        value={resumeData.personalDetails.linkedIn}
                        onChange={(event) =>
                            handlePersonalDetailsChange("linkedIn", event.target.value)
                        }
                    />

                </div>

                {/* GitHub साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        GitHub
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter GitHub URL"
                        value={resumeData.personalDetails.github}
                        onChange={(event) =>
                            handlePersonalDetailsChange("github", event.target.value)
                        }
                    />

                </div>

                {/* Summary साठी Input Field जोडले आहे. */}

                <div className="mb-3">

                    <label
                        className="form-label fw-bold"
                        style={{
                            color: "#2A4467"
                        }}
                    >
                        Professional Summary
                    </label>

                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write Your Professional Summary..."
                        value={resumeData.personalDetails.summary}
                        onChange={(event) =>
                            handlePersonalDetailsChange("summary", event.target.value)
                        }
                    />

                </div>

            </div>
        </>
    );

}