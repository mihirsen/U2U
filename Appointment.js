import React from "react";
import { Link } from "react-router-dom";
import AppointmentImgs from "../Assests/Appointment.svg";
import date from "../Assests/date.png";
import time from "../Assests/time.png";

const Appointment = () => {
  return (
    <div className="background">
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
            Appointment
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
      <section className="d-flex w-100 h-100 mainsec">
        <img src={AppointmentImgs} alt="..." className="" id="AppointmentImg" />
        <div
          className="d-flex flex-column align-items-center rounded-3 "
          id="appointment"
        >
          <div>
            <h3>Book A Therapy</h3>
            <h3>Session Today</h3>
          </div>
          <div>
            <h4>Schedule</h4>
            <img src={date} className="date" /> <br />
            <img src={time} className="time" />
          </div>
          <div>
            <h4>Location</h4>
            <input type="text" placeholder="Location*" className="location" />
          </div>
          <div>
            <h4>Message</h4>
            <input
              type="text"
              placeholder="Message for Doctor*"
              className="mess"
            />
          </div>
          <Link className="link" to="/Activity">
            <button className="BookAppointment my-5">Book Appointement</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
