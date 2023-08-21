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

  function searchAnswer(collectedAnswers) {
    const class10Sci = [
      "Mathematics and Science",
      "Solving puzzles or building things",
      "Working in a laboratory or research setting",
      "Analyzing data and solving problems",
      "Becoming a scientist or engineer",
      "Mathematics and technological advancements",
      "Complex problem-solving and logical reasoning",
      "Engineering and computer science",
      "Innovating and contributing to scientific advancements",
      '"Logic will get you from A to B. Imagination will take you everywhere." - Albert Einstein',
      "Solving intricate puzzles and mathematical challenges",
      "By analyzing and breaking down the components logically",
      "Laboratories and hands-on experimentation",
      "Solving complex problems and making discoveries",
      "Making a positive impact on individuals and society",
      "Flexible hours with opportunities for creativity",
      "By seeking information and researching thoroughly",
      "Structured and organized routine",
    ];
    const class10Commmerce = [
      "Languages and Literature",
      "Art and Creativity",
      "Solving puzzles or building things",
      "Participating in debates or discussions",
      "Working in a quiet and focused environment",
      "Working in a collaborative and social setting",
      "Working in a visually creative environment",
      "Connecting with people and understanding their perspectives",
      "Pursuing a career in writing or journalism",
      "Visual arts, design principles, and aesthetics",
      "Transforming ideas into visually appealing creations",
      "Literature and journalism",
      "mathematical challenges",
      "Fine arts and graphic design",
      "Inspiring and influencing people through words",
      "Creating visual designs and artistic projects",
      "Flexible hours with opportunities for creativity",
      "Structured and organized routine",
      "Understanding diverse perspectives and helping others",
      '"The pen is mightier than the sword." - Edward Bulwer-Lytton',
    ];
    const class10Arts = [
      "Social Studies and History",
      "Art and Creativity",
      "Reading books or writing stories",
      "Participating in debates or discussions",
      "Drawing, painting, or crafting",
      "Working in a quiet and focused environment",
      "Working in a collaborative and social setting",
      "Working in a visually creative environment",
      "Expressing thoughts clearly in writing",
      "Visualizing and creating artistic designs",
      "Pursuing a career in writing or journalism",
      "Working in a field related to human behavior or society",
      "Exploring careers in the arts or design",
      "History, cultures, and societal dynamics",
      "Literature and journalism",
      "Psychology and social work",
      "Bringing positive changes to individuals and communities",
      "Enriching lives through creative expressions",
      "Interacting with people and understanding their emotions",
      "By using your imagination and thinking creatively",
      "Flexible hours with opportunities for creativity",
      "Literature, language, and communication",
      '"Art enables us to find ourselves and lose ourselves at the same time." - Thomas Merton',
      '"Empathy is seeing with the eyes of another, listening with the ears of another, and feeling with the heart of another." - Alfred Adler',
    ];

    let class10PointsScience = 0;
    let class10PointsCommerce = 0;
    let class10PointsArts = 0;

    for (let i = 0; i < collectedAnswers.length; i++) {
      console.table(`Checking answer: ${collectedAnswers[i]}`);
      if (class10Sci.includes(collectedAnswers[i])) {
        console.table(`Found match for: ${collectedAnswers[i]}`);

        class10PointsScience += 1;
      }
      if (class10Commmerce.includes(collectedAnswers[i])) {
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

    // rankings.sort((a, b) => b.points - a.points);

    // Return the rankings
    return rankings;
  }

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
                collectedAnswers={collectedAnswers}
                searchAnswer={searchAnswer}
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
