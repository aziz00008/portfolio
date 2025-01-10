// src/pages/About.jsx
import React from 'react';
import profilePic from '../assets/profile.jpeg'; // Ensure you have a profile picture in src/assets/

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={profilePic} alt="Your Name" className="img-fluid rounded-circle mb-3" />
        </div>
        <div className="col-md-8">
          <p>
            [Write a brief introduction about yourself, your background, skills, and interests.]
          </p>
          <p>
            [Add more details about your journey, what motivates you, and your professional goals.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
