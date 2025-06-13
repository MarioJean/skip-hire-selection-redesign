import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Info,
  AlertTriangle
} from 'lucide-react';
import { skipData, skipImages } from './constants/skipData';
import SkipModal from './components/SkipModal';
import SkipCard from './components/SkipCard';
import Header from './components/Header';

const SkipHireSelection = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modalSkip, setModalSkip] = useState(null);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const calculateFinalPrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const getSkipImage = (size, allowedOnRoad, allowsHeavyWaste) => {
    if (skipImages[size]) {
      return (
        <div className="relative flex items-center justify-center h-48">
          <img
            src={skipImages[size]}
            alt={`${size} yard skip`}
            className="max-h-full max-w-full object-contain drop-shadow-2xl"
          />
          <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {size} Yards
          </div>
          {!allowedOnRoad && (
            <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
              <AlertTriangle size={14} />
              Not Allowed on The Road
            </div>
          )}
        </div>
      );
    }

    const baseColor = '#3b82f6';
    const width = Math.min(240 + (size * 2), 360);
    const height = 140 + (size * 1.5);

    return (
      <div className="relative w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
        >
          <defs>
            <linearGradient id={`skipGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <filter id={`shadow-${size}`}>
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
            </filter>
          </defs>
          <path
            d={`M20 ${height - 20} L${width - 20} ${height - 20} L${width - 10} 20 L30 20 Z`}
            fill={`url(#skipGradient-${size})`}
            stroke="#1e40af"
            strokeWidth="2"
            filter={`url(#shadow-${size})`}
          />
          <text
            x={width / 2}
            y={height / 2 + 8}
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: `${Math.max(16, 24 - size * 0.3)}px` }}
          >
            {size}Y
          </text>
        </svg>
        <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {size} Yards
        </div>
        {!allowedOnRoad && (
          <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
            <AlertTriangle size={14} />
            Not Allowed on The Road
          </div>
        )}
      </div>
    );
  };

  const handleSkipSelect = (skip) => {
    setSelectedSkip(selectedSkip?.id === skip.id ? null : skip);
  };

  const handleCardClick = (skip) => {
    setModalSkip(skip);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalSkip(null);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log('Continuing with skip:', selectedSkip);
      // Add navigation logic here
    }
  };

  const handleBack = () => {
    console.log('Going back to previous step');
    // Add navigation logic here
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <Header 
        darkMode={darkMode} 
        handleBack={handleBack} 
        selectedSkip={selectedSkip} 
        handleContinue={handleContinue} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
            Choose Your Perfect Skip Size
          </h1>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Select the skip size that best suits your project needs. All prices include delivery, collection, and disposal.
          </p>
        </div>

        {/* Skip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-12">
          {skipData.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selectedSkip={selectedSkip}
              darkMode={darkMode}
              handleSkipSelect={handleSkipSelect}
              handleCardClick={handleCardClick}
              calculateFinalPrice={calculateFinalPrice}
              getSkipImage={getSkipImage}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} border rounded-full px-6 py-3 backdrop-blur-sm`}>
            <Info size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Click any skip to view detailed information and pricing breakdown
            </p>
          </div>
        </div>
      </div>

      <SkipModal
        showModal={showModal}
        modalSkip={modalSkip}
        darkMode={darkMode}
        selectedSkip={selectedSkip}
        closeModal={closeModal}
        handleSkipSelect={handleSkipSelect}
        calculateFinalPrice={calculateFinalPrice}
        getSkipImage={getSkipImage}
      />
    </div>
  );
};

export default SkipHireSelection;