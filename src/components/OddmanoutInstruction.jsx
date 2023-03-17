import React from 'react';
import '.././styles/Introduction.css';

function OddmanoutInstruction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-start justify-end bg-white shadow rounded-lg">
        <p className="px-4 py-4 text-lg">คำอธิบาย</p>
        <ul className="text-left px-8 list-disc">
          <li className="py-2">คุณมีเวลา "ไม่จำกัด" ในการตอบคำถามทุกข้อ</li>
          <li className="py-2">คุณสามารถย้อนกลับไปที่คำถามก่อนหน้าได้</li>
          <li className="py-2">
            คุณสามารถเลือกคำตอบที่ไม่ถูกต้องได้หลายคำตอบ{' '}
          </li>
          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม ส่งคำตอบ เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OddmanoutInstruction;
