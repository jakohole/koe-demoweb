import React, { useState, useEffect } from 'react';
import '../styles/OddmanoutQuiz.css';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function OddmanoutQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill([]));
  const [countdown, setCountdown] = useState(3600);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name);
    const choiceIndex = parseInt(event.target.value);
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[questionIndex] = [choiceIndex];
    setSelectedChoices(newSelectedChoices);
  };

  const handleSubmit = () => {
    navigate('/no-time-limit');
    // Compute the number of correct answers
    //const correctAnswers = selectedChoices.filter(
    //  (choice, index) => choice === questions[index].answer
    //);

    // Display the results
    //alert(`You got ${correctAnswers.length} out of 3 correct!`);
  };

  useEffect(() => {
    let intervalId;
    if (countdown > 0) {
      intervalId = setInterval(() => setCountdown(countdown - 60), 60000);
    }
    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
    <div
      id="oddmanout-quiz"
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="p-4 bg-white max-w-md w-full rounded-md shadow-md">
        {questions.map((question, index) => (
          <div
            key={index}
            className={
              'oddmanout-quiz__question' +
              (index === currentQuestion ? ' current' : ' faded')
            }
          >
            <h2 className="text-xl font-bold mb-2">{question.question}</h2>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="oddmanout-quiz__choice">
                <input
                  type="checkbox"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={index}
                  value={choiceIndex}
                  checked={selectedChoices[index].includes(choiceIndex)}
                  onChange={handleSelectChoice}
                />
                <label
                  htmlFor={`question-${index}-choice-${choiceIndex}`}
                  className="ml-2"
                >
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={selectedChoices.includes([])}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default OddmanoutQuiz;
