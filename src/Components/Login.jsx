import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSuccessModal from "./LoginSuccessModal";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showModal,setShowModal]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  useEffect(()=>{
    if(showModal){
      const timer=setTimeout(()=>navigate("/edit"),1500);
      return ()=>clearTimeout(timer);
    }
  },[showModal,navigate]);

  const handleLogin=()=>{
    if(email.trim()===""||password.trim()===""){
      alert("Please fill all fields");
      return;
    }
    console.log("Email:",email);
    console.log("Password:",password);
    setShowModal(true);
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center"
        style={{minHeight:"calc(100vh - 75px)",backgroundColor:"#F2F3ED"}}>
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="p-4 shadow-lg border"
              style={{backgroundColor:"#FFF",borderColor:"#DED38A",borderRadius:"18px"}}>
              <div className="text-center mb-4">
                <h3 className="fw-bold mb-2" style={{color:"#2A4467"}}>Welcome Back</h3>
                <p className="mb-0" style={{color:"#2A4467"}}>Login to continue with ResumeNova.</p>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" style={{color:"#2A4467"}}>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email"
                  value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" style={{color:"#2A4467"}}>Password</label>
                <input type="password" className="form-control" placeholder="Enter your password"
                  value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>

              <div className="text-end mb-3">
                <small style={{color:"#DED38A",cursor:"pointer"}}>Forgot Password?</small>
              </div>

              <button
                className="btn w-100 fw-bold py-2 rounded-pill shadow-sm"
                style={{backgroundColor:"#2A4467",borderColor:"#2A4467",color:"#FFF"}}
                onClick={handleLogin}>
                Sign In
              </button>

              <button className="btn btn-outline-dark w-100 fw-bold py-2 rounded-pill mt-3">
                Continue with Google
              </button>

              <p className="text-center mt-3 mb-0" style={{color:"#2A4467"}}>
                Don't have an account? <span className="fw-bold" style={{color:"#DED38A",cursor:"pointer"}}>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <LoginSuccessModal show={showModal} />
    </>
  );
}
