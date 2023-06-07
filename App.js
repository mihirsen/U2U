import React from "react";
import "./Style.css";
import JoinIn from "../src/components/JoinIn";
import SignIn from "./components/SignIn";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Individual from "./components/Individual";
import Subscribe from "./components/Subscribe";
import Activity from "./components/Activity";
import Appointment from "./components/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/SignIn"
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route path="/JoinIn" Component={JoinIn} />
          <Route path="/Individual" Component={Individual} />
          <Route path="/DashBoard" Component={DashBoard} />
          <Route path="/Subscribe" Component={Subscribe} />
          <Route path="/Activity" Component={Activity} />
          <Route path="/Appointment" Component={Appointment} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
