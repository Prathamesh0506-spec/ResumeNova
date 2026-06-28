import React, { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);

        alert("Login Successful");

        // Later we can redirect to edit page or dashboard
        window.location.href = "/edit";
    };

    return (
        <>
            <div
                className="container-fluid d-flex align-items-center justify-content-center"
                style={{
                    minHeight: "calc(100vh - 75px)",
                    backgroundColor: "#F2F3ED"
                }}
            >
                <div className="row w-100 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-4">

                        {/* LOGIN CARD */}
                        <div
                            className="p-4 shadow-lg border"
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderColor: "#DED38A",
                                borderRadius: "18px"
                            }}
                        >

                            {/* LOGIN HEADING */}
                            <div className="text-center mb-4">
                                <h3
                                    className="fw-bold mb-2"
                                    style={{ color: "#2A4467" }}
                                >
                                    Welcome Back
                                </h3>

                                <p
                                    className="mb-0"
                                    style={{ color: "#2A4467" }}
                                >
                                    Login to continue with ResumeNova.
                                </p>
                            </div>

                            {/* EMAIL INPUT */}
                            <div className="mb-3">
                                <label
                                    className="form-label fw-bold"
                                    style={{ color: "#2A4467" }}
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* PASSWORD INPUT */}
                            <div className="mb-3">
                                <label
                                    className="form-label fw-bold"
                                    style={{ color: "#2A4467" }}
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* FORGOT PASSWORD */}
                            <div className="text-end mb-3">
                                <small
                                    style={{
                                        color: "#DED38A",
                                        cursor: "pointer"
                                    }}
                                >
                                    Forgot Password?
                                </small>
                            </div>

                            {/* LOGIN BUTTON */}
                            <button
                                className="btn w-100 fw-bold py-2 rounded-pill shadow-sm"
                                style={{
                                    backgroundColor: "#2A4467",
                                    borderColor: "#2A4467",
                                    color: "white"
                                }}
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>

                            {/* GOOGLE LOGIN BUTTON */}
                            <button
                                className="btn btn-outline-dark w-100 fw-bold py-2 rounded-pill mt-3"
                            >
                                Continue with Google
                            </button>

                            {/* SIGN UP TEXT */}
                            <p
                                className="text-center mt-3 mb-0"
                                style={{ color: "#2A4467" }}
                            >
                                Don't have an account?{" "}
                                <span
                                    className="fw-bold"
                                    style={{
                                        color: "#DED38A",
                                        cursor: "pointer"
                                    }}
                                >
                                    Sign Up
                                </span>
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}