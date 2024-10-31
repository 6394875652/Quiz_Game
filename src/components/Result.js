
import React from "react";
import "../App.css"

function Result({ score, userAnswers, onRestart }) {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {userAnswers.length}</p>

      <h3>Review Answers:</h3>
      <div className="review">
        {userAnswers.map((answer, index) => (
          <div key={index} className="question-review">
            <h4>Q: {answer.question}</h4>
            <p>Correct Answer: {answer.correct}</p>
            <p>Your Answer: {answer.selected || "No answer selected"}</p>
            <hr />
          </div>
        ))}
      </div>
      
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default Result;

