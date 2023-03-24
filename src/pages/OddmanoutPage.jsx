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
          className="sm:h-14 md:h-18 absolute top-2 left-2 md:top-4 md:left-4 "
        />
      </div>
      <div className="container mx-auto mt-6 h-screen">
        <p className="font-ibm-plex-san-thai text-2xl sm:text-sm lg:text-xl font-bold text-white">
          <p>
            พาร์ท 1.2 คำถามเพื่อวัดมาตรฐานทางด้านศีลธรรม{' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Moral Temptation)
            </span>
          </p>
          <p>
            ในรูปแบบของข้อคำถามเลือกสิ่งที่ผิด{' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Odd man out)
            </span>{' '}
          </p>
        </p>
        <div className="w-full mx-auto mt-8 mb-6 text-base sm:text-sm lg:text-xl">
          <Instruction />
          <button
            onClick={scrollToQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full "
          >
            เริ่มทำแบบประเมิน
          </button>
        </div>
      </div>
      <div className="container mx-auto pt-10" id="oddmanout-quiz">
        <div className="max-w-4xl mx-auto py-20 lg:py-20">
          <OddmanoutQuiz />
        </div>
      </div>
    </div>
  );
}

export default OddmanoutPage;
