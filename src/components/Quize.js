
import React, { useState, useEffect, useCallback } from "react";
import "../App.css"

const questions = [
    {
        question: "1. What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
      },
      {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "3. What is the largest ocean on Earth?",
        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
        answer: "Pacific",
      },
      {
        question: "4. Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "5. What is the boiling point of water in Celsius?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: "100°C",
      },
      {
        question: "6. Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "7. Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen",
      },
      {
        question: "8. Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury",
      },
      {
        question: "9. What is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        answer: "Blue Whale",
      },
      {
        question: "10. What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au",
      },
      {
        question: "How was your quiz experience?",
        options: ["Very Good", "Good", "Average", "Bad"],
        answer: "Au",
      }
];

function Quiz({ onQuizEnd }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [userAnswers, setUserAnswers] = useState([]);

  // Define endQuiz with useCallback to make it stable
  const endQuiz = useCallback(() => {
    onQuizEnd(score, userAnswers);
  }, [score, userAnswers, onQuizEnd]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      endQuiz(); // End quiz if time runs out
    }
  }, [timeLeft, endQuiz]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };



const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
  
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  
    // Save the current answer to userAnswers array
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestion].question,
        selected: selectedOption,
        correct: questions[currentQuestion].answer,
      },
    ]);
  
    // Check if it's the last question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setTimeout(endQuiz, 0); // Delay endQuiz to ensure userAnswers is updated
    }
  };
  




  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="quiz" style={{ position: "relative" }}>
      <div className="timer">
        <h3>Time Left: {formatTime(timeLeft)}</h3>
      </div>
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="next">
      <button onClick={handleNextQuestion}>
        {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
      </button>
      </div>
    </div>
  );
}

export default Quiz;



