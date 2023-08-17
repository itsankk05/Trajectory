import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz"; // Import your Quiz component here

const QuizContainer = () => {
  const [showQuiz, setShowQuiz] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Replace this with your actual quiz data
  const quizs = [
    {
      id: "01",
      question: "What subjects are you most interested in?",
      options: [
        "Mathematics and Science",
        "Languages and Literature",
        "Social Studies and History",
        "Art and Creativity",
      ],
    },
    {
      id: "02",
      question: "Which activities do you enjoy the most during your free time?",
      options: [
        "Solving puzzles or building things",
        "Reading books or writing stories",
        "Participating in debates or discussions",
        "Drawing, painting, or crafting",
      ],
    },
    {
      id: "03",
      question: "What type of job environment do you prefer?",
      options: [
        "Working in a laboratory or research setting",
        "Working in a quiet and focused environment",
        "Working in a collaborative and social setting",
        "Working in a visually creative environment",
      ],
    },
    // ... (other questions)
  ];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (questionIndex < quizs.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for next question
    }
  };

  const showTheResult = () => {
    // Implement logic to show the quiz result
  };

  return (
    <div>
      <Quiz
        showQuiz={showQuiz}
        question={quizs[questionIndex]}
        quizs={quizs}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
        handleAnswerSelection={handleAnswerSelection}
      />
    </div>
  );
};

export default QuizContainer;
