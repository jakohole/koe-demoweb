import '../styles/IntroductionPage.css';
import Introduction from '../components/Introduction';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function IntroductionPage() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/speedtest');
  };

  return (
    <div id="introduction">
      <Introduction />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
        onClick={navigateToNext}
      >
        Next
      </button>
    </div>
  );
}

export default IntroductionPage;
