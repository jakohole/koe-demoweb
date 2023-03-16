import React, { useState, useEffect, useRef } from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

//Create OddmanoutQuiz component
function OddmanoutQuiz() {
  //Create navigate variable
  const navigate = useNavigate();
  //Create selectedChoices variable
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill(null));
  //Create currentQuestion variable
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.findIndex((q) => q.type ===  2)
  );
  //Create questionRefs variable
  const questionRefs = useRef([]);
  //Create handleSelectChoice function
  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name.split('-')[1]);
    const choiceIndex = parseInt(event.target.value);
    setSelectedChoices(
      selectedChoices.map((choices, index) =>
        index === questionIndex ? choiceIndex : choices
      )
    );
  }
  //Create handleNextQuestion function
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      questionRefs.current[currentQuestion + 1].scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      navigate('/no-timelimit-quiz');
    }
  };
  //Create html part with  a question and choice in a shadow box, a button to submit answer is at the bottom, change question by scrolling, after scrolling the non-focus question will be disable and the focus question will be enable
  return (
    <div className="container px-8 py-8">
      {questions
        .filter((question) => question.type === 2)
        .map((question, index) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className="bg-white rounded-md shadow-lg p-4 mb-4"
          >
            <p className="text-lg font-bold text-left">{question.question}</p>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="my-4 flex text-left">
                <input
                  type="radio"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={`question-${index}`}
                  value={choiceIndex}
                  checked={selectedChoices[index] === choiceIndex}
                  onChange={handleSelectChoice}
                  className="mr-2"
                />
                <label
                  htmlFor={`question-${index}-choice-${choiceIndex}`}
                  className="text-gray-700"
                >
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
      <button
        onClick={handleNextQuestion}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        ถัดไป
      </button>
    </div>
  );

    
}

export default OddmanoutQuiz;
