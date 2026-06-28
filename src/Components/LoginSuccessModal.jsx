import React from "react";

export default function LoginSuccessModal({ show }) {

    if (!show) return null;

    return (

        <div
            className="modal fade show"
            style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.45)"
            }}
        >

            <div className="modal-dialog modal-dialog-centered">

                <div
                    className="modal-content border-0"
                    style={{
                        width: "340px",
                        margin: "auto",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.25)"
                    }}
                >

                    <div
                        className="modal-body text-center"
                        style={{
                            padding: "45px 30px"
                        }}
                    >

                        {/* Success Circle */}

                        <div

                            style={{

                                width: "95px",
                                height: "95px",

                                borderRadius: "50%",

                                border: "4px solid #198754",

                                margin: "0 auto",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center"

                            }}

                        >

                            <span

                                style={{

                                    color: "#198754",

                                    fontSize: "55px",

                                    fontWeight: "bold"

                                }}

                            >

                                ✓

                            </span>

                        </div>

                        {/* Heading */}

                        <h3

                            style={{

                                color: "#198754",

                                fontWeight: "700",

                                marginTop: "25px"

                            }}

                        >

                            Oh Yeah!

                        </h3>

                        {/* Message */}

                        <p

                            style={{

                                color: "#6c757d",

                                marginTop: "15px",

                                fontSize: "15px",

                                lineHeight: "24px"

                            }}

                        >

                            You have successfully signed in
                            <br />
                            to ResumeNova.

                        </p>

                        {/* Button */}

                        <button

                            className="btn btn-success"

                            style={{

                                marginTop: "20px",

                                width: "75px",

                                borderRadius: "8px",

                                fontWeight: "600"

                            }}

                        >

                            OK

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}