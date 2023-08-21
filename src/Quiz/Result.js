import React from "react";
import { Link } from "react-router-dom";

function Result({
  searchAnswer,
  showResult,
  quizs,
  startOver,
  collectedAnswers,
}) {
  if (!showResult) {
    return null;
  }

  const rankings = searchAnswer(collectedAnswers);

  //   return (
  //     <div className="result-container">
  //       <h2>Result</h2>
  //       <div className="rankings">
  //         <h3>Rankings:</h3>
  //         <ul>
  //           {rankings.map((rank, index) => (
  //             <li key={index}>
  //               {index + 1}. {rank.category}: {rank.points} points
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       {/* Rest of your Result component */}
  //     </div>
  //   );
  // }

  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showResult ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 vw-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <h1 className="mb-2 fw-bold">
              Seems Like You Are <br />
              Interested in:
            </h1>
            <ul style={{ listStyleType: "none" }}>
              {rankings.map((rank, index) => (
                <li key={index}>
                  {index + 1}. {rank.category}:{" "}
                  {((rank.points / 15) * 100).toFixed(2)} %
                </li>
              ))}
            </ul>
            <Link to="/form">
              <button
                onClick={startOver}
                className="btn py-2 px-4 btn-light fw-bold d-inline"
              >
                Start Over
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;
