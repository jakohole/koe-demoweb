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
  const [quizOver, setQuizOver] = useState(false);
  const [buttonText, setButtonText] = useState('Next');

  const handleShowChoices = () => {
    setShowChoices(true);
    setShowNextButton(false);
    setSelectedChoice(null);
    setCountdownStarted(true);
  };

  const handleSelectChoice = (event) => {
    setSelectedChoice(parseInt(event.target.value));
    setShowNextButton(true);
  };

  const handleNext = () => {
    // Check if the selected choice is correct
    const currentQuestion = questions[questionNumber];
    const isCorrect =
      currentQuestion.choices[selectedChoice] ===
      currentQuestion.choices[currentQuestion.answer];
    // Move to the next question or end of the quiz
    if (questionNumber === questions.length - 1) {
      //setQuizOver(true);
      //setButtonText('Next Part');
      setShowNextButton('Submit');
      setShowChoices(false);
      setCountdown(20);
    } else {
      setQuestionNumber(questionNumber + 1);
      setShowChoices(false);
      setShowNextButton(false);
      setSelectedChoice(null);
      setCountdownStarted(false);
      setButtonText('Next');

      // Display a message based on the selected choice
      /*
  if (isCorrect) {
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
  */
    }
    setCountdown(20);
  };

  const [countdown, setCountdown] = useState(20);
  useEffect(() => {
    let intervalId;
    if (countdownStarted && countdown > 0) {
      intervalId = setInterval(() => setCountdown(countdown - 1), 1000);
    } else if (countdownStarted && countdown === 0) {
      clearInterval(intervalId);
      handleNext();
    }
    return () => clearInterval(intervalId);
  }, [countdown, countdownStarted, handleNext]);

  const currentQuestion = questions[questionNumber];

  return (
    <div className="box" id="speedquiz">
      <p>{currentQuestion.question}</p>
      {currentQuestion && showChoices ? (
        <div>
          <Timer countdown={countdown} />
          {currentQuestion.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                name="choice"
                value={index}
                checked={selectedChoice === index}
                onChange={handleSelectChoice}
              />
              <label htmlFor="choice">{choice}</label>
            </div>
          ))}
          {showNextButton === 'Submit' ? (
            <button onClick={handleNext}>Submit</button>
          ) : (
            <button onClick={handleNext}>
              {questionNumber === questions.length - 1 ? 'Submit' : 'Next'}
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
