import React, { useState } from 'react';
import Instruction from '../components/PowerInstruction';
import PowerQuiz from '../components/PowerQuiz';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';
import KeenProfileLogo from '../assets/keen.svg';

function PowerPage() {
  const scrollToQuiz = () => {
    const ntlquiz = document.getElementById('power-quiz');
    ntlquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full top-24 left-0  z-10 ">
      <div className="container mx-auto mt-6 ">
        <div className="flex items-center justify-center">
          <img
            src={KeenProfileLogo}
            alt="KeenProfile Logo"
            className="sm:h-14 md:h-18 absolute top-2 left-2 md:top-4 md:left-4 "
          />
        </div>
        <p className="font-ibm-plex-san-thai text-5xl font-bold text-white">
          <p>
            พาร์ท 2.1 คำถามเพื่อวัดสถานการณ์ทางเลือกด้านจริยธรรม{' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Ethical Direction)
            </span>
          </p>
          <p>
            ในรูปแบบของข้อคำถามให้เวลาเต็มที่ (Power test){' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Power test)
            </span>{' '}
          </p>
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
      <div className="md:container mx-auto" id="power-quiz">
        <div className="max-w-4xl mx-auto py-24">
          <PowerQuiz />
        </div>
      </div>
    </div>
  );
}

export default PowerPage;
