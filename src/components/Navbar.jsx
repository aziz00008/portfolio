// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Lottie from 'react-lottie-player';
import AnimationData from '../assets/button-animation.json'; // Replace with the path to your Lottie animation JSON


const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"><Lottie
      loop
      animationData={AnimationData}
      play
      style={{ width: 60, height: 60 }}
    /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/portfolio">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
