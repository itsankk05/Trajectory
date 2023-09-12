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
                selectedEducation={selectedEducation}
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
