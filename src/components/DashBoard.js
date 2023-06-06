import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContainerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="background">
      <Link className="link" to="/">
        <span
          className="Back"
          style={{
            paddingLeft: "20px",
          }}
        >
          &#x3c; Back{" "}
        </span>
      </Link>
      <h1
        style={{
          paddingTop: "90px",
          paddingLeft: "550px",
        }}
      >
        I want help with...
      </h1>
      <div
        className={`foldable-container ${isOpen ? "open" : ""}`}
        onClick={handleContainerClick}
      >
        <div className="foldable-content">
          <div className="container-dash5">
            <div className="container-dash-content5"> Sleep</div>
          </div>
          <div className="container-dash6">
            <div className="container-dash-content6"> Anxiety</div>
          </div>
          <div className="container-dash7">
            <div className="container-dash-content7"> Low Mood </div>
          </div>
          <div className="container-dash8">
            <div className="container-dash-content8"> Stress</div>
          </div>
        </div>
        <div className="foldable-header">View All</div>
        {isOpen && (
          <div className="foldable-content">
            <div className="container-dash">
              <div className="container-dash-content"> Sleep</div>
            </div>
            <div className="container-dash1">
              <div className="container-dash-content1"> Anxiety</div>
            </div>
            <div className="container-dash2">
              <div className="container-dash-content2"> Low Mood </div>
            </div>
            <div className="container-dash3">
              <div className="container-dash-content3"> Stress</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
