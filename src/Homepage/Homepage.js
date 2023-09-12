import React, { useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";

export default function Homepage({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  useEffect(() => {
    document.title = "Home - Trajectory";
  }, []);

  return (
    <>
      <header className="banner">
        <div className="mainpagecontent">
          <div className="banner_description">
            <h1 className="description-title">
              Discover Your Path
            </h1>
            <p className="description-text">
              Embark on a personalized journey towards your dream career.
              Whether you're in 10th grade, 12th grade, or college, our
              interactive quiz matches your aspirations, strengths, and interests
              to a world of exciting career possibilities. Unveil your potential
              and let us guide you towards a future filled with purpose.
            </p>
          </div>
          <div className="careerimg">
            <a className="careerimg-link" href="/">
              <img src="shutter.png" alt="Background" />
            </a>
          </div>
        </div>

        <div className="banner_buttons">
          <a href="#form">
            <button className="button-start">Start Your Journey</button>
          </a>
        </div>
      </header>
      <div id="form">
        <Form
          name={name}
          setName={setName}
          selectedEducation={selectedEducation}
          setSelectedEducation={setSelectedEducation}
        />
      </div>
    </>
  );
}
