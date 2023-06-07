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
        <img
          src="./images/Logo.png"
          style={{
            width: "90px",
            marginTop: "2%",
            marginLeft: "2%",
          }}
        />
      </Link>

      <Link className="link" to="/Activity">
        <span
          className="DashBoard"
          style={{
            color: "Black",
            fontSize: "30px",
            cursor: "Pointer",
            marginLeft: "37%",
          }}
        >
          Activity
        </span>
      </Link>
      <Link className="link" to="/">
        <span
          className="Back"
          style={{
            paddingLeft: "590px",
            fontSize: "25px",
          }}
        >
          &#x3c; Back{" "}
        </span>
      </Link>
      <h1
        style={{
          paddingTop: "40px",
          paddingLeft: "550px",
        }}
      >
        What Are You Here For?
      </h1>
      <div>
        <div className="foldable-content">
          <div className="container-dash5">
            <Link className="link" to="/Appointment">
              <div className="container-dash-content5">
                Psychotherapy/ <br /> Counseling
              </div>
            </Link>
          </div>
          <div className="container-dash6">
            <Link className="link" to="/Appointment">
              <div className="container-dash-content6">
                {" "}
                Cognitive-Behavioral Therapy (CBT)
              </div>
            </Link>
          </div>
          <div className="container-dash7">
            <Link className="link" to="/Appointment">
              <div className="container-dash-content7">
                {" "}
                Dialectical Behavior Therapy (DBT)
              </div>
            </Link>
          </div>
          <div className="container-dash8">
            <Link className="link" to="/Appointment">
              <div className="container-dash-content8">
                Mindfulness-Based Therapies
              </div>
            </Link>
          </div>
        </div>
        <div className="foldable-header">
          <span
            className={`foldable-container ${isOpen ? "open" : ""}`}
            onClick={handleContainerClick}
          >
            View All
          </span>
        </div>
        {isOpen && (
          <div className="foldable-content">
            <Link className="link" to="/Appointment">
              <div className="container-dash">
                <div className="container-dash-content"> Family Therapy</div>
              </div>
            </Link>
            <div className="container-dash1">
              <Link className="link" to="/Appointment">
                <div className="container-dash-content1">
                  Couples Therapy/Marriage Counseling
                </div>
              </Link>
            </div>

            <Link className="link" to="/Appointment">
              <div className="container-dash2">
                <div className="container-dash-content2">
                  Supportive Therapy
                </div>
              </div>
            </Link>
            <div className="container-dash3">
              <Link className="link" to="/Appointment">
                <div className="container-dash-content3">
                  {" "}
                  Psychiatric Medication Management
                </div>
              </Link>
              <div className="foldable1-content">
                <div className="container-dash9">
                  <Link className="link" to="/Appointment">
                    <div className="container-dash-content9">
                      Person-Centered Therapy{" "}
                    </div>
                  </Link>
                </div>
                <div className="container-dash10">
                  <Link className="link" to="/Appointment">
                    <div className="container-dash-content10">
                      {" "}
                      Psychodynamic Therapy
                    </div>
                  </Link>
                </div>
                <div className="container-dash11">
                  <Link className="link" to="/Appointment">
                    <div className="container-dash-content11">
                      {" "}
                      Solution-Focused Brief Therapy
                    </div>
                  </Link>
                </div>
                <div className="container-dash12">
                  <Link className="link" to="/Appointment">
                    <div className="container-dash-content12">
                      Family Systems Therapy
                    </div>
                  </Link>
                </div>
              </div>
              {
                <div className="foldable1-content">
                  <Link className="link" to="/Appointment">
                    <div className="container-dash13">
                      <div className="container-dash-content13"> Sleep</div>
                    </div>
                  </Link>

                  <Link className="link" to="/Appointment">
                    <div className="container-dash14">
                      <div className="container-dash-content14"> Anxiety</div>
                    </div>
                  </Link>
                  <div className="container-dash15">
                    <Link className="link" to="/Appointment">
                      <div className="container-dash-content15"> Low Mood </div>
                    </Link>
                  </div>
                  <div className="container-dash16">
                    <Link className="link" to="/Appointment">
                      <div className="container-dash-content16"> Stress</div>
                    </Link>
                  </div>
                </div>
              }
            </div>
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default DashBoard;
