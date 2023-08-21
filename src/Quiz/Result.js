import React from "react";
import { Link } from "react-router-dom";
import "./result.css"; // Import your custom CSS

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

  const rankings = searchAnswer(collectedAnswers).sort((a, b) => b.points - a.points);

  return (
    <section className="bg-dark text-white result-section">
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <h1 className="mb-4 fw-bold text-center result-heading">
              Seems Like You Are Interested in:
            </h1>
            <ul className="rankings-list">
              {rankings.map((rank, index) => (
                <li className="rank-item" key={index}>
                  <div className={`rank-label ${getRankLabelClass(index)}`}>
                    {getRankLabel(index)}
                  </div>
                  <div className={`rank-category ${getCategoryClass(rank.category)}`}>
                    {rank.category}
                  </div>
                  {getCategoryLink(rank.category)}
                </li>
              ))}
            </ul>
            <Link to="/form">
              <button
                onClick={startOver}
                className="btn py-2 px-4 btn-light fw-bold d-inline start-over-button"
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

// Function to get the rank label based on index
function getRankLabel(index) {
  switch (index) {
    case 0:
      return "First Choice";
    case 1:
      return "Second Choice";
    case 2:
      return "Third Choice";
    default:
      return `${index + 1}th Choice`;
  }
}

// Function to get the rank label class based on index
function getRankLabelClass(index) {
  if (index === 0) {
    return "first-choice";
  } else if (index === 1) {
    return "second-choice";
  } else if (index === 2) {
    return "third-choice";
  }
  return "other-choice";
}

// Function to get the category class based on the category name
function getCategoryClass(category) {
  if (["Arts", "Science", "Commerce"].includes(category)) {
    return "category-highlight";
  }
  return "";
}

// Function to get the category link based on the category name
function getCategoryLink(category) {
  switch (category) {
    case "Arts":
      return <a href="https://www.coursesafter10th.com/arts/arts-stream/" target="_blank"  rel="noreferrer" className="category-link">Explore Arts</a>;
    case "Science":
      return <a href="https://www.uniapply.com/blog/science-stream-after-10th/" target="_blank"  rel="noreferrer" className="category-link">Discover Science</a>;
    case "Commerce":
      return <a href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/" target="_blank"  rel="noreferrer" className="category-link">Browse Commerce</a>;
    default:
      return null;
  }
}

export default Result;
