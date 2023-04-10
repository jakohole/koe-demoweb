import React from 'react';
import '.././styles/Introduction.css';

function OddmanoutInstruction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-start justify-end bg-white shadow rounded-lg text-base sm:text-sm lg:text-xl">
        <p className="px-4 py-4 text-sm lg:text-base">คำอธิบาย</p>
        <ul className="text-left px-8 list-disc text-sm lg:text-base">
          <li className="py-2">
            คุณมีเวลา <span className="font-semibold">ไม่จำกัด</span>{' '}
            ในการตอบคำถามทุกข้อ
          </li>
          <li className="py-2">
            คุณสามารถเลือกคำตอบที่ <span className="font-semibold">ผิด </span>
            ได้หลายคำตอบ{' '}
          </li>
          <li className="py-2">
            คุณสามารถ <span className="font-semibold">ย้อนกลับ</span>
            ไปที่คำถามก่อนหน้าได้
          </li>

          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม{' '}
            <span className="font-semibold">ส่งคำตอบ </span>
            เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
          <li className="py-2">
            กดปุ่ม <span className="font-semibold">เริ่มทำแบบประเมิน </span>{' '}
            เพื่อเริ่มการทำแบบประเมินในพาร์ทที่ 1.2
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OddmanoutInstruction;
