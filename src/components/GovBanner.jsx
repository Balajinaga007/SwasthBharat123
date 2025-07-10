import React, { useState } from 'react';
import Emblem from '../assets/Emblem_of_India.svg';

const GovBanner = () => {
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  const handleFontDecrease = () => setFontSize('small');
  const handleFontIncrease = () => setFontSize('large');
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const fontSizeMap = {
    small: '14px',
    medium: '16px',
    large: '20px',
  };

  // Apply font size to the body or root element
  React.useEffect(() => {
    document.documentElement.style.fontSize = fontSizeMap[fontSize];
  }, [fontSize]);

  return (
    <div className="gov-banner">
      <style>
        {`
          .gov-banner {
            background: #003087;
            color: white;
            padding: 0.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Work Sans', sans-serif;
            position: relative;
          }
          .font-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .font-btn {
            background: none;
            border: 1px solid white;
            color: white;
            padding: 0.25rem 0.5rem;
            cursor: pointer;
            border-radius: 4px;
            font-size: 0.875rem;
            transition: all 0.2s;
          }
          .font-btn:hover {
            background: white;
            color: #003087;
          }
          .font-label {
            font-size: 0.875rem;
            margin-right: 0.5rem;
          }
          .gov-branding {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          .gov-text {
            font-weight: 600;
            font-size: 1rem;
          }
          .language-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .language-select {
            background: none;
            border: 1px solid white;
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s;
          }
          .language-select:hover, .language-select:focus {
            background: white;
            color: #003087;
          }
          .language-select option {
            background: #003087;
            color: white;
          }
          .language-label {
            font-size: 0.875rem;
            margin-right: 0.5rem;
          }
        `}
      </style>
      
      {/* Font Size Controls - Left */}
      <div className="font-controls">
        <span className="font-label">Font:</span>
        <button className="font-btn" onClick={handleFontDecrease} aria-label="Decrease font size">
          A-
        </button>
        <button className="font-btn" onClick={handleFontIncrease} aria-label="Increase font size">
          A+
        </button>
      </div>

      {/* Government Branding - Center */}
      <div className="gov-branding">
        <img src={Emblem} alt="Ashoka Emblem" className="h-8" />
        <span className="gov-text">Government of India | SwasthBharath</span>
      </div>

      {/* Language Controls - Right */}
      <div className="language-controls">
        <span className="language-label">Language:</span>
        <select 
          className="language-select"
          value={language} 
          onChange={handleLanguageChange}
          aria-label="Select language"
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
          <option value="bengali">বাংলা</option>
          <option value="tamil">தமிழ்</option>
          <option value="telugu">తెలుగు</option>
          <option value="marathi">मराठी</option>
          <option value="gujarati">ગુજરાતી</option>
          <option value="kannada">ಕನ್ನಡ</option>
          <option value="punjabi">ਪੰਜਾਬੀ</option>
          <option value="malayalam">മലയാളം</option>
        </select>
      </div>
    </div>
  );
};

export default GovBanner; 