import React from 'react';
import '.././styles/Introduction.css';

function OddmanoutInstruction() {
  return (
    <div id="oddintruction">
      <p>คำอธิบาย (1.2) </p>
      <ul>
        <li>คุณมีเวลา 1 ชั่วโมง ในการตอบคำถามทุกข้อ</li>
        <li>คุณสามารถย้อนกลับไปที่คำถามก่อนหน้าได้</li>
        <li>คุณสามารถเลือกคำตอบที่ไม่ถูกต้องได้หลายคำตอบ </li>
        <li>
          เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม ส่งคำตอบ เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
        </li>
      </ul>
    </div>
  );
}

export default OddmanoutInstruction;
