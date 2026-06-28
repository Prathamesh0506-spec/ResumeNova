import { createContext, useState } from "react";

/* ================= RESUME CONTEXT ================= */

export const ResumeContext = createContext();

/* ================= CONTEXT PROVIDER ================= */

export function ResumeProvider({ children }) {

    /* Selected Resume Template */

    const [selectedTemplateId, setSelectedTemplateId] = useState(null);

    // Resume ची सर्व माहिती Context मध्ये store केली आहे.
    const [resumeData, setResumeData] = useState({

        personalDetails: {

            fullName: "",
            jobRole: "",

            email: "",
            phone: "",

            location: "",
            linkedIn: "",
            github: "",

            summary: ""

        },

        education: [],

        experience: [],

        projects: [],

        skills: [],

        certifications: [],

        achievements: [],

        languages: []

    });

    return (

        <ResumeContext.Provider
            value={{

                selectedTemplateId,
                setSelectedTemplateId,

                resumeData,
                setResumeData

            }}
        >

            {children}

        </ResumeContext.Provider>

    );

}