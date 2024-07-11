// Login.js
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (response) => {
    console.log(response);
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify({ email }));
      navigate("/post-login"); 
    } else {
      alert("Invalid credentials or user not registered");
      navigate("/register"); 
    }
  };

  const handleSubmit = () => {
    handleLogin();
  };

  return (
    <div className="auth">
      <h1 className="title">Login to your account.</h1>
      <p className="sub-title">Please sign in to your account</p>
      <label className="form-label" htmlFor="email">Email Address</label>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="form-label" htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button" onClick={handleSubmit}>Sign in</button>
      <div style={{padding:"30px 30px",paddingRight:"40px", width:"100%"}}>
      <div className="or">
        <span>Or sign in with</span>
      </div>
      </div>   
      <GoogleOAuthProvider clientId="1033436990978-i1ivubk23e2b157aqlbv23ejbbt3knid.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLogin}
          onError={handleLogin}
          redirectUri="http://localhost:3000"
        />
      </GoogleOAuthProvider>
      <p style={{marginTop: "40px", fontWeight:"500"}}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
