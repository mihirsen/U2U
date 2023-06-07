import React from "react";
import { Link } from "react-router-dom";

const Activity = () => {
  const handleRedirect = () => {
    window.location.href =
      "https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm";
  };
  const handleRedirect1 = () => {
    window.location.href =
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3698814/";
  };
  const handleRedirect2 = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=hJbRpHZr_d0&ab_channel=YogaWithAdriene";
  };
  const handleRedirect3 = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=g_BYB0R-4Ws&ab_channel=Children%27sHospitalColorado";
  };
  const handleRedirect4 = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=17GrPDnYt6E&ab_channel=SharpHealthCare";
  };

  return (
    <>
      <section className="ActivitySection">
        <section className="d-flex align-items-center justify-content-between py-4 px-5 mb-5">
          <h3>
            <Link className="link" to="/">
              <img
                src="./images/Logo.png"
                style={{
                  width: "90px",
                }}
              />
            </Link>
          </h3>
          <Link className="link" to="/DashBoard">
            <span
              className="DashBoard"
              style={{
                color: "Black",
                fontSize: "20px",
                cursor: "Pointer",
              }}
            >
              Dashboard
            </span>
          </Link>
          <div className="d-flex align-items-center">
            <h3 className="px-4 pt-2">Hello, Mihir Sen</h3>
            <img
              src="./images/ActivityProfileImg.svg"
              alt="..."
              id="ActivityProfileImg"
            />
          </div>
        </section>

        <section className="d-flex align-items-center justify-content-evenly">
          <section className="d-flex flex-column">
            <section
              className="d-flex align-items-center justify-content-between border border-dark rounded-4 py-3 px-3"
              id="section2"
            >
              <div className="d-flex align-items-center">
                <i className="material-icons">alarm</i>
                <div className="px-4">
                  <p>You have appointment with</p>
                  <p className="fw-bold">Dr. Akshat S Somvanshi</p>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  {/* <i className="material-icons">alarm</i> */}
                  <p className="fw-bold">7:00 am</p>
                </div>
                <p>Vellore, Tamil Nadu</p>
              </div>
            </section>

            <section className="section1">
              <h3 className="py-3 pt-5">Activities To Do</h3>
              <div className="d-flex align-items-center rounded-5 my-4 bg-light">
                <img
                  src="./images/ActivityImg1.svg"
                  alt="..."
                  id="ActivityImg1"
                />
                <div className="ps-5">
                  <h4>Yoga & Meditation</h4>
                  <h6
                    className="pb-3"
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    Yoga is a holistic practice that combines physical postures
                    (asanas), breathing techniques (pranayama), meditation, and
                    mindfulness. Yoga helps our body to keep away any type of
                    Mental Problem.
                  </h6>
                  <button
                    className="ActivityPlayButton"
                    onClick={handleRedirect2}
                  >
                    Play Video
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center rounded-5 my-4 bg-light">
                <img
                  src="./images/ActivityImg2.svg"
                  alt="..."
                  id="ActivityImg2"
                />
                <div className="ps-5">
                  <h4>Exercise</h4>
                  <h6
                    className="pb-3"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Engaging in regular exercise releases endorphins, reduces
                    stress, improves sleep, and boosts self-esteem.
                  </h6>
                  <button
                    className="ActivityPlayButton"
                    onClick={handleRedirect3}
                  >
                    Play Video
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center rounded-5 my-4 bg-light">
                <img
                  src="./images/A.jpeg"
                  alt="..."
                  id="ActivityImg1"
                  style={{
                    width: "120px",
                    marginLeft: "5%",
                  }}
                />
                <div className="ps-5">
                  <h4>Maintain a balanced diet</h4>
                  <h6
                    className="pb-3"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Have a Proper Meal.
                  </h6>
                  <button
                    className="ActivityPlayButton"
                    onClick={handleRedirect4}
                  >
                    Play Video
                  </button>
                </div>
              </div>
            </section>
          </section>

          <section
            className="d-flex flex-column align-items-center justify-content-center bg-light rounded-5"
            id="ArticleSection"
          >
            <h3 className="p-2 pt-4">Articles To Read</h3>
            <div className="my-3 d-flex flex-column align-items-center mx-5">
              <img
                src="./images/ActivityArticleImg1.svg"
                alt="..."
                id="ActivityArticleImg1"
                onClick={handleRedirect}
                style={{
                  cursor: "pointer",
                }}
              />
              <p className="text-center">
                Mental Illness Stigma,Help Seeking, and Public Health Programs
              </p>
            </div>
            <div className="my-3">
              <img
                src="./images/ActivityArticleImg2.svg"
                alt="..."
                id="ActivityArticleImg1"
                onClick={handleRedirect1}
                style={{
                  cursor: "pointer",
                }}
              />
              <p className="text-center px-5">Building Better Mental Health</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Activity;
