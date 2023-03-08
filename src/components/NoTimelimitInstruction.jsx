import React from 'react';
import '.././styles/Introduction.css';

function NoTimelimitInstruction() {
  return (
    <div id="ntlintruction">
      <p>คำอธิบาย (2.1) </p>
      <ul>
        <li>คุณมีเวลา 1 ชั่วโมง ในการตอบคำถามทุกข้อ</li>
        <li>คุณสามารถย้อนกลับไปที่คำถามก่อนหน้าได้</li>
        <li>คุณต้องเลือกคำตอบที่ถูกต้องเพียง 1 ตัวเลือกเท่านั้น </li>
        <li>
          เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม ส่งคำตอบ เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
        </li>
      </ul>
    </div>
  );
}

export default NoTimelimitInstruction;
