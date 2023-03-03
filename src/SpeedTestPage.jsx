import './IntroductionPage.css';
import SpeedTest from './SpeedTest';
import './App.css';

function SpeedTestPage() {
  const scrollToNext = () => {
    const quiz1 = document.getElementById('quiz1');
    introduction.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="introduction-page-container" id="speedtestpage">
      <h2>Part 1.1 Moral Temptations (right vs wrong) - Speed Test</h2>
      <SpeedTest />
      <button className="scroll-to-app-button" onClick={scrollToNext}>
        เริ่มทำแบบประเมิน
      </button>
    </div>
  );
}

export default SpeedTestPage;
