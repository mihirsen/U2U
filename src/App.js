import React from "react";
import "./Style.css";
import JoinIn from "../src/components/JoinIn";
import SignIn from "./components/SignIn";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Individual from "./components/Individual";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/SignIn" Component={SignIn} />
          <Route path="/JoinIn" Component={JoinIn} />
          <Route path="/Individual" Component={Individual} />
          <Route path="/DashBoard" Component={DashBoard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
