import React from 'react';
import '.././styles/Introduction.css';

function NoTimelimitInstruction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-start justify-end bg-white shadow rounded-lg">
        <p className="px-4 py-4 text-sm">คำอธิบาย (2.1)</p>
        <ul className="text-left px-8 list-disc">
          <li className="py-2">คุณมีเวลา "ไม่จำกัด" ในการตอบคำถามทุกข้อ</li>
          <li className="py-2">คุณสามารถย้อนกลับไปที่คำถามก่อนหน้าได้</li>
          <li className="py-2">
            คุณต้องเลือกคำตอบที่ {' ถูกต้อง '} เพียง 1 คำตอบเท่านั้น
          </li>
          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม ส่งคำตอบ เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoTimelimitInstruction;
