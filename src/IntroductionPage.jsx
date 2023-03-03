import './IntroductionPage.css';
import Introduction from './Introduction';

function IntroductionPage() {
  const scrollToApp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="introduction-page-container" id="introduction">
      <Introduction />
      <button className="scroll-to-app-button" onClick={scrollToApp}>
        Back to App
      </button>
    </div>
  );
}

export default IntroductionPage;
