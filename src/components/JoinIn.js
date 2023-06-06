import React from "react";
import girlPic from "../components/Girlpic.png";
import { Link } from "react-router-dom";

const JoinIn = () => {
  return (
    <div className="background">
      <Link className="link" to="/">
        <span className="Back">&#x3c; Back </span>
      </Link>
      <span className="Enterprise">Enterprise</span>
      <Link className="link" to="/Individual">
        <h1 className="individual">Individual</h1>
      </Link>
      <div className="container-1">
        <input type="text" id="name" placeholder="First Name*" />
        <input type="text" id="last-name" placeholder="Last Name*" />
        <input type="email" id="email-id" placeholder="Email Id*" />
        <input type="text" id="company" placeholder="Company Name*" />
        <input type="text" id="position" placeholder="Position/Role*" />
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
  );
};

export default JoinIn;
