// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Or '@emailjs/browser' if you chose to use it

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage submission status
  const [status, setStatus] = useState(null); // Can be 'success' or 'error'

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Success Alert */}
          {status === 'success' && (
            <div className="alert alert-success" role="alert">
              Your message has been sent successfully!
            </div>
          )}

          {/* Error Alert */}
          {status === 'error' && (
            <div className="alert alert-danger" role="alert">
              There was an error sending your message. Please try again.
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          {/* Additional Contact Options */}
          <div className="mt-4 text-center">
            <p>Or reach out to me on:</p>
            <a href="mailto:youremail@example.com" className="text-decoration-none me-3">
              <FaEnvelope size={30} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
