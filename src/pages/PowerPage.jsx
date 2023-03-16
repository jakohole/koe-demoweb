import React, { useState } from 'react';
import Instruction from '../components/PowerInstruction';
import PowerQuiz from '../components/PowerQuiz';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function PowerPage() {
  const scrollToQuiz = () => {
    const ntlquiz = document.getElementById('power-quiz');
    ntlquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full top-24 left-0  z-10 ">
      <div className="container mx-auto mt-10 ">
        <p className="font-serif text-4xl font-bold text-gray-100">
          Part 2-1 - Ethical Directions : Power Test
        </p>
        <div className="w-full mx-auto mt-8">
          <Instruction />
          <button
            onClick={scrollToQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
          >
            เริ่มทำแบบประเมิน
          </button>
        </div>
      </div>
      <div className="container mx-auto" id="power-quiz">
        <div className="max-w-4xl mx-auto py-8">
          <PowerQuiz />
        </div>
      </div>
    </div>
  );
}

export default PowerPage;
