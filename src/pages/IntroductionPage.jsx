import { useNavigate } from 'react-router-dom';
import Introduction from '../components/Introduction';
import '../styles/IntroductionPage.css';
import '../styles/App.css';
import KeenProfileLogo from '../assets/keen.svg';

function IntroductionPage() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/speedtest');
  };

  return (
    <div className="md:container md:mx-auto">
      <div className="flex items-center justify-center">
        <img
          src={KeenProfileLogo}
          alt="KeenProfile Logo"
          className="h-16 md:h-20 absolute top-2 left-2 md:top-4 md:left-4 "
        />
        <p className="font-gothic text-5xl font-bold text-white mt-10">
          KEEN Organizational Ethics Assessment
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full rounded-lg p-8">
          <Introduction />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
            onClick={navigateToNext}
          >
            เข้าสู่แบบประเมิน
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
