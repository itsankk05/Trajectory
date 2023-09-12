import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./result.css";
import {
  class10Sci,
  class10Commerce,
  class10Arts,
  engineering,
  medical,
  Astronomy,
  Architecture,
  Computer_Science,
  Data_Science_and_Analytics,
  CA,
  BBA,
  bCom,
  LLB,
  CFA,
  Teaching,
  Fashion_Designing,
  Fine_Arts,
  Journalism_and_Mass_Communication,
  BA,
} from "../data";

function Result({ collectedAnswers, selectedEducation }) {
  useEffect(() => {
    document.title = "Result - Trajectory";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function searchAnswer(collectedAnswers, selectedEducation) {
    if (selectedEducation == 1) {
      let class10PointsScience = 0;
      let class10PointsCommerce = 0;
      let class10PointsArts = 0;

      for (let i = 0; i < collectedAnswers.length; i++) {
        console.table(`Checking answer: ${collectedAnswers[i]}`);
        if (class10Sci.includes(collectedAnswers[i])) {
          console.table(`Found match for: ${collectedAnswers[i]}`);

          class10PointsScience += 1;
        }
        if (class10Commerce.includes(collectedAnswers[i])) {
          class10PointsCommerce += 1;
          console.table(`Found match for: ${collectedAnswers[i]}`);
        }
        if (class10Arts.includes(collectedAnswers[i])) {
          class10PointsArts += 1;
          console.table(`Found match for: ${collectedAnswers[i]}`);
        }
      }

      // Determine the ranking
      const rankings = [
        { category: "Science", points: class10PointsScience },
        { category: "Commerce", points: class10PointsCommerce },
        { category: "Arts", points: class10PointsArts },
      ];

      rankings.sort((a, b) => b.points - a.points);
      // Return the rankings
      return rankings;
    }

    // Science ElseIf Statements
    else if (selectedEducation == 2) {
      let engineeringPoints = 0;
      let medicalPoints = 0;
      let archPoints = 0;
      let computerPoints = 0;
      let dsaPoints = 0;
      let astroPoints = 0;
      for (let i = 0; i < collectedAnswers.length; i++) {
        if (engineering.includes(collectedAnswers[i])) {
          engineeringPoints += 1;
        }
        if (medical.includes(collectedAnswers[i])) {
          medicalPoints += 1;
        }
        if (Architecture.includes(collectedAnswers[i])) {
          archPoints += 1;
        }
        if (Computer_Science.includes(collectedAnswers[i])) {
          computerPoints += 1;
        }
        if (Data_Science_and_Analytics.includes(collectedAnswers[i])) {
          dsaPoints += 1;
        }
        if (Astronomy.includes(collectedAnswers[i])) {
          astroPoints += 1;
        }
      }
      const rankings = [
        { category: "Engineering", points: engineeringPoints },
        { category: "Medical", points: medicalPoints },
        { category: "Astronomy", points: astroPoints },
        { category: "Data Science", points: dsaPoints },
        { category: "Computer Science", points: computerPoints },
        { category: "Architecture", points: archPoints },
      ];

      rankings.sort((a, b) => b.points - a.points);
      const topThreeRankings = rankings.slice(0, 3);

      return topThreeRankings;
    }

    // Commerece ElseIf Statements
    else if (selectedEducation == 3) {
      let caPoints = 0;
      let cfaPoints = 0;
      let bcomPoints = 0;
      let bbaPoints = 0;
      let llbPoints = 0;
      for (let i = 0; i < collectedAnswers.length; i++) {
        if (CA.includes(collectedAnswers[i])) {
          caPoints += 1;
        }
        if (BBA.includes(collectedAnswers[i])) {
          bbaPoints += 1;
        }
        if (bCom.includes(collectedAnswers[i])) {
          bcomPoints += 1;
        }
        if (LLB.includes(collectedAnswers[i])) {
          llbPoints += 1;
        }
        if (CFA.includes(collectedAnswers[i])) {
          cfaPoints += 1;
        }
      }
      const rankings = [
        { category: "Charted Accountant", points: caPoints },
        { category: "BBA", points: bbaPoints },
        { category: "B.Com", points: bcomPoints },
        { category: "Law", points: llbPoints },
        { category: "Chief Finance Officer", points: cfaPoints },
      ];

      rankings.sort((a, b) => b.points - a.points);
      const topThreeRankings = rankings.slice(0, 3);

      return topThreeRankings;
    }

    // Arts Statements
    else if (selectedEducation == 4) {
      let bapoints = 0;
      let JAMCpoints = 0;
      let FineArtspoints = 0;
      let Fashionpoints = 0;
      let Teachingpoints = 0;
      for (let i = 0; i < collectedAnswers.length; i++) {
        if (BA.includes(collectedAnswers[i])) {
          bapoints += 1;
        }
        if (Journalism_and_Mass_Communication.includes(collectedAnswers[i])) {
          JAMCpoints += 1;
        }
        if (Fine_Arts.includes(collectedAnswers[i])) {
          FineArtspoints += 1;
        }
        if (Fashion_Designing.includes(collectedAnswers[i])) {
          Fashionpoints += 1;
        }

        if (Teaching.includes(collectedAnswers[i])) {
          Teachingpoints += 1;
        }
      }
      const rankings = [
        { category: "BA", points: bapoints },
        { category: "Journalism", points: JAMCpoints },
        { category: "Fine Arts", points: FineArtspoints },
        { category: "Fashion Designing", points: Fashionpoints },
        { category: "Teaching", points: Teachingpoints },
      ];

      rankings.sort((a, b) => b.points - a.points);
      const topThreeRankings = rankings.slice(0, 3);

      return topThreeRankings;
    }
  }

  const rankings = searchAnswer(collectedAnswers, selectedEducation).sort(
    (a, b) => b.points - a.points
  );

  return (
    <section className="bg-dark text-white result-section">
      <div className="container">
        <div className="row vh-50 align-items-center justify-content-center">
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
                  <div
                    className={`rank-category ${getCategoryClass(
                      rank.category
                    )}`}
                  >
                    {rank.category}
                  </div>
                  {getCategoryLink(rank.category)}
                </li>
              ))}
            </ul>
            <Link to="/">
              <button
                style={{ textDecoration: "none" }}
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
  if (
    [
      "Arts",
      "Science",
      "Commerce",
      "Engineering",
      "Medical",
      "Architecture",
      "Computer Science",
      "Data Science",
      "Charted Accountant",
      "BBA",
      "B.Com",
      "Law",
      "Chief Finance Officer",
      "Teaching",
      "Fashion Designing",
      "Fine Arts",
      "Journalism",
      "BA",
    ].includes(category)
  ) {
    return "category-highlight";
  }
  // if(["Engineering", "Medical"].includes(category)){
  //   return "category-highlight";
  // }
  return "";
}

// Function to get the category link based on the category name
function getCategoryLink(category) {
  switch (category) {
    case "Arts":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://www.coursesafter10th.com/arts/arts-stream/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          Explore Arts
        </a>
      );
    case "Science":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://www.uniapply.com/blog/science-stream-after-10th/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          Discover Science 🧪
        </a>
      );
    case "Commerce":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          Browse Commerce 👓
        </a>
      );
    case "Engineering":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Engineering Options
        </a>
      );
    case "Medical":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Medical
        </a>
      );
    case "Architecture":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          Build Towers
        </a>
      );
    case "Computer Science":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Data Science":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Astrology":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Charted Accountant":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "BBA":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "B.Com":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Law":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Chief Finance Officer":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Teaching":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Fashion Designing":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Fine Arts":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "Journalism":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    case "BA":
      return (
        <a
          style={{ textDecoration: "none" }}
          href="https://leverageedu.com/blog/career-options-after-10th-in-commerce/"
          target="_blank"
          rel="noreferrer"
          className="category-link"
        >
          See Softwares
        </a>
      );
    default:
      return null;
  }
}

export default Result;
