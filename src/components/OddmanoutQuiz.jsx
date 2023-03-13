import React, { useState, useEffect } from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function OddmanoutQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill([]));
  const [countdown, setCountdown] = useState(3600);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.findIndex((q) => q.type === 2)
  );

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

  const handleSubmit = () => {
    navigate('/no-time-limit');
    // Compute the number of correct answers
    //const correctAnswers = selectedChoices.filter(
    //  (choices, index) =>
    //    choices.sort().toString() === questions[index].answer.sort().toString()
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

  //const currentQuestion = questions.filter((q) => q.type === 2)[questionNumber];

  return (
    <div className="container px-8 py-8">
      {questions
        .filter((question) => question.type === 2)
        .map((question, index) => (
          <div key={index} className="bg-white rounded-md shadow-lg p-4 mb-4">
            <p className="text-lg font-bold text-left">{question.question}</p>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="my-4 flex">
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
                  className="font-semibold flex-1"
                >
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
      {/*
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50"
        disabled={
          selectedChoices.some((choices) => choices.length === 0) ||
          currentQuestion !==
            questions.filter((question) => question.type === 1).length - 1
        }
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
      >
        {currentQuestion ===
        questions.filter((question) => question.type === 1).length - 1
          ? 'Submit'
          : 'Next'}
      </button>*/}
    </div>
  );
}

export default OddmanoutQuiz;
