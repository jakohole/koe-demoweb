import React, { useState, useEffect } from 'react';
import '../styles/OddmanoutQuiz.css';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function NoTimelimitQuiz() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectChoice = (event) => {
    const choiceIndex = parseInt(event.target.value);
    setSelectedChoice(choiceIndex);
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
    // This effect intentionally left blank
  }, []);

  return (
    <div className="no-timelimit-quiz" id="no-time-limit">
      <div className="no-timelimit-quiz__questions">
        {questions.map((question, index) => (
          <div
            key={index}
            className={
              'no-timelimit-quiz__question' +
              (index === currentQuestion ? ' current' : ' faded')
            }
          >
            <h2>{question.question}</h2>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="no-timelimit-quiz__choice">
                <input
                  type="radio"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={`question-${index}`}
                  value={choiceIndex}
                  checked={selectedChoice === choiceIndex}
                  onChange={handleSelectChoice}
                />
                <label htmlFor={`question-${index}-choice-${choiceIndex}`}>
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className="no-timelimit-quiz__submit"
        disabled={selectedChoice === null}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default NoTimelimitQuiz;
