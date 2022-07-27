import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./App.css";
import netflixLogo from "./assets/netflixLogo.png";

function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link className="goBack" to="/">
          <img src={netflixLogo} alt="" />
        </Link>
      </nav>
      <div className="app">
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/about/*" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
