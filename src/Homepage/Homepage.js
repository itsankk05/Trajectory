import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Form from "../Form/Form";

export default function Homepage({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  useEffect(() => {
    document.title = "Home - Trajectory";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="banner">
        <div className="mainpagecontent">
          <div className="banner_description">
            <h3>
              Discover Your Path: Embark on a personalized journey towards your
              dream career. Whether you're in 10th grade, 12th grade, or
              college, our interactive quiz matches your aspirations, strengths,
              and interests to a world of exciting career possibilities. Unveil
              your potential and let us guide you towards a future filled with
              purpose.
            </h3>
          </div>
          <div className="careerimg">
            <a className="carrerimgg" href="/">
              <img src="shutter.png" alt="bga" />
            </a>
          </div>
        </div>

        <div className="banner_buttons">
          <a href="#form">
            <button className="button-52">Start Your Journey</button>
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
