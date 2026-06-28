import { useContext } from "react";
import { ResumeContext } from "../../Context/ResumeContext";

import SideBarResume from "../Tempelets/SideBarResume/sideBarResume";
import HarvardResume from "../Tempelets/harvardResume/harvardResume";
import ModernResume from "../Tempelets/ModernResume/modernResume";

// टेम्पलेट Components मधील sibling folder मधून import केले आहेत.
export default function RightPanel() {

    // Context मधून निवडलेला Template ID घेणे
    const {
        selectedTemplateId
    } = useContext(ResumeContext);

    console.log("Selected Template ID :", selectedTemplateId);

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
                    Right Panel
                </h2>

                <hr />

                <h4
                    style={{
                        color: "#2A4467"
                    }}
                >
                    Selected Template ID : {selectedTemplateId}
                </h4>

                {/* Resume ला मध्यभागी fit करून scroll ठेवला आहे. */}

                <div
                    style={{
                        width: "100%",
                        height: "75vh",
                        overflow: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "20px",
                        background: "#f3f4f6",
                        borderRadius: "10px"
                    }}
                >

                    <div
                        style={{
                            transform: "scale(0.65)",
                            transformOrigin: "top center"
                        }}
                    >

                        {
                            selectedTemplateId === 1 &&
                            <ModernResume />
                        }

                        {
                            selectedTemplateId === 2 &&
                            <SideBarResume />
                        }

                        {
                            selectedTemplateId === 3 &&
                            <HarvardResume />
                        }

                        {
                            selectedTemplateId === null &&
                            <p className="mt-3">
                                Live Resume Preview will come here...
                            </p>
                        }

                    </div>

                </div>

            </div>
        </>
    );

}