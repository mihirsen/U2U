import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-evenly"
        id="LandingPage"
      >
        <section className="d-flex flex-column" id="LandingPageSection1">
          <div>
            <h1 className="fw-bold">Lorem ipsum dolor sit amet, consectetur</h1>
          </div>
          <div className="py-4">
            <h3>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </h3>
          </div>
          <Link to="/JoinIn">
            <button id="LandingPageBtn" className="my-4">
              Join Now
            </button>
          </Link>
        </section>
        <section>
          <img
            src="./images/LandingPageImg.svg"
            alt="LandingPageImg"
            id="LandingPageImg"
          />
        </section>
      </section>
    </>
  );
};

export default LandingPage;
