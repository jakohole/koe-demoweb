import './IntroductionPage.css';
import Introduction from './Introduction';
import { useHistory } from 'react-router-dom';
import './App.css';

function IntroductionPage() {
  const history = useHistory();

  const navigateToNext = () => {
    history.push('/speedtest');
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
