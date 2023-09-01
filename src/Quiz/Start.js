import React from "react";
import { Link } from "react-router-dom";

const Start = ({ startQuiz, showStart, name }) => {
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
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
      </div>
    </section>
  );
};

export default Start;
