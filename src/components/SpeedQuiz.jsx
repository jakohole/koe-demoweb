import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questions from '../model/questiondata';

function SpeedQuiz() {
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  /*const questions = [
    {
      question: "What is your favorite color?",
      choices: ["Red", "Blue", "Green", "Yellow", "Purple"],
      answer: 1 // index of the correct answer in the choices array
    },
    {
      question: "What is your favorite animal?",
      choices: ["Dog", "Cat", "Bird", "Fish", "Other"],
      answer: 0
    },
    // Add more questions here
  ];*/

  const handleShowChoices = () => {
    setShowChoices(true);
    setShowNextButton(true);
    setCountdownStarted(true);
  };

  const handleSelectChoice = (event) => {
    setSelectedChoice(event.target.value);
    setShowNextButton(true);
  };

  const handleNext = () => {
    // Check if the selected choice is correct
    const currentQuestion = questions[questionNumber];
    const isCorrect =
      currentQuestion.choices[selectedChoice] ===
      currentQuestion.choices[currentQuestion.answer];

    // Move to the next question
    setQuestionNumber(questionNumber + 1);
    setSelectedChoice(null);
    setShowNextButton(false);
    setShowChoices(false);
    setCountdownStarted(false);

    // Display a message based on the selected choice
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  useEffect(() => {
    // Move to the next question when the timer runs out
    if (countdownStarted && countdown === 0) {
      handleNext();
    }
  }, [countdownStarted, countdown]);

  const currentQuestion = questions[questionNumber];

  return (
    <div className="box" id="speedquiz">
      <p>{currentQuestion.question}</p>
      {showChoices ? (
        <div>
          <Timer countdownStarted={countdownStarted} />
          {currentQuestion.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                name="choice"
                value={index}
                checked={selectedChoice == index}
                onChange={handleSelectChoice}
              />
              <label htmlFor="choice">{choice}</label>
            </div>
          ))}
          {showNextButton && (
            <button onClick={handleNext}>
              {questionNumber === questions.length - 1 ? 'Next Part' : 'Next'}
            </button>
          )}
        </div>
      ) : (
        <button onClick={handleShowChoices}>Show choices</button>
      )}
    </div>
  );
}

export default SpeedQuiz;
