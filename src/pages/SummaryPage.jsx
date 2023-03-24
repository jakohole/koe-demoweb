import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import keenLogo from '../assets/keen.svg';

function SummaryPage() {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col items-left ">
        <div className="inline-flex items-start  px-24 pt-26 mt-12 ">
          <img
            src="https://keenprofile.com/assets/images/keen/keenprofile-logo-white.png"
            className="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div className="inline-flex items-start px-24 pt-26 mt-8 mb-2">
          <p className="font-ibm-plex-sans-thai text-4xl font-bold text-white">
            การทำแบบทดสอบของท่านเรียบร้อยแล้ว
          </p>
        </div>
        <div className="inline-flex items-start px-24 pt-26 mt-8 mb-2">
          <p className="font-ibm-plex-sans-thai text-2xl font-bold text-white">
            ขอบคุณที่สละเวลาในการตอบแบบสอบถามครั้งนี้
          </p>
        </div>
      </div>
    </div>
  );
}
export default SummaryPage;
