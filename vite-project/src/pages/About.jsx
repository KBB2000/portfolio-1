import React, { useState, useEffect } from 'react';
import image from "../img/profile.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  const roles = ["Full Stack Developer", "Softwere Engineer", "Software Developer", "Front-End-Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(roleInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="about-section">
      <div className="text-about">
        <h1>Keshav Barkule</h1>
        <h3>
          I'm a <span>{roles[currentRole]}</span>
        </h3>
        <p>
        "I’m excited about working for this company because of its commitment to innovation
         and user-centered design. As a <span>Full stack developer</span>, I’m passionate about creating
          seamless, responsive, and visually appealing web experiences, and I admire how your 
          company leads in delivering cutting-edge digital solutions. I’m eager to contribute my skills to
         a team that values creativity and pushes the boundaries of modern web development
        </p>
        <NavLink to="/contact">
          <button className="contact-btn">Contact Us</button>
        </NavLink>
      </div>
      <div className="about-img">
        <img src={image} alt="Profile" />
      </div>
    </div>
  );
};

export default About;
