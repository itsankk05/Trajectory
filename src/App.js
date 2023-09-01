import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Form from "./Form/Form";
import Start from "./Quiz/Start";
import Result from "./Quiz/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About/About";
import { class10Sci, class10Commerce, class10Arts } from "./data";
// import Footer from "./Footer";

// import searchAnswer from "./Quiz/Function";

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

  // Start Over
  // const startOver = () => {
  //   setShowStart(true);
  //   setShowResult(false);
  //   setShowQuiz(false);

  //   setSelectedAnswer("");
  //   setQuestionIndex(0);
  //   const wrongBtn = document.querySelector("button.bg-danger");
  //   wrongBtn?.classList.remove("bg-danger");
  //   const rightBtn = document.querySelector("button.bg-success");
  //   rightBtn?.classList.remove("bg-success");
  // };

  function searchAnswer(collectedAnswers) {
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
      // Add similar logic for other categories if needed
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
                setSelectedAnswer={setSelectedAnswer}
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
                collectedAnswers={collectedAnswers}
                searchAnswer={searchAnswer}
                showResult={showResult}
                quizs={quizs}
                // startOver={startOver}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        {/* , <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
