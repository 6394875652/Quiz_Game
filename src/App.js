// import React, { useState } from "react";
// import Quiz from './components/Quize';
// import Result from "./components/Result";
// import './App.css'

// function App() {
//   const [score, setScore] = useState(0);
//   const [isQuizFinished, setIsQuizFinished] = useState(false);

//   const handleQuizEnd = (finalScore) => {
//     setScore(finalScore);
//     setIsQuizFinished(true);
//   };

//   const restartQuiz = () => {
//     setScore(0);
//     setIsQuizFinished(false);
//   };

//   return (
//     <div className="App">
//       <h1>Online Quiz Game</h1>
//       {isQuizFinished ? (
//         <Result score={score} onRestart={restartQuiz} />
//       ) : (
//         <Quiz onQuizEnd={handleQuizEnd} />
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import Quiz from "./components/Quize";
import Result from "./components/Result";
import "./App.css"

function App() {
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleQuizEnd = (finalScore, answers) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setIsQuizFinished(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setIsQuizFinished(false);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Online Quiz Game</h1>
      {isQuizFinished ? (
        <Result score={score} userAnswers={userAnswers} onRestart={restartQuiz} />
      ) : (
        <Quiz onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
}

export default App;

