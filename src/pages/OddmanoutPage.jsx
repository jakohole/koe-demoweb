import React, { useState } from 'react';
import Instruction from '../components/OddmanoutInstruction';
import OddmanoutQuiz from '../components/OddmanoutQuiz.jsx';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function OddmanoutPage() {
  const scrollToQuiz = () => {
    const oddquiz = document.getElementById('oddmanout-quiz');
    oddquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-10 mb-4">
          <p className="font-mono text-4xl font-bold text-gray-100">
            Part 1-2 - Moral Temptations : Odd Man Out
          </p>
        </div>
        <div className="py-4">
          <Instruction />
          <button
            onClick={scrollToQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
          >
            เริ่มทำแบบประเมิน
          </button>
        </div>
      </div>

      {<OddmanoutQuiz />}
    </div>
  );
}

export default OddmanoutPage;
