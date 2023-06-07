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
            <h1 className="fw-bold">Begin Your Journey to Recovery!</h1>
          </div>
          <div className="py-4">
            <h3>
              Experience a transformative approach to mental health through
              technology, tailored to your needs.
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
