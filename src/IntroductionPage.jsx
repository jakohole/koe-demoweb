import './IntroductionPage.css';
import Introduction from './Introduction';
import { useNavigate} from 'react-router-dom';
import './App.css';

function IntroductionPage() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/speedtestpage');
  };

  return (
    <div className="introduction-page-container" id="introduction">
      <Introduction />
      <button className="scroll-to-app-button" onClick={navigateToNext}>
        Next
      </button>
    </div>
  );
}

export default IntroductionPage;
