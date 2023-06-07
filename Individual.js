import React from "react";
import girlPic from "../components/Girlpic.png";
import { Link } from "react-router-dom";
import "./Style.css";

const Individual = () => {
  return (
    <div className="background">
      <div className="background">
        <Link className="link" to="/">
          <span
            className="Back"
            style={{
              paddingLeft: "1390px",
              fontSize: "25px",
            }}
          >
            &#x3c; Back{" "}
          </span>
        </Link>

        <Link className="link" to="/JoinIn">
          <span className="Enterprise1">Enterprise</span>
        </Link>
        <h1 className="individual1">Individual</h1>
        <div className="container-1">
          <input type="text" id="name" placeholder="First Name*" />
          <input type="text" id="last-name" placeholder="Last Name*" />
          <input type="email" id="email-id" placeholder="Email Id*" />
          <input type="text" id="company" placeholder="Date of Birth*" />
          <input type="text" id="position" placeholder="What do You do?*" />
          <input type="text" id="message" placeholder="Message*" />
          <Link to="/SignIn" className="link">
            <span className="get-start-btn">Get Started</span>
          </Link>
          <img src={girlPic} alt="girlpic" className="pic-1" />
        </div>
        <p className="disclaimer-1">
          Already have an account?{" "}
          <Link className="link" to="/">
            <span className="create">Sign in</span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Individual;
