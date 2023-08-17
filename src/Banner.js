import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
export default function Banner() {
  //   const navigate = useNavigate();

  //   const navigateToform = () => {
  //     navigate("/form");
  //   };
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "https://png.pngtree.com/png-vector/20210828/ourmid/pngtree-orange-te-shat-anxious-girl-feeling-confused-and-open-hand-cartoon-png-image_3827180.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="mainpagecontent">
        <div className="banner_description">
          <h1 style={{ textAlign: "center" }}>Hey There!</h1>
          <h3 style={{ textAlign: "left" }}>
            Discover Your Path: Embark on a personalized journey towards your
            dream career. Whether you're in 10th grade, 12th grade, or college,
            our interactive quiz matches your aspirations, strengths, and
            interests to a world of exciting career possibilities. Unveil your
            potential and let us guide you towards a future filled with purpose.
          </h3>
        </div>
        <div className="careerimg">
          <a className="carrerimgg" href="/">
            <img src="shutter.png" alt="bga" />
          </a>
        </div>
      </div>

      <div className="banner_buttons">
        <Link to="/form">
          <button className="button-52">Start The Quiz</button>
        </Link>
      </div>
    </header>
  );
}
