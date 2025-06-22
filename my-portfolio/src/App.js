
import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <nav className="navbar">
          <div className="logo">K Kesava Sai</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/path-to-your-resume.pdf" download>Resume</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm K Kesava Sai</h1>
          <p>Web Developer | AI & Data Science Enthusiast</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer and designer with expertise in creating stunning, functional websites and applications.
          Currently pursuing B.Tech in Artificial Intelligence and Data Science, I have a strong foundation in programming and data analytics.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill">HTML/CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Figma</div>
          <div className="skill">Framer</div>
          <div className="skill">Python</div>
          <div className="skill">Machine Learning</div>
          <div className="skill">Data Analytics</div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>E-Commerce Platform</h3>
          <p>A modern e-commerce platform with a seamless shopping experience, built with React and Node.js.</p>
        </div>
        <div className="project">
          <h3>Financial Dashboard</h3>
          <p>An intuitive dashboard for financial data visualization using modern design principles.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://linkedin.com/in/kesava-sai-458829298/">LinkedIn</a>
          <a href="https://github.com/kesavasai2000">GitHub</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 K Kesava Sai. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Portfolio;

