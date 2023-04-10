import React from 'react';

function ScalesInstruction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-start justify-end bg-white shadow rounded-lg"
        id="speedtest1"
      >
        <p className="px-4 py-4 text-sm lg:text-base">คำอธิบาย</p>
        <ul className="text-left text-sm lg:text-base px-8 list-disc">
          <li className="py-2">
            คุณมีเวลาทั้งหมด <span className="font-semibold">20 วินาที </span>
            ในการตอบคำถามแต่ละข้อ
          </li>
          <li className="py-2">
            คำตอบอยู่ในรูปแบบของสเกล คุณสามารถเลือกตอบได้เพียง 1 จุดจากสเกล 10
            ระดับ
          </li>
          <li className="py-2">
            คุณ <span className="font-semibold">ไม่สามารถย้อนกลับ</span>
            ไปที่คำถามก่อนหน้าได้
          </li>
          <li className="py-2">
            เมื่อทำข้อสอบเสร็จแล้วกดปุ่ม{' '}
            <span className="font-semibold">ส่งคำตอบ</span>{' '}
            เพื่อไปสู่ข้อคำถามพาร์ทถัดไป
          </li>
          <li className="py-2">
            กดปุ่ม <span className="font-semibold">เริ่มทำแบบประเมิน </span>
            เพื่อเริ่มการทำแบบประเมินในพาร์ทที่ 2.2
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ScalesInstruction;
