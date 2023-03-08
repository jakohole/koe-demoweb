import React, { useState, useEffect } from 'react';
import '../styles/OddmanoutQuiz.css';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function OddmanoutQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill(null));
  const [countdown, setCountdown] = useState(3600);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name);
    const choiceIndex = parseInt(event.target.value);
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[questionIndex] = choiceIndex;
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
    <div className="oddmanout-quiz" id="oddmanout">
      <div className="oddmanout-quiz__questions">
        {questions.map((question, index) => (
          <div
            key={index}
            className={
              'oddmanout-quiz__question' +
              (index === currentQuestion ? ' current' : ' faded')
            }
          >
            <h2>{question.question}</h2>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="oddmanout-quiz__choice">
                <input
                  type="radio"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={index}
                  value={choiceIndex}
                  checked={selectedChoices[index] === choiceIndex}
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
        className="oddmanout-quiz__submit"
        disabled={selectedChoices.includes(null)}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {/*
      <div className="oddmanout-quiz__timer">
        {Math.floor(countdown / 60)
          .toString()
          .padStart(2, '0')}
        :{(countdown % 60).toString().padStart(2, '0')}
      </div>*/}
    </div>
  );
}

export default OddmanoutQuiz;
