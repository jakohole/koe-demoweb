import React from 'react';
import '.././styles/Introduction.css';

function SpeedTest() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-start justify-end bg-white shadow rounded-lg text-base"
        id="speedtest1"
      >
        <p className="px-4 py-4 text-base">คำอธิบาย</p>
        <ul className="text-left px-8 list-disc text-base">
          <li className="py-2">
            คุณมีเวลาทั้งหมด <span className="font-semibold">20 วินาที </span>
            ในการตอบคำถามแต่ละข้อ
          </li>
          <li className="py-2">
            กดปุ่ม <span className="font-semibold">แสดงตัวเลือก</span>{' '}
            เพื่อแสดงตัวเลือกของแต่ละคำถาม โดยที่จะเริ่มจับเวลาเมื่อกดปุ่ม{' '}
          </li>
          แสดงตัวเลือก
          <li className="py-2">
            เมื่อกดปุ่ม <span className="font-semibold">ข้อถัดไป</span>{' '}
            เพื่อไปสู่คำถามข้อถัดไป
          </li>
          <li className="py-2">
            ในกรณีที่หมดเวลา ระบบจะเปลี่ยนไปที่คำถามข้อถัดไปอัตโนมัติ
            และไม่สามารถย้อนกลับไปที่คำถามก่อนหน้าได้
          </li>
          <li className="py-2">
            เลือกคำตอบที่ถูกต้องเพียง 1 ตัวเลือกเท่านั้น{' '}
          </li>
          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม{' '}
            <span className="font-semibold">ส่งคำตอบ</span>{' '}
            เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
          <li className="py-2">
            กดปุ่ม <span className="font-semibold">เริ่มทำแบบประเมิน </span>
            เพื่อเริ่มการทำแบบประเมินในพาร์ทที่ 1.1
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpeedTest;
