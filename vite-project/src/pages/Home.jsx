import React, {useState, useEffect} from "react";
import image from "../img/image.png";
import profile from "../img/profile.jpg";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./style.css";
import Contact from "./Contact";

const Home = () => {

  const roles = ["Softwere Engineer","Full Stack Developer", "Software Developer", "Front-End-Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(roleInterval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <div className="main">
        <div className="row-1">
          <h4>Hi i am</h4>
          <h1>Keshav Barkule</h1>
          <h3>
            And I'm <span className="sub-text">{roles[currentRole]}</span>
          </h3>
          <p>
            my dailly work to create new project and try new technology to{" "}
            <br /> lerns and tech. continousally learning and adapt new
            innovation
          </p>
          <div className="flex">
            <CiFacebook />
            <a href="https://www.linkedin.com/in/keshav-barkule-29799222b/"><CiLinkedin /></a>
            <a href="https://github.com/KBB2000"><FaGithub /></a>
            <FaInstagram />
          </div>
          <a
            href={`../public/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-2">Download CV</button>
          </a>
        </div>
        <div className="row-2">
          <img className="img-1" src={image} alt="image" />
        </div>
      </div>

      <div className="about-me-section">
        <div className="img-4">
          <img src={profile} alt="img-4" />
        </div>
        <div className="sub-text-2">
          <h1>About <span className="sub-text">Me</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptate necessitatibus incidunt qui, saepe tenetur fuga maiores
            rerum expedita cupiditate.
          </p>
          <NavLink to="/about">
            <button className="read-more">
              Read More <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </div>

      <div className="project-section">
        <h1 className="servise">
          Servises And <span className="sub-text">Project Overview</span>
        </h1>
        <div className="main-project">
          <div className="card">
            <img
              src="https://c0.wallpaperflare.com/preview/183/475/794/camera-desk-device-electronics.jpg"
              alt="img-1"
            />
            <h2>Front-End Developer</h2>
            <p>
              This project was created using a full-stack tech stack. If you
              want to create something similar, contact us.
            </p>
          </div>

          <div className="card">
            <img
              src="https://c0.wallpaperflare.com/preview/739/93/119/computer-keyboard-connection-contemporary-desk.jpg"
              alt="img-2"
            />
            <h2>Back-End Developer</h2>
            <p>
              This project was created using a full-stack tech stack. If you
              want to create something similar, contact us.
            </p>
          </div>

          <div className="card">
            <img
              src="https://c1.wallpaperflare.com/preview/325/617/134/computer-keyboard-apple-electronics.jpg"
              alt="img-3"
            />
            <h2>Database Develop</h2>
            <p>
              This project was created using a full-stack tech stack. If you
              want to create something similar, contact us.
            </p>
          </div>
          <NavLink to="/project">
            <button className="Full-Stack">
              Go To Full Stack Project <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </div>

      {/* //project section  */}
      <div className="wrap">
      <h1 className="pro">Projects <span className="sub-text">Section</span> </h1>
      <div className="project-section-2">
  <div className="main-project-1">
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg"
        alt="img-4"
      />
      <a href="https://gleeful-tanuki-14804c.netlify.app/" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
        alt="img-4"
      />
      <a href="https://teal-frangollo-87e10d.netlify.app/" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg"
        alt="img-4"
      />
      <a href="https://react-recipe-app-theta.vercel.app/52865" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/06/24/15/45/computer-820281_1280.jpg"
        alt="img-4"
      />
      <a href="https://stunning-boba-183d57.netlify.app/" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg"
        alt="img-4"
      />
      <a href="https://reunian.vercel.app/" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
    <div class="image-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/05/11/14/41/laptop-762548_1280.jpg"
        alt="img-4"
      />
      <a href="https://zealous-sound-gfy7kw.vercel.app/" target="_blank" class="open-tab-icon">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  </div>
</div>
</div>

<div className="skill-meadi">
  <h1>My  <span className="sub-text">Skill</span> Area</h1>
<div class="skills-container">
  <div class="skills-column">
    <h2>Frontend</h2>
    <div class="skill-item">
      <i class="fab fa-html5 html-icon"></i>
      <span>HTML</span>
    </div>
    <div class="skill-item">
      <i class="fab fa-css3-alt css-icon"></i>
      <span>CSS</span>
    </div>
    <div class="skill-item">
      <i class="fab fa-js-square js-icon"></i>
      <span>JavaScript</span>
    </div>
    <div class="skill-item">
      <i class="fab fa-react react-icon"></i>
      <span>React</span>
    </div>
  </div>

  <div class="skills-column">
    <h2>Backend</h2>
    <div class="skill-item">
      <i class="fab fa-node-js node-icon"></i>
      <span>Node.js</span>
    </div>
    <div class="skill-item">
      <i class="fab fa-node-js express-icon"></i>
      <span>Express.js</span>
    </div>
    <div class="skill-item">
      <i class="fab fa-python python-icon"></i>
      <span>Python</span>
    </div>
  </div>

  <div class="skills-column">
    <h2>Database</h2>
    <div class="skill-item">
    <i class="fas fa-database sql-icon"></i>

      <span>Sql</span>
    </div>
    <div class="skill-item">
      <i class="fas fa-database mongo-icon"></i>
      <span>MongoDB</span>
    </div>
    <div class="skill-item">
      <i class="fas fa-database mysql-icon"></i>
      <span>MySQL</span>
    </div>
  </div>
</div>
</div>
 <div className="contact">
 <Contact />
 </div>
    </div>
  );
};

export default Home;
