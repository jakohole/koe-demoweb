import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questiondata from '../model/questiondata';
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
  const [buttonText, setButtonText] = useState('Next');
  const [countdown, setCountdown] = useState(20);
  const [lastQuestionIndex, setLastQuestionIndex] = useState(-1);
  const currentQuestion = questiondata.filter((q) => q.type === 4)[
    questionNumber
  ];

  useEffect(() => {
    // Initialize the lastQuestionIndex state variable
    const lastQuestion = questiondata.filter((q) => q.lastPosition)[3];
    const lastQuestionIndex = questiondata.indexOf(lastQuestion);
    setLastQuestionIndex(lastQuestionIndex);
    //console.log(lastQuestion);
  }, []);

  const handleShowChoices = () => {
    setShowChoices(true);
    setShowNextButton(false);
    setSelectedChoice(null);
    setCountdownStarted(true);

    console.log(currentQuestion);
    console.log(lastQuestionIndex);
    console.log(questiondata.length - 1);
  };

  const handleSelectChoice = (event) => {
    setSelectedChoice(parseInt(event.target.value));
    setShowNextButton(true);
  };

  const handleNext = () => {
    // Check if the selected choice is correct
    //  currentQuestion = questiondata[questionNumber];
    //const isCorrect =
    //  currentQuestion.choices[selectedChoice] ===
    //  currentQuestion.choices[currentQuestion.answer];

    console.log(currentQuestion);
    // Move to the next question or end of the quiz
    if (currentQuestion.lastPosition === true) {
      setQuizOver(true);
      setShowNextButton('Submit');
      setShowChoices(false);
      setCountdown(20);
      navigate('/lastpage');
    } else {
      setQuestionNumber(questionNumber + 1);
      setShowChoices(false);
      setShowNextButton(false);
      setSelectedChoice(null);
      setCountdownStarted(false);
    }
    setCountdown(20);
  };
  const handleSubmit = () => {
    navigate('/lastpage');
  };

  //const [countdown, setCountdown] = useState(20);
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

  return (
    <div>
      <div className="container items-left px-24 py-10">
        <p className="text-base text-left text-white">
          {currentQuestion.question}
        </p>
        {currentQuestion && showChoices ? (
          <div className="mt-2 text-base ">
            {<Timer countdown={countdown} />}
            {showChoices && (
              <TenScalesChoices
                choices={currentQuestion.choices}
                selectedChoice={selectedChoice}
                handleSelectChoice={handleSelectChoice}
              />
            )}
            <div className="flex justify-between">
              <p className="text-left text-white text-base">
                {currentQuestion.desc[0]}
              </p>
              <p className="text-right text-white text-base">
                {currentQuestion.desc[1]}
              </p>
            </div>
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
                  ? 'ส่งแบบประเมิน'
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
