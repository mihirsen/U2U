import React from "react";
import Logo from "../Assests/logo.jpg";
import girlPic from "../Assests/Girlpic.png";
import { Link } from "react-router-dom";
import "./Style.css";

const SignIn = () => {
  return (
    <div className="background">
      <Link className="link" to="/">
        <img
          src="./images/Logo.png"
          style={{
            width: "90px",
            marginTop: "2%",
            marginLeft: "2%",
          }}
        />
      </Link>

      <Link className="link" to="/">
        <span
          className="Back"
          style={{
            paddingLeft: "1290px",
            fontSize: "25px",
          }}
        >
          &#x3c; Back{" "}
        </span>
      </Link>

      <h1 className="sign-in">Sign in</h1>
      <div className="container">
        <input className="email" type="Email" placeholder="Email-ID" />
        <input className="pass" type="password" placeholder="Password" />
        <Link to="/DashBoard">
          <span className="login-btn">Login</span>
        </Link>
        <img src={girlPic} alt="girlpic" className="pic" />
      </div>
      <p className="disclaimer">
        Don’t have a account?{" "}
        <Link className="link" to="/JoinIn">
          <span className="create">Create account</span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
