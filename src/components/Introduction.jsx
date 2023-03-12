import React from 'react';
import '.././styles/Introduction.css';

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-start justify-end bg-white shadow rounded-lg"
        id="introduction1"
      >
        <p className="px-4 py-4 text-sm">
          แบบประเมินชุดนี้ประกอบไปด้วยข้อคำถามทั้งหมด 2 พาร์ทหลัก ได้แก่
        </p>
        <ul className="text-left px-4">
          <li className="py-2">
            ข้อคำถาม Moral Temptation ซึ่งจะถูกแบ่งออกเป็น 2 พาร์ท
            <ul className="list-none pl-4">
              <li className="py-2">
                1.1 ข้อคำถาม Speed Test ซึ่งจะมีเวลาทั้งหมด 10 วินาที
                ในการตอบคำถามแต่ละข้อ เลือกคำตอบที่ถูกต้องเพียง 1
                ตัวเลือกเท่านั้น
              </li>
              <li className="py-2">
                1.2 ข้อคำถาม Odd man out ซึ่งจะมีเวลา "ไม่จำกัด"
                ในการตอบคำถามทุกข้อ สามารถเลือกคำตอบที่ไม่ถูกต้องได้หลายคำตอบ
              </li>
            </ul>
          </li>
          <li className="py-2">
            ข้อคำถาม Ethical Direction ซึ่งจะถูกแบ่งออกเป็น 2 พาร์ท
            <ul className="list-none pl-4">
              <li className="py-2">
                2.1 ข้อคำถาม No time limit ซึ่งจะมีเวลา "ไม่จำกัด"
                ในการตอบคำถามทุกข้อ
                เลือกสถานการณ์ที่เหมาะสมที่สุดในความคิดของคุณ 1 คำตอบเท่านั้น
              </li>
              <li className="py-2">
                2.2 ข้อคำถาม Speed Test ซึ่งจะมีเวลาทั้งหมด 10 วินาที
                ในการตอบคำถามแต่ละข้อ เลือกคำตอบที่ถูกต้องเพียง 1
                ตัวเลือกเท่านั้น
              </li>
            </ul>
          </li>
        </ul>
        <p className="px-4 py-2 text-sm">
          ข้อคำถามทั้งหมดจะใช้ระยะเวลาในการทำทั้งสิ้นประมาณ 2 ชั่วโมง
        </p>
        <p className="px-4 py-2 text-sm">
          ซึ่งคำอธิบายทั้งหมดจะปรากฎขึ้นอีกครั้งเมื่อคุณมาถึงข้อคำถามในแต่ละพาร์ท
        </p>
      </div>
    </div>
  );
}

export default Introduction;
