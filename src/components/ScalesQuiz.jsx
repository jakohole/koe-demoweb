import React, { useState, useEffect } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';
import Timer from './Timer';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function ScalesQuiz() {
const navigate = useNavigate();
const [showChoices, setShowChoices] = useState(false);
const [selectedChoice, setSelectedChoice] = useState(null);
const [showNextButton, setShowNextButton] = useState(false);
const [countdownStarted, setCountdownStarted] = useState(false);
const [questionNumber, setQuestionNumber] = useState(0);
const [quizOver, setQuizOver] = useState(false);
const [buttonText, setButtonText] = useState('Next');
const [leftValue, setLeftValue] = useState(1);
const [rightValue, setRightValue] = useState(5);

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
const lastQuestionWithType1 = questions.filter((q) => q.type === 1).pop();
const lastQuestionIndexWithType1 = questions.indexOf(lastQuestionWithType1);
if (questionNumber === lastQuestionIndexWithType1) {
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
return (
  <div className="box" id="speedquiz">
    <p className="text-md text-left">{currentQuestion.question}</p>
    {currentQuestion && showChoices ? (
      <div className="mt-2">
      <Timer countdown={countdown} />
      {showChoices &&
        currentQuestion.choices.map((choice, index) => (
        <div key={index} className="flex items-center px-10 ">
          <label htmlFor={left-${index}} className="mr-2">1</label>
          <input
            type="radio"
            id={left-${index}}
            name={choice-${index}}
            value={1}
            checked={selectedChoice === index && currentQuestion.choices[index].value === 1}
            onChange={handleSelectChoice}
          className="mr-2"
          />
          <input
            type="radio"
            id={right-${index}}
            name={choice-${index}}
            value={5}
            checked={selectedChoice === index && currentQuestion.choices[index].value === 5}
            onChange={handleSelectChoice}
            className="mr-2"
          />
          <label htmlFor={right-${index}} className="mr-2">5</label>
        </div>
        ))
      }
      {showNextButton && showNextButton === 'Submit' ? (
        <button
             className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
             onClick={handleNext}
        > Submit </button>) : (
          <button
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full ${!showNextButton && 'hidden'}`"
             onClick={handleNext}
           >
          {questionNumber === questions.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'}
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
  
  export default ScalesQuiz;
  
  
  
  