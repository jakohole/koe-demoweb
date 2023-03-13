import React, { useState } from 'react';
import Instruction from '../components/OddmanoutInstruction';
import OddmanoutQuiz from '../components/OddmanoutQuiz.jsx';

function OddmanoutPage() {
  const scrollToQuiz = () => {
    const oddquiz = document.getElementById('oddmanout-quiz');
    oddquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:container md:mx-auto overflow-hidden">
      <div className="w-full top-24 left-0 shadow-md z-10">
        <div className="container mx-auto pt-26 mt-10 mb-4">
          <p className="font-mono text-4xl font-bold text-gray-100">
            Part 1-2 - Moral Temptations : Odd Man Out
          </p>
          <div className="w-full mx-auto mt-8 mb-20 h-full overflow-y-scroll scrollbar-none">
            <Instruction />
            <button
              onClick={scrollToQuiz}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
            >
              เริ่มทำแบบประเมิน
            </button>
            <div id="oddmanout-quiz" className="mt-28">
              <OddmanoutQuiz />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OddmanoutPage;
