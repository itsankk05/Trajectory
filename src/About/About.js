import React from "react";
import "./About.css";
import Footer from "../Footer";

export default function About() {
  return (
    <div>
      <header className="head">
        <h1>About Us</h1>
        <p>Welcome to our team of passionate individuals.</p>
      </header>

      <section className="description">
        We are a diverse team of students and an experienced professor,
        <br />
        Dedicated to creating innovative solutions for career guidance. Each
        member brings their unique skills and perspectives to the table.
      </section>

      <section className="team-members">
        <div className="member-box professor-box student-box">
          {/* <img
            className="imgSize"
            // src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/12/IMG-20230406-WA0022.jpg"
            alt="Dr. P. VelMurugan"
          /> */}
          <h2>Dr. P. VelMurugan</h2>
          <p>Professor</p>
          <div className="social-links">
            <a
              href="https://www.srmist.edu.in/faculty/dr-p-velmurugan/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://logodix.com/logo/1787040.png" alt="icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="student-members">
        <div className="member-box student-box">
          <img
            className="imgSize"
            src="https://media.licdn.com/dms/image/D5603AQGUCE5hThM5Eg/profile-displayphoto-shrink_400_400/0/1689183263013?e=1697673600&v=beta&t=DLYpHkDKAKQD3NlfbcE6FVScF1ppsjw49k-bQwNb1fQ"
            alt="Jeet Shah"
          />
          <h2>
            Jeet
            <br /> Shah
          </h2>
          <p>Designer</p>
          <div className="social-links">
            <a
              href="https://github.com/jeetshah07"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jeet-shah07/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className="member-box student-box">
          <img
            className="imgSize"
            src="https://media.licdn.com/dms/image/D4E03AQGpzzSmve5rLQ/profile-displayphoto-shrink_400_400/0/1673022776367?e=1697673600&v=beta&t=jHYRe6Ryczr4ipUYoLX0cy_MyHEPxaqLTqOloPM3-3Q"
            alt="Ank Agarwal"
          />
          <h2>
            Ank <br />
            Agarwal
          </h2>
          <p>Tech Enthusiast</p>
          <div className="social-links">
            <a
              href="https://github.com/itsankk05"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ankagarwal05/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className="member-box student-box">
          <img
            className="imgSize"
            src="https://media.licdn.com/dms/image/D4D03AQEyCDOr4GCdRg/profile-displayphoto-shrink_400_400/0/1689789327258?e=1697673600&v=beta&t=srL_x7yyoJ2m8RGXwpTjD-gIqaCVGW9LV8raEtNceuA"
            alt="Tushar Mahajan"
          />
          <h2>Tushar Mahajan</h2>
          <p>Strategic Thinker</p>
          <div className="social-links">
            <a
              href="https://github.com/tusharmahajan22"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tusharmahajan22/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="imgSize"
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
