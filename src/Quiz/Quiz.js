import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Quiz.css";
import quiz10 from "../quiz.json";
import quiz12Science from "../quiz12Science.json";
import quiz12Commerce from "../quiz12Commerce.json";
import quiz12Arts from "../quiz12Arts.json";

const Quiz = ({
  selectedEducation,
  showQuiz,
  checkAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  const [question, setQuestion] = useState({});
  const [selectedQuizArray, setSelectedQuizArray] = useState([]);
  const [shuffledQuizArray, setShuffledQuizArray] = useState([]);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true); // State to control animation

  const isSubmitDisabled = !selectedAnswer;

  useEffect(() => {
    let fetchedQuizArray = [];
    if (selectedEducation == 1) {
      fetchedQuizArray = [...quiz10];
    } else if (selectedEducation == 2) {
      fetchedQuizArray = quiz12Science;
    } else if (selectedEducation == 3) {
      fetchedQuizArray = quiz12Commerce;
    } else if (selectedEducation == 4) {
      fetchedQuizArray = quiz12Arts;
    }

    if (fetchedQuizArray.length > 0) {
      const shuffled = fetchedQuizArray.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setSelectedQuizArray(shuffled.slice(0, 15));
      setShuffledQuizArray(shuffled.slice(0, 15));
      setQuestion(shuffled[0]); // Initialize with the first question
    }
    console.log(fetchedQuizArray);
  }, [selectedEducation]);

  const handleNextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < shuffledQuizArray.length) {
      setIsQuestionVisible(false); // Hide the question with animation
      setTimeout(() => {
        setQuestion(shuffledQuizArray[nextIndex]);
        nextQuestion();
        setIsQuestionVisible(true); // Show the new question with animation
      }, 400);
    } else {
      // Handle end of the quiz, e.g., show result or navigate to the result page
      showTheResult();
    }
  };

  useEffect(() => {
    document.title = "Quiz - Trajectory";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomPic = () => {
    let randomImage = [
      "https://www.clipartmax.com/png/middle/329-3296448_path-clipart-career-development-career-path-icon-png.png",
      "https://www.clipartmax.com/png/middle/279-2799552_you-knew-about-the-value-proposition-for-offshore-development-confused-about-your.png",
      "https://www.clipartmax.com/png/middle/231-2310721_how-do-we-prepare-new-chemistry-teachers-for-the-21st-career-path.png",
      "https://www.clipartmax.com/png/middle/146-1460866_career-path-career-path-png-transparent.png",
    ];

    let image = randomImage[Math.floor(Math.random() * randomImage.length)];
    return image;
  };

  return (
    <>
      <div
        className={`quiz ${
          isQuestionVisible ? "question-animation show" : "question-animation"
        }`}
      >
        <div className="quiz">
          {/* <img className="imagePosition" src={randomPic()}></img> */}

          <section className="bg-dark text-white">
            <div className="container" style={{ marginTop: "10%" }}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    className="card p-4"
                    style={{ background: "#3d3d3d", borderColor: "#646464" }}
                  >
                    <div className="d-flex justify-content-between gap-md-3">
                      <h5
                        className="mb-2 fs-normal lh-base"
                        style={{ color: "white" }}
                      >
                        {question?.question}
                      </h5>
                      <h5
                        style={{
                          color: "#60d600",
                          width: "100px",
                          textAlign: "right",
                        }}
                      >
                        {selectedQuizArray.indexOf(question) + 1} /{" "}
                        {selectedQuizArray?.length}
                      </h5>
                    </div>
                    <div>
                      {question?.options?.map((item, index) => (
                        <button
                          key={index}
                          className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark 
                    `}
                          onClick={(event) => checkAnswer(event, item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    {questionIndex + 1 !== selectedQuizArray.length ? (
                      <button
                        className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                        onClick={handleNextQuestion}
                        disabled={isSubmitDisabled}
                      >
                        Next Question
                      </button>
                    ) : (
                      <Link to="/result">
                        <button
                          className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                          disabled={!selectedAnswer}
                          onClick={showTheResult}
                        >
                          Show Result
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Quiz;