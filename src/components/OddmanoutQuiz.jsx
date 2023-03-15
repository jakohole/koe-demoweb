import React, { useState, useEffect, useRef } from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function OddmanoutQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill([]));
  const [countdown, setCountdown] = useState(3600);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.findIndex((q) => q.type === 2)
  );
  const questionRefs = useRef([]);

  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name);
    const choiceIndex = parseInt(event.target.value);
    const newSelectedChoices = [...selectedChoices];
    if (!newSelectedChoices[questionIndex].includes(choiceIndex)) {
      newSelectedChoices[questionIndex].push(choiceIndex);
    } else {
      newSelectedChoices[questionIndex] = newSelectedChoices[
        questionIndex
      ].filter((index) => index !== choiceIndex);
    }
    setSelectedChoices(newSelectedChoices);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      questionRefs.current[currentQuestion + 1].scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      navigate('/no-time-limit');
    }
  };

  useEffect(() => {
    let intervalId;
    if (countdown > 0) {
      intervalId = setInterval(() => setCountdown(countdown - 60), 60000);
    }
    return () => clearInterval(intervalId);
  }, [countdown]);

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
            <p className="text-sm  text-left">{question.question}</p>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="my-4 flex text-left">
                <input
                  type="checkbox"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={index}
                  value={choiceIndex}
                  checked={selectedChoices[index].includes(choiceIndex)}
                  onChange={handleSelectChoice}
                  className="mr-2"
                />
                <label
                  htmlFor={`question-${index}-choice-${choiceIndex}`}
                  className="text-sm flex-1"
                >
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full  mx-auto h-10 "
        onClick={handleNextQuestion}
      >
        {currentQuestion >=
        questions.filter((question) => question.type === 2).length - 1
          ? 'ส่งคำตอบ'
          : 'Next'}
      </button>
    </div>
  );
}

export default OddmanoutQuiz;
