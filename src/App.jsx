import "./style.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Satyam<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#" className="resume-btn">
          Resume
        </a>
      </nav>


      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>
            Satyam <span>Developer</span>
          </h1>

          <h2>Python & React Developer</h2>

          <p className="hero-text">
            I build modern, responsive and user-friendly websites
            and applications using Python, React and modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-card">
          <div className="code-box">
            <p>const developer = {"{"}</p>
            <p>&nbsp;&nbsp;name: "Satyam",</p>
            <p>&nbsp;&nbsp;skills: "Python + React",</p>
            <p>&nbsp;&nbsp;passion: "Coding"</p>
            <p>{"}"}</p>
          </div>
        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Who I Am
        </h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              Hello! I'm Satyam, a passionate developer interested
              in Python, React and web development.
            </p>

            <p>
              I enjoy learning programming and creating practical
              projects that solve real-world problems.
            </p>

            <p>
              My goal is to continuously improve my development
              skills and build useful, beautiful applications.
            </p>
          </div>

          <div className="stats">

            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>100+</h3>
              <p>Problems Solved</p>
            </div>

            <div className="stat-card">
              <h3>1+</h3>
              <p>Years Learning</p>
            </div>

          </div>

        </div>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I Use
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Python</h3>
            <p>Programming & Backend</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <h3>HTML & CSS</h3>
            <p>Website Structure & Design</p>
          </div>

          <div className="skill-card">
            <h3>Flask</h3>
            <p>Python Backend</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-card">
            <h3>C++</h3>
            <p>Programming & DSA</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <p className="section-label">MY WORK</p>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-image">
              💪
            </div>

            <div className="project-content">
              <h3>FitLife</h3>

              <p>
                A modern fitness and workout website with
                exercises and responsive design.
              </p>

              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a href="#">View Project →</a>
            </div>

          </div>


          <div className="project-card">

            <div className="project-image">
              💰
            </div>

            <div className="project-content">

              <h3>Money Stories</h3>

              <p>
                A personal finance project focused on
                financial education and useful money ideas.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
              </div>

              <a href="#">View Project →</a>

            </div>

          </div>


          <div className="project-card">

            <div className="project-image">
              🐍
            </div>

            <div className="project-content">

              <h3>Snake Game</h3>

              <p>
                A classic Snake game created using Python
                and the Turtle module.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>Turtle</span>
              </div>

              <a href="#">View Project →</a>

            </div>

          </div>

        </div>

      </section>


      {/* Education */}
      <section id="education" className="section">

        <p className="section-label">MY JOURNEY</p>

        <h2 className="section-title">
          Education & Learning
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div>
              <span>2025 - Present</span>

              <h3>Programming & Web Development</h3>

              <p>
                Learning Python, C++, HTML, CSS,
                JavaScript and React.
              </p>
            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div>
              <span>Current</span>

              <h3>Problem Solving</h3>

              <p>
                Practicing programming problems and
                improving logical thinking.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact-section">

        <p className="section-label">CONTACT</p>

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="contact-intro">
          Have a project or idea? Send me a message.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Satyam. All Rights Reserved.
        </p>

        <p>
          Built with React + Python
        </p>

      </footer>

    </div>
  );
}

export default App;