// This Code is for Frontend of the Quiz App project using react.js framework of javascript. 

import React, { useState } from "react";
import axios from "axios";
import "./quiz.css";

function LoginPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onLogin(name, email);
  };

  return (
    <div className="login-page">
      <h1>Welcome to the Quiz App!</h1>
      <form onSubmit={handleSubmit}>
        <label className="info">
          Name:
          <input
            className="data"
            type="text"
            placeholder=" xyz"
            onChange={handleNameChange}
          />
        </label>
        <label className="info">
          Email:
          <input
            className="data"
            type="email"
            placeholder=" xyz@gmail.com"
            onChange={handleEmailChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A) London", "B) Paris", "C) Berlin", "D) Madrid"],
    answer: "B) Paris",
  },
  {
    question: "What is the largest country in the world?",
    options: ["A) China", "B) USA", "C) Russia", "D) India"],
    answer: "C) Russia",
  },
  {
    question: "What is the currency of Japan?",
    options: ["A) Yen", "B) Dollar", "C) Euro", "D) Pound"],
    answer: "A) Yen",
  },
];

const Quiz = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleLogin = (name, email) => {
    setName(name);
    setEmail(email);
  };

  const handleAnswerButtonClick = async (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      score = score + 1;
      const response = await axios.post("http://localhost:3001/api/data", {
        name,
        email,
        score,
      });
      console.log(response.data);
    }
  };

  if (!name) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1} / {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                onClick={() => handleAnswerButtonClick(option)}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
};

export default App;
