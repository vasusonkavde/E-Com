import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (response) => {
    console.log(response);
  };

  const handleSubmit = () => {
    if (!agree) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }
    console.log({ email, username, password });
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ email, username, password })
    );
    alert("Registration successful");
    navigate("/login"); 
  };

  return (
    <GoogleOAuthProvider clientId="1033436990978-i1ivubk23e2b157aqlbv23ejbbt3knid.apps.googleusercontent.com">
      <div className="auth">
        <h1 className="register-title">Create your new account</h1>
        <p className="sub-title">Create an account to start looking for the food you like</p>
        <label className="form-label" htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="username">User Name</label>
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <div className="checkbox-container">
          <input
            className="input-checkbox"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
          <label className="label-title">
              I Agree with <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
          </label>
        </div>
        <button className="button" onClick={handleSubmit}>Register</button>
        <div
          style={{ padding: "30px 30px", paddingRight: "40px", width: "100%" }}
        >
          <div className="or">
            <span>Or sign in with</span>
          </div>
        </div>
        <div className="google-login">
          <GoogleLogin onSuccess={handleRegister} onError={handleRegister} />
        </div>
        <p style={{marginTop:"25px", fontWeight:"500"}}>
          Have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
