import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function WorkSpace() {
    return (
        <>
            <div
                className="container-fluid p-0"
                style={{
                    height: "calc(100vh - 75px)",
                    backgroundColor: "#F2F3ED"
                }}
            >
                <div
                    className="d-flex h-100"
                >

                    {/* ================= LEFT PANEL ================= */}

                    <div
                        style={{
                            width: "40%",
                            borderRight: "1px solid #D8D8D8",
                            overflow: "hidden"
                        }}
                    >
                        <LeftPanel />
                    </div>

                    {/* ================= RIGHT PANEL ================= */}

                    <div
                        style={{
                            width: "60%",
                            overflow: "hidden"
                        }}
                    >
                        <RightPanel />
                    </div>

                </div>
            </div>
        </>
    );
}