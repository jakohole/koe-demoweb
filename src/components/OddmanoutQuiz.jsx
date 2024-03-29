import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import questions from '../model/questiondata';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

// Create OddmanoutQuiz component
function OddmanoutQuiz() {
  const navigate = useNavigate();
  const [selectedChoices, setSelectedChoices] = useState(
    Array.from({ length: questions.length }, () => [])
  );
  const currentQuestionIndex = useMemo(
    () => questions.findIndex((q) => q.type === 2),
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
    },
    [selectedChoices]
  );

  const handleSubmit = useCallback(() => {
    navigate('/power');
    window.scrollTo(0, 0);
  }, [navigate]);

  const type1Questions = questions.filter((q) => q.type === 1).length;
  const type2Questions = questions.filter((q) => q.type === 2).length;
  const initialPercentage = (type1Questions / questions.length) * 100;


  return (
    <div className="md:container px-6 py-8">
      {questions
        .filter((question) => question.type === 2)
        .map((question, index) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className={`flex-col mb-20 ${
              index === activeQuestionIndex
                ? ''
                : 'opacity-50 pointer-events-none'
            }`}
          >
            <p className="text-base text-left text-white text-sm lg:text-base">
              {question.question}
            </p>
            {question.choices.map((choice, choiceIndex) => (
              <div
                key={choiceIndex}
                className="my-4 flex flex-row text-left text-white text-sm lg:text-base"
              >
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
      <div className="md:container "></div>
      <div className="md:container py-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          ส่งคำตอบ
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <ProgressBar
          currentQuestion={
            selectedChoices.filter((choice) => choice.length > 0).length
          }
          totalQuestions={questions.length}
          initialPercentage={initialPercentage}
        />
      </div>
    </div>
  );
}

export default OddmanoutQuiz;
