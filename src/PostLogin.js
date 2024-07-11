// PostLogin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostLogin.css'; 

const PostLogin = () => {
  const navigate = useNavigate();

  const handleTracking = () => {
    navigate('/tracking');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="post-login">
      <div className="content">
        <img src={require("./images/Illustration Success.png")} alt="Error" width="180px" height="200px" />
        <h1 style={{marginButtom:"35px"}}>Login Successful</h1>
        <button className="button" onClick={handleTracking}>Go to Tracking Screen</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default PostLogin;
