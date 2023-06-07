import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className=" background">
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
      <h1 className="closed">
        Temporary the Service is Closed <br />
        <h2 className="error">404</h2>{" "}
      </h1>
    </div>
  );
};

export default Subscribe;
