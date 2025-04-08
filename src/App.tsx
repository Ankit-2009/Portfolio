import { useState, useEffect } from "react";
import profilePicture from "./assets/pfp.jpg";
import projectImage from "./assets/image.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <h3>Portfolio</h3>
            <ul className="nav-links">
              <li>
                <a
                  href="#home"
                  className={activeSection === "home" ? "active" : ""}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => handleNavClick("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === "skills" ? "active" : ""}
                  onClick={() => handleNavClick("skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === "projects" ? "active" : ""}
                  onClick={() => handleNavClick("projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text-content">
              <h1>
                Hi, I'm <span className="highlight">Moon Blade</span>
              </h1>
              <p className="hero-text">
                @Ankit_2009 | Frontend Developer | Gaming Enthusiast | Aesthetic
                Artist
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={profilePicture} alt="Profile Picture" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Ankit Singh, a passionate frontend developer with a keen interest in
                creating beautiful and interactive web experiences. When I'm not
                coding, you can find me exploring new games or discovering new
                music.
              </p>
              <p>
                My journey in tech started in 2024 at IIIT, Lucknow. I love
                combining my creative side with technical skills to build
                engaging user interfaces and smooth web applications.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-content">
                  <h3>6+</h3>
                  <p>Months Experience</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-content">
                  <h3>1</h3>
                  <p>Project Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-content">
                <h3>Frontend Development</h3>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-content">
                <h3>Tools & Libraries</h3>
                <ul>
                  <li>Git</li>
                  <li>Adobe Illustrator</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                  <li>Npm</li>
                  <li>Vite</li>
                </ul>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-content">
                <h3>Interests</h3>
                <ul>
                  <li>Gaming</li>
                  <li>Music</li>
                  <li>Web Design</li>
                  <li>User Experience</li>
                  <li>Creative Coding</li>
                  <li>Digital Art</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={projectImage} alt="Project Preview" />
              </div>
              <div className="project-content">
                <h3>QuickHire</h3>
                <p>
                  QuickHire is an online platform that connects freelancers with
                  clients looking for specific projects to be completed. Clients
                  post jobs or projects, and freelancers bid on these projects,
                  offering their services at competitive rates. The platform
                  covers a wide range of categories, such as web development,
                  graphic design, writing, marketing, and more.
                  <br></br>
                  <br></br>
                  [We have yet to deploy it.]
                </p>
                <div className="project-links">
                  <a href="#" className="btn">
                    View Project
                  </a>
                  <a href="#" className="btn btn-outline">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>
                I'm currently learning and open to new opportunities and
                collaborations.
              </p>
              <div className="contact-details">
                <p>
                  <a href="mailto:your.email@example.com">
                    ✉️ Send me an email
                  </a>
                </p>
                <p>
                  <a href="tel:+1234567890">☎️ Want to call me?</a>
                </p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Ankit_2009. All rights reserved.</p>
            <div className="social-links">
              <a
                href="https://github.com/Ankit-2009"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-singh-5738b9328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/2Ankit2009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
