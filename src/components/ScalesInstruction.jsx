import React from 'react';

function ScalesInstruction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-start justify-end bg-white shadow rounded-lg"
        id="speedtest1"
      >
        <p className="px-4 py-4 text-sm">คำอธิบาย (1.1)</p>
        <ul className="text-left px-8 list-disc">
          <li className="py-2">
            คุณมีเวลาทั้งหมด 10 วินาที ในการตอบคำถามแต่ละข้อ
          </li>
          <li className="py-2">
            เลือกระดับเพียง 1 สถานการณ์จากระดับของสถานการณ์ทั้งหมด โดยที่
            <ul className="text-left px-8">
              <li className="py-2">
                ระดับ “1” หมายถึง เป็นตัวตนของฉันเพียงเล็กน้อยที่สุด
              </li>
              <li className="py-2">
                ระดับ “2” หมายถึง เป็นตัวตนของฉันเพียงเล็กน้อย
              </li>
              <li className="py-2">
                ระดับ “3” หมายถึง เป็นตัวตนของฉันปานกลาง{' '}
              </li>
              <li className="py-2">
                ระดับ “4” หมายถึง เป็นตัวตนของฉันอย่างมาก{' '}
              </li>
              <li className="py-2">
                ระดับ “5” หมายถึง เป็นตัวตนของฉันอย่างมากที่สุด{' '}
              </li>
            </ul>
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

export default ScalesInstruction;
