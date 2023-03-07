import './styles/IntroductionPage.css';
import Introduction from './components/Introduction';
import { useNavigate } from 'react-router-dom';
import './styles/App.css';

function IntroductionPage() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/speedtest');
  };

  return (
    <div id="introduction">
      <Introduction />
      <button className="scroll-to-app-button" onClick={navigateToNext}>
        Next
      </button>
    </div>
  );
}

export default IntroductionPage;
