import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function SpeedQuiz() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [buttonText, setButtonText] = useState('Nex');

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
      navigate('/oddmanout');
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
      <p className="text-md text-left">{currentQuestion.question}</p>
      {currentQuestion && showChoices ? (
        <div className="mt-2">
          <Timer countdown={countdown} />
          {currentQuestion.choices.map((choice, index) => (
            <div key={index} className="flex items-center px-10 ">
              <input
                type="radio"
                id={`choice-${index}`}
                name="choice"
                value={index}
                checked={selectedChoice === index}
                onChange={handleSelectChoice}
                className="mr-2"
              />

              <label htmlFor="choice">{choice}</label>
            </div>
          ))}
          {showNextButton === 'Submit' ? (
            <button
              className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
              onClick={handleNext}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full ${!showNextButton && 'hidden'}`"
              onClick={handleNext}
            >
              {questionNumber === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          )}
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
          onClick={handleShowChoices}
        >
          แสดงตัวเลือก
        </button>
      )}
    </div>
  );
}

export default SpeedQuiz;
