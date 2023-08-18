import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Quiz from "./Quiz/Quiz";
import Form from "./Form/Form";
import Start from "./Quiz/Start";
import Result from "./Quiz/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About/About";

function App() {
  // const [answer, setAnswer] = useState([]);
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [collectedAnswers, setCollectedAnswers] = useState([]);

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

  // State to store the collected answers
  // Function to add selected answer to the array
  const storeAnswer = (selectedAnswer) => {
    setCollectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  // Next Quesion
  const nextQuestion = () => {
    storeAnswer(selectedAnswer);
    console.log(collectedAnswers);
    setSelectedAnswer("");
    setQuestionIndex(questionIndex + 1);
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  // const searchAnswer = () => {};

  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setSelectedAnswer(selected);
      event.target.classList.add("bg-success");
    }
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
    // setAnswer([]);
    // setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    // setMarks(0);
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
                collectedAnswers={collectedAnswers}
                storeAnswer={storeAnswer}
                showQuiz={showQuiz}
                question={question}
                quizs={quizs}
                checkAnswer={checkAnswer}
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
                // marks={marks}
                startOver={startOver}
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
