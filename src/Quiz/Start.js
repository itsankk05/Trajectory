import React from "react";
import { Link } from "react-router-dom";
import startImage from "./start_image.jpg"; // Import the image

const Start = ({ startQuiz, name }) => {
  return (
    <div
      className="text-white text-center bg-dark"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="col-lg-8">
        <img
          src={startImage}
          alt="Start"
          style={{ maxWidth: "100%", height: "auto", marginTop: "5%" }}
        />
        <h1 className="fw-bold mb-4">Ready For The Quiz {name}!!</h1>
        <Link to="/quiz">
          <button
            onClick={startQuiz}
            className="btn px-4 py-2 bg-light text-dark fw-bold"
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
