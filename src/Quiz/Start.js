import React from "react";
import { Link } from "react-router-dom";

const Start = ({ startQuiz, name }) => {
  return (
    <div className="text-white text-center bg-dark">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <h1 className="fw-bold mb-4" style={{ marginTop: "28%" }}>
            Ready For The Quiz {name}!!
          </h1>
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
    </div>
  );
};

export default Start;
