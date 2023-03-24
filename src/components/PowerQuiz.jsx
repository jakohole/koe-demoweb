import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';

function PowerQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(
    Array.from({ length: questions.length }, () => [])
  );
  const currentQuestionIndex = useMemo(
    () => questions.findIndex((q) => q.type === 3),
    [questions]
  );
  const [activeQuestionIndex, setActiveQuestionIndex] =
    useState(currentQuestionIndex);
  const questionRefs = useRef([]);

  const handleScroll = useCallback(() => {
    const newActiveQuestionIndex = questionRefs.current.findIndex((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return top <= windowHeight / 2 && bottom >= windowHeight / 2;
    });
    //console.log(newActiveQuestionIndex);
    if (
      newActiveQuestionIndex >= 0 &&
      newActiveQuestionIndex !== activeQuestionIndex
    ) {
      setActiveQuestionIndex(newActiveQuestionIndex);
    }
  }, [activeQuestionIndex]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setActiveQuestionIndex(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const handleSelectChoice = useCallback(
    (event) => {
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

      const nextUnansweredIndex = updatedChoices.findIndex(
        (choices) => choices.length === 0
      );

      if (nextUnansweredIndex >= 0) {
        setActiveQuestionIndex(nextUnansweredIndex);
        questionRefs.current[nextUnansweredIndex].scrollIntoView({
          //behavior: 'smooth',
          //behavior: '',
          block: 'start',
        });
      }
    },
    [selectedChoices]
  );

  const handleSubmit = useCallback(() => {
    navigate('/scalestest');
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="container px-6 py-8">
      {questions
        .filter((question) => question.type === 3)
        .map((question, index) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className={`flex-col mb-28 ${
              index === activeQuestionIndex
                ? ''
                : 'opacity-50 pointer-events-none'
            }`}
          >
            <p className="text-base text-left text-white sm:text-sm lg:text-xl">
              {question.question}
            </p>
            {question.choices.map((choice, choiceIndex) => (
              <div
                key={choiceIndex}
                className="my-4 flex flex-row text-left text-white"
              >
                <input
                  type="radio"
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
      <div className="md:container "></div>
      <div className="md:container py-6">
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

export default PowerQuiz;
