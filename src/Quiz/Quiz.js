import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Quiz.css";
import quiz10 from "../../src/quiz.json";
import quiz12Science from "../../src/quiz12Science.json";
import quiz12Commerce from "../../src/quiz12Commerce.json";
import quiz12Arts from "../../src/quiz12Arts.json";

const Quiz = ({
  selectedEducation,
  checkAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  const [question, setQuestion] = useState({});
  const [selectedQuizArray, setSelectedQuizArray] = useState([]);
  const [shuffledQuizArray, setShuffledQuizArray] = useState([]);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const imageArray = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "13.png",
    "14.png",
  ];
  const [currentImage, setCurrentImage] = useState(imageArray[0]); // State to store the current image

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
      setQuestion(shuffled[0]);
    }
    console.log(fetchedQuizArray);
  }, [selectedEducation]);

  const handleNextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < shuffledQuizArray.length) {
      setIsQuestionVisible(false);
      setTimeout(() => {
        setQuestion(shuffledQuizArray[nextIndex]);
        setCurrentImage(randomPic()); // Change the current image
        nextQuestion();
        setIsQuestionVisible(true);
      }, 400);
    } else {
      // Handle end of the quiz, e.g., show result or navigate to the result page
      showTheResult();
    }
  };

  useEffect(() => {
    document.title = "Quiz - Trajectory";
    setCurrentImage(randomPic()); // Initialize the current image

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImages = imageArray;
  const randomPic = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    console.log("IMAGE URL", backgroundImages[randomIndex]);
    return backgroundImages[randomIndex];
  };

  return (
    <>
      <div
        className={`quiz ${
          isQuestionVisible ? "question-animation show" : "question-animation"
        }`}
      >
        <div>
          <section className="bg-dark text-white">
            <img className="imagePosition" src={currentImage} />

            <div className="container" style={{ marginTop: "10%" }}>
              <div>
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