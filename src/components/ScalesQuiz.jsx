import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questiondata from '../model/questiondata';
import { useNavigate } from 'react-router-dom';
import TenScalesChoices from './TenScalesChoices';
import ProgressBar from './ProgressBar';

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
  const [currentProgress, setCurrentProgress] = useState(questionNumber);

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
  };

  const handleSelectChoice = (index, isChoiceClicked) => {
    setSelectedChoice(index);
    setShowNextButton(true);
    console.log(questionNumber);
    console.log(selectedChoice);

    if (isChoiceClicked) {
      console.log(isChoiceClicked);
    }
  };

  const handleNext = () => {
    // Move to the next question or end of the quiz
    if (currentQuestion.lastPosition === true) {
      setQuizOver(true);
      setShowNextButton('Submit');
      setShowChoices(false);
      setCountdown(20);
      navigate('/lastpage');
    } else {
      setQuestionNumber(questionNumber+1);
      setShowChoices(false);
      setShowNextButton(false);
      setSelectedChoice(null);
      setCountdownStarted(false);
      setIsChoiceClicked(false); // Reset isChoiceClicked when moving to the next question
    }
    setCountdown(20);
  };
  const handleSubmit = () => {
    navigate('/lastpage');
  };

 

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

  const type1Questions = questiondata.filter((q) => q.type === 1).length;
  const type2Questions = questiondata.filter((q) => q.type === 2).length;
  const type3Questions = questiondata.filter((q) => q.type === 3).length;
  const initialPercentage =
    ((type1Questions + type2Questions + type3Questions) / questiondata.length) *
    100;

  useEffect(() => {
    if (selectedChoice !== null) {
      setCurrentProgress(questionNumber + 1);
    }
  }, [selectedChoice, questionNumber]);

  const [isChoiceClicked, setIsChoiceClicked] = useState(false);

  const handleChoiceClick = (choice, isChoiceClicked) => {
    // Do something with the selected choice and isChoiceClicked
    if (isChoiceClicked !== null) {
      console.log(isChoiceClicked);
      console.log(questionNumber);
      setIsChoiceClicked(isChoiceClicked);
    }
  };

  useEffect(() => {
    if (selectedChoice !== null && isChoiceClicked) {
      setCurrentProgress(questionNumber + 1);
    }
  }, [selectedChoice, questionNumber, isChoiceClicked]); // Add isChoiceClicked to the dependency array

  return (
    <div>
      <div className="container items-left px-24 py-10">
        <p className="text-sm lg:text-base text-left text-white">
          {currentQuestion.question}
        </p>
        {currentQuestion && showChoices ? (
          <div className="mt-2 text-sm lg:text-base ">
            {<Timer countdown={countdown} />}
            {showChoices && (
              <TenScalesChoices
                selectedChoice={selectedChoice}
                onChoiceClick={handleChoiceClick}
              />
            )}
            <div className="flex justify-between">
              <p className="text-left text-white text-sm lg:text-base">
                {currentQuestion.desc[0]}
              </p>
              <p className="text-right text-white text-sm lg:text-base">
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full ${!showNextButton && 'hidden'}"
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
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <ProgressBar
            currentQuestion={
              isChoiceClicked ? questionNumber + 1 : questionNumber
            }
            totalQuestions={questiondata.length}
            initialPercentage={initialPercentage}
          />
        </div>
      </div>
    </div>
  );
}

export default ScalesQuiz;
