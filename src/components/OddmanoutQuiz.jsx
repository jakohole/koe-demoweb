import React, { useState, useEffect, useRef } from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

//Create OddmanoutQuiz component
function OddmanoutQuiz() {
  //Create navigate variable
  const navigate = useNavigate();
  //Create selectedChoices variable
  const [selectedChoices, setSelectedChoices] = useState(Array(3).fill([]));
  //Create currentQuestion variable
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.findIndex((q) => q.type === 2)
  );

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  //Create questionRefs variable
  const questionRefs = useRef([]);
  const handleScroll = () => {
    const newActiveQuestionIndex = questionRefs.current.findIndex((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return top <= windowHeight / 2 && bottom >= windowHeight / 2;
    });

    if (newActiveQuestionIndex >= 0 && newActiveQuestionIndex !== activeQuestionIndex) {
      setActiveQuestionIndex(newActiveQuestionIndex);
    }
  };
  //Create handleSelectChoice function
  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name.split('-')[1]);
    const choiceIndex = parseInt(event.target.value);
    const updatedChoices = [...selectedChoices];
    if (selectedChoices[questionIndex].includes(choiceIndex)) {
      updatedChoices[questionIndex] = selectedChoices[questionIndex].filter(
        (choice) => choice !== choiceIndex
      );
    } else {
      updatedChoices[questionIndex] = [
        ...selectedChoices[questionIndex],
        choiceIndex,
      ];
    }
    setSelectedChoices(updatedChoices);
  };

  const handleSubmit = () => {
    navigate('/power');
    window.scrollTo(0, 0);
  };
 /*
  useEffect(() => {
    const currentQuestionRef = questionRefs.current[currentQuestion];
    if (!isInView(currentQuestionRef)) {
      currentQuestionRef.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currentQuestion]);*/
  //Return OddmanoutQuiz component
  return (
    <div className="container px-8 py-8">
      {questions
        .filter((question) => question.type === 2)
        .map((question, index) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className={`bg-transparent rounded-xl shadow-2xl p-6 mb-4 ${
              index === activeQuestionIndex ? "" : "opacity-50 pointer-events-none"
            }`}
          >
            <p className="text-base text-left text-white">
              {question.question} {index}
            </p>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="my-4 flex text-left text-white">
                <input
                  type="checkbox"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={`question-${index}`}
                  value={choiceIndex}
                  checked={selectedChoices[index].includes(choiceIndex)}
                  onChange={handleSelectChoice}
                  className="mr-2"
                  disabled={index !== activeQuestionIndex}
                />
  
                <label
                  htmlFor={`question-${index}-choice-${choiceIndex}`}
                  className="text-white"
                >
                  {choice}
                </label>
              </div>
            ))}
          </div>
        ))}
      <div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          ส่งคำตอบ
        </button>
      </div>
    </div>
  );
}

export default OddmanoutQuiz;
