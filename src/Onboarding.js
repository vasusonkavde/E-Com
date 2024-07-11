// Onboarding.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = ({ step }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      navigate(`/onboarding${step + 1}`);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  const buttonContainerStyle = {
    top: step === 3 ? "240px" : "300px"
  };

  const getImageSource = () => {
    switch (step) {
      case 1:
        return require("./images/Indicator1.png");
      case 2:
        return require("./images/Indicator2.jpg");
      default:
        return null 
    }
  };

  return (
    <div className={`onboarding onboarding${step}`}>
      <div className="desc-container">
        <h1 className="desc-title">We serve incomparable delicacies</h1>
        <p className="desc-desc">
          All the best restaurants with their top menu waiting for you, they
          cant’t wait for your order!!
        </p>
        <div className="img-cont-ind">
        {getImageSource() && (
            <img src={getImageSource()} alt="Indicator" />
          )}
        </div>
        

        <div className="button-container" style={buttonContainerStyle}>
          {step < 3 && (
            <button className="btns" onClick={handleSkip}>
              Skip
            </button>
          )}
          {step === 3 && (
            <button className="btns" onClick={handleNext}>

              <img src={require("./images/Progress button.png")} alt="Error" width="100px" height="100px" />
            </button>
          )}
          {step <= 2 && (
            <button className="btns" onClick={handleNext}>
              Next
              <i
                className="bi bi-arrow-right"
                style={{ marginLeft: "5px"}}
              ></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
