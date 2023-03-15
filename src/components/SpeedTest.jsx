import React from 'react';
import '.././styles/Introduction.css';

function SpeedTest() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-start justify-end bg-white shadow rounded-lg text-sm"
        id="speedtest1"
      >
        <p className="px-4 py-4 text-sm">คำอธิบาย (1.1)</p>
        <ul className="text-left px-8 list-disc">
          <li className="py-2">
            คุณมีเวลาทั้งหมด 10 วินาที ในการตอบคำถามแต่ละข้อ
          </li>
          <li className="py-2">
            เมื่อกดปุ่ม ข้อถัดไป เพื่อไปยังข้อถัดไป หรือ เมื่อเวลาหมด
            จะไม่สามารถย้อนกลับไปที่คำถามก่อนหน้าได้
          </li>
          <li className="py-2">
            เลือกคำตอบที่ถูกต้องเพียง 1 ตัวเลือกเท่านั้น{' '}
          </li>
          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม ส่งคำตอบ เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpeedTest;
