export default function About() {
  return (
    <section className="section about-section" aria-labelledby="about-heading">
      <h2 id="about-heading">About Me</h2>

      <div className="about-card">
        <div className="about-left" role="region" aria-label="Profile">
          <div className="avatar" aria-hidden="true">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#00bfa5" />
                  <stop offset="1" stopColor="#00796b" />
                </linearGradient>
              </defs>
              <rect rx="20" width="120" height="120" fill="url(#g)" />
              <g fill="#fff" transform="translate(20,18)">
                <circle cx="40" cy="30" r="18" />
                <path d="M0 92c0-22 36-22 40-22s40 0 40 22v4H0v-4z" />
              </g>
            </svg>
          </div>

          <p className="tagline">
            Shivam Glotra  <br/>
            Computer Science student 
            Front‑End & Mobile Developer
          </p>

          <div className="social-icons" aria-hidden="false">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.65.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.73-1.52-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.46 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.79 1.16 1.79 1.16 3.02 0 4.32-2.62 5.27-5.12 5.55.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.65.78.54C20.03 20.92 23.25 16.71 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.2 8.9h4.56V24H.2V8.9zM8.98 8.9h4.38v2.08h.06c.61-1.16 2.11-2.38 4.35-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.56v-6.58c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.71-2.53 3.48V24H8.98V8.9z" />
              </svg>
            </a>
          </div>

          <a
            className="cta-btn"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

        <div
          className="about-right"
          role="region"
          aria-label="Summary and skills"
        >
          <p>
            I am a Computer Science student passionate about Web programming and
            Mobile Application Development. I build responsive, modern, and
            interactive interfaces that delight users. I enjoy learning new
            technologies, contributing to open-source projects, and constantly
            challenging myself to grow as a developer.
          </p>

          <p>
            I have hands-on experience in web development, while interning at{" "}
            <strong>goeasy</strong>, where I work with technologies
            like <strong>React</strong>, <strong>Next.js</strong>, and{" "}
            <strong>Flutter</strong>.
          </p>
         <p>
  I also had the opportunity to volunteer at <strong>StuSynch Soudelka</strong>, a dynamic startup focused on creating a <strong>React Native</strong> app for students. In this role, I contributed as a backend developer, building robust APIs and handling server-side logic with <strong>Node.js</strong> and <strong>Express</strong>.
</p>



          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-list">
              <span className="skill-chip">React</span>
              <span className="skill-chip">Next.js</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">TypeScript</span>
              <span className="skill-chip">Node.js Express</span>
              <span className="skill-chip">Flutter</span>
              <span className="skill-chip">Java</span>
            </div>

            {/* <div className="skill-bars">
              <div className="skill">
                <div className="skill-name">React</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">JavaScript</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">TypeScript</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Flutter</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Node.Js Express</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Java</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
