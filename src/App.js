import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Quiz from "./Quiz/Quiz";
import Form from "./Form";
import Start from "./Quiz/Start";
import Result from "./Quiz/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Load JSON Data
  useEffect(() => {
    fetch("quiz.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // Check Answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add("bg-success");
        setMarks(marks + 1);
      } else {
        event.target.classList.add("bg-danger");
      }
    }
  };

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
    setQuestionIndex(questionIndex + 1);
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/form" element={<Form />} />
          <Route
            exact
            path="/start"
            element={<Start startQuiz={startQuiz} showStart={showStart} />}
          />
          <Route
            exact
            path="/quiz"
            element={
              <Quiz
                showQuiz={showQuiz}
                question={question}
                quizs={quizs}
                checkAnswer={checkAnswer}
                correctAnswer={correctAnswer}
                selectedAnswer={selectedAnswer}
                questionIndex={questionIndex}
                nextQuestion={nextQuestion}
                showTheResult={showTheResult}
              />
            }
          />
          <Route
            exact
            path="/result"
            element={
              <Result
                showResult={showResult}
                quizs={quizs}
                marks={marks}
                startOver={startOver}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// return (
//   <>
//     {/* Welcome Page */}
//     <Start startQuiz={startQuiz} showStart={showStart} />

//     {/* Quiz Page */}
//     <Quiz
//       showQuiz={showQuiz}
//       question={question}
//       quizs={quizs}
//       checkAnswer={checkAnswer}
//       correctAnswer={correctAnswer}
//       selectedAnswer={selectedAnswer}
//       questionIndex={questionIndex}
//       nextQuestion={nextQuestion}
//       showTheResult={showTheResult}
//     />

//     {/* Result Page */}
//     <Result
//       showResult={showResult}
//       quizs={quizs}
//       marks={marks}
//       startOver={startOver}
//     />
//   </>
// );
