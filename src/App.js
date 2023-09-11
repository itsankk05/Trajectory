import "./App.css";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
// import Form from "./Form/Form";
import Start from "./Quiz/Start";
import Result from "./Quiz/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./About/About";
import {
  class10Sci,
  class10Commerce,
  class10Arts,
  engineering,
  medical,
  CA,
  BBA,
  bCom,
  LLB,
  CFA,
} from "./data";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [collectedAnswers, setCollectedAnswers] = useState([]);
  const [name, setName] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // State to store the collected answers
  // Function to add selected answer to the array
  const storeAnswer = (selectedAnswer) => {
    setCollectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  // Next Quesion
  const nextQuestion = () => {
    console.log(collectedAnswers);
    console.log(collectedAnswers.length);
    storeAnswer(selectedAnswer);
    setSelectedAnswer("");
    setQuestionIndex(questionIndex + 1);
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  const checkAnswer = (event, selected) => {
    setSelectedAnswer(selected); // Select the clicked answer
    event.target.classList.add("bg-success"); // Add highlighting

    // Deselect previously selected answer and remove highlighting
    const allOptions = event.target.parentElement.querySelectorAll(".option");
    allOptions.forEach((option) => {
      if (option !== event.target) {
        option.classList.remove("bg-success");
      }
    });
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

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

    //Science ElseIf Statements
    else if (selectedEducation == 2) {
      let engineeringPoints = 0;
      let medicalPoints = 0;
      for (let i = 0; i < collectedAnswers.length; i++) {
        if (engineering.includes(collectedAnswers[i])) {
          engineeringPoints += 1;
        }
        if (medical.includes(collectedAnswers[i])) {
          medicalPoints += 1;
        }
      }
      const rankings = [
        { category: "Engineering", points: engineeringPoints },
        { category: "Medical", points: medicalPoints },
        // { category: "Arts", points: class10PointsArts },
      ];

      rankings.sort((a, b) => b.points - a.points);
      return rankings;
    }

    //Commerece ElseIf Statements
    else if (selectedEducation == 3) {
      let caPoints = 0;
      // let baPoints = 0;
      let cfaPoints = 0;
      let bcomPoints = 0;
      let bbaPoints = 0;
      // let bmsPoints = 0;
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
        // if (BAinEco.includes(collectedAnswers[i])) {
        //   baPoints += 1;
        // }
        // if (BMS.includes(collectedAnswers[i])) {
        //   bmsPoints += 1;
        // }
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
    // else if (selectedEducation == 4) {
    // }
  }
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage
                name={name}
                setName={setName}
                selectedEducation={selectedEducation}
                setSelectedEducation={setSelectedEducation}
              />
            }
          />

          {/* START COMPONENT */}
          <Route
            exact
            path="/start"
            element={
              <Start startQuiz={startQuiz} showStart={showStart} name={name} />
            }
          />

          {/* QUIZ COMPONENT */}
          <Route
            exact
            path="/quiz"
            element={
              <Quiz
                setSelectedEducation={setSelectedEducation}
                selectedEducation={selectedEducation}
                collectedAnswers={collectedAnswers}
                storeAnswer={storeAnswer}
                showQuiz={showQuiz}
                checkAnswer={checkAnswer}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                questionIndex={questionIndex}
                nextQuestion={nextQuestion}
                showTheResult={showTheResult}
              />
            }
          />

          {/* RESULT COMPONENT */}
          <Route
            exact
            path="/result"
            element={
              <Result
                collectedAnswers={collectedAnswers}
                searchAnswer={searchAnswer}
                showResult={showResult}
                selectedEducation={selectedEducation}
                // quizs={quizs}
                // startOver={startOver}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
