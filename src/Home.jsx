import React from 'react';
import Raja from './assets/irshad.jpg';
import './Home.css';
import Resume from './assets/Irshad Raja K Resume.pdf';

const Home = () => {
  return (
    <div className="home-container py-5 mb-5">
      <div className="profile-info text-center mb-4">
        <h1 className="name-title">Irshad Raja</h1>
        <p className="subtitle">Web Developer | Designer | Content Creator</p>
      </div>
      <div className="profile-image text-center mb-4">
        <img src={Raja} alt="Irshad Raja" className="img-fluid profile-pic" />
      </div>
      <div className="about-me mt-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-content">
          I am a passionate web developer with a knack for creating dynamic and responsive web applications.
          I specialize in front-end development with React and Angular, and I'm also experienced in back-end
          technologies like Node.js and NestJS. I enjoy working on challenging projects and continuously
          expanding my skill set.
        </p>
      </div>
      <div className="skills mt-4">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li className="skills-item">JavaScript</li>
          <li className="skills-item">React</li>
          <li className="skills-item">Angular</li>
          <li className="skills-item">Node.js</li>
          <li className="skills-item">Bootstrap</li>
          <li className="skills-item">PostgreSQL</li>
        </ul>
      </div>
      <div className="projects mt-4">
        <h2 className="section-title">Recent Projects</h2>
        <div className="project-item mt-3">
          <h5 className="project-title">Fraud App Detection using Opinion Mining</h5>
          <p className="project-description">
            Developed a system to detect fraudulent apps using opinion mining techniques.
            The system analyzes reviews and ratings to classify apps as fraudulent or safe.
          </p>
        </div>
        <div className="project-item mt-3">
          <h5 className="project-title">KR Fashion: Your Reliable Shopping Hub</h5>
          <p className="project-description">
            Created a full-featured e-commerce platform using Angular, NestJS, and PostgreSQL.
            The platform offers a seamless shopping experience with secure transactions.
          </p>
        </div>
      </div>
      <div className="social-links text-center mt-4">
        <a href="https://www.linkedin.com/in/irshad-raja-k-7baaa524b/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/IrshadRaja06" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://leetcode.com/u/IrshadRaja/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fas fa-code fa-2x"></i>
        </a>
      </div>
      <div className="contact-info text-center mt-4">
        <p><strong>Email:</strong> irshadirfanaraja@gmail.com</p>
        <p><strong>Phone:</strong> +91 9952348932</p>
        <p><strong>Location:</strong> Tiruppur, India</p>
      </div>
      <div className="download-cv text-center mt-4">
        <a href={Resume} download className="btn btn-primary">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
