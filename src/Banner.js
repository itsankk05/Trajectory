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
      <div className="banner_description">
        <h1 style={{ textAlign: "center" }}>Hey There!</h1>
        <h3 style={{ textAlign: "left" }}>Description About the Website</h3>
      </div>

      <div className="banner_buttons">
        <Link to="/form">
          <button className="button-52">Button 52</button>
        </Link>
      </div>
    </header>
  );
}
