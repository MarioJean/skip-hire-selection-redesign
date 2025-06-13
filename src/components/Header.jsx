import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  MapPin, 
  Trash2, 
  ClipboardCheck, 
  Shield, 
  Calendar, 
  CreditCard,
  Sun,
  Moon 
} from 'lucide-react';

const Header = ({ 
  darkMode, 
  handleBack, 
  selectedSkip, 
  handleContinue, 
  toggleTheme 
}) => {
  const steps = [
    { name: 'Postcode', icon: <MapPin size={16} /> },
    { name: 'Waste Type', icon: <Trash2 size={16} /> },
    { name: 'Select Skip', icon: <ClipboardCheck size={16} /> },
    { name: 'Permit Check', icon: <Shield size={16} /> },
    { name: 'Choose Date', icon: <Calendar size={16} /> },
    { name: 'Payment', icon: <CreditCard size={16} /> }
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'} backdrop-blur-xl shadow-sm border-b sticky top-0 z-40`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              darkMode
                ? 'border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Progress Steps */}
          <div className="flex-grow flex justify-center items-center space-x-1 sm:space-x-2 px-4">
            <div className="hidden lg:flex items-center space-x-2 sm:space-x-4">
              {steps.map((step, index) => (
                <div key={step.name} className="flex items-center space-x-1 sm:space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      index === 2
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : index < 2
                        ? 'bg-green-500 text-white'
                        : darkMode
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                    title={step.name}
                  >
                    {index < 2 ? <Check size={14} /> : step.icon}
                  </div>
                  <span className={`hidden md:inline text-sm font-medium ${
                    index === 2
                      ? 'text-blue-600 font-semibold'
                      : index < 2
                      ? 'text-green-600'
                      : darkMode
                      ? 'text-gray-400'
                      : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                  {index < 5 && (
                    <ArrowRight
                      size={16}
                      className={`${darkMode ? 'text-gray-600' : 'text-gray-300'} hidden sm:block`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleContinue}
              disabled={!selectedSkip}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                selectedSkip
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline">Continue</span>
              <ArrowRight size={18} />
            </button>
            <span
              onClick={toggleTheme}
              className={`cursor-pointer p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'text-yellow-400 hover:bg-gray-700/50'
                  : 'text-gray-600 hover:bg-gray-100/50'
              } hover:scale-110`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;