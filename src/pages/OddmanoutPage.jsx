import React, { useState } from 'react';
import Instruction from '../components/OddmanoutInstruction';
import OddmanoutQuiz from '../components/OddmanoutQuiz.jsx';
import KeenProfileLogo from '../assets/keen.svg';

function OddmanoutPage() {
  const scrollToQuiz = () => {
    const oddquiz = document.getElementById('oddmanout-quiz');
    oddquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full top-24 left-0  z-10 ">
      <div className="flex items-center justify-center">
        <img
          src={KeenProfileLogo}
          alt="KeenProfile Logo"
          className="h-16 md:h-20 absolute top-2 left-2 md:top-4 md:left-4 "
        />
      </div>
      <div className="container mx-auto mt-10 ">
        <p className="font-gothic text-4xl font-bold text-white">
          Part 1-2 - Moral Temptations : Odd Man Out
        </p>
        <div className="w-full mx-auto mt-8 mb-4">
          <Instruction />
          <button
            onClick={scrollToQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
          >
            เริ่มทำแบบประเมิน
          </button>
        </div>
      </div>
      <div className="container mx-auto" id="oddmanout-quiz">
        <div className="max-w-4xl mx-auto pt-20">
          <OddmanoutQuiz />
        </div>
      </div>
    </div>
  );
}

export default OddmanoutPage;
