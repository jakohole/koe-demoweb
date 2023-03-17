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
  //Create questionRefs variable
  const questionRefs = useRef([]);
  //Create handleSelectChoice function
  const handleSelectChoice = (event) => {
    const questionIndex = parseInt(event.target.name.split('-')[1]);
    const choiceIndex = parseInt(event.target.value);
    const updatedChoices = [...selectedChoices];
    updatedChoices[questionIndex] = [
      ...selectedChoices[questionIndex],
      choiceIndex,
    ];
    setSelectedChoices(updatedChoices);
  };
  const handleSubmit = () => {
    navigate('/power');
    window.scrollTo(0, 0);
  };
  //Create handleNextQuestion function
  /*
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      questionRefs.current[currentQuestion + 1].scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      navigate('/power');
    }
  };*/
  /*
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }
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
            className="bg-transparent rounded-md shadow-lg p-4 mb-4"
          >
            <p className="text-lg text-left">{question.question}</p>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="my-4 flex text-left">
                {
                  //Create multiple box choice
                }
                <input
                  type="checkbox"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={`question-${index}`}
                  value={choiceIndex}
                  checked={selectedChoices[index].includes(choiceIndex)}
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
