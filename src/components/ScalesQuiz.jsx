import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';
import TenScalesChoices from './TenScalesChoices';

function ScalesQuiz() {
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
    const lastQuestionWithType4 = questions.filter((q) => q.type === 4).pop();
    console.log(questions.length)
    console.log('q'+questionNumber)
    //const lastQuestionIndexWithType4 = questions.indexOf(lastQuestionWithType4);
    if (lastQuestionWithType4.lastPosition === true) {
      setQuizOver(true);
      //setButtonText('Next Part');
      navigate('/lastpage');
      setShowNextButton('Submit');
      setShowChoices(false);
      setCountdown(20);
      //console.log(lastQuestionWithType4);
    } else {
      setQuestionNumber(questionNumber + 1);
      setShowChoices(false);
      setShowNextButton(false);
      setSelectedChoice(null);
      setCountdownStarted(false);
      //setButtonText('Next');
      console.log(currentQuestion);
      console.log(currentQuestion.lastPosition);
      console.log(lastQuestionWithType4.lastPosition);
    }
    setCountdown(20);
  };
  const handleSubmit = () => {
    navigate('/lastpage');
  };

  const [countdown, setCountdown] = useState(20);
  {
  }
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

  const currentQuestion = questions.filter((q) => q.type === 4)[questionNumber];

  return (
    <div>
      <div className="container items-left px-24">
        <p className="text-lg text-left">{currentQuestion.question}</p>
        {currentQuestion && showChoices ? (
          <div className="mt-2 text-lg">
            {<Timer countdown={countdown} />}
            {showChoices && (
              <TenScalesChoices
                choices={currentQuestion.choices}
                selectedChoice={selectedChoice}
                handleSelectChoice={handleSelectChoice}
              />
            )}
            {showNextButton && showNextButton === 'Submit' ? (
              <button
                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
                onClick={handleSubmit}
              >
                ส่งแบบประเมิน
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full ${!showNextButton && 'hidden'}`"
                onClick={handleNext}
              >
                {currentQuestion.lastPosition === true &&
                currentQuestion.type === 4
                  ? 'ส่งแบบประเมิน1'
                  : 'ถัดไป'}
              </button>
            )}
          </div>
        ) : (
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
              onClick={handleShowChoices}
            >
              แสดงตัวเลือก
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScalesQuiz;
