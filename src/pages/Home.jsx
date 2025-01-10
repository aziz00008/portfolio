// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mypic from '../assets/profile.jpeg'; // Ensure the path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-4 text-center" data-aos="fade-right">
          <img
            src={Mypic}
            alt="Your Name"
            className="img-fluid mb-4"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Text Column */}
        <div className="col-md-8 text-center text-md-start" data-aos="fade-left">
          <h1 className="display-4">Hi this is Aziz, </h1>
          <p className="lead">A driven developer who enjoys designing and building meaningful technology</p>
          <Link to="/projects" className="btn btn-primary btn-lg mt-3">
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
