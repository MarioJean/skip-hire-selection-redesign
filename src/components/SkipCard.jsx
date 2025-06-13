import React from 'react';
import { 
  Check, 
  Truck, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';

const SkipCard = ({ 
  skip, 
  selectedSkip, 
  darkMode, 
  handleSkipSelect, 
  handleCardClick,
  calculateFinalPrice,
  getSkipImage 
}) => {
  return (
    <div
      onClick={(e) => {
        if (!e.target.closest('button')) {
          handleCardClick(skip);
        }
      }}
      className={`group relative ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:-translate-y-1 ${
        selectedSkip?.id === skip.id
          ? 'border-blue-500 ring-2 ring-blue-500/30 shadow-blue-500/20'
          : 'hover:border-blue-300'
      }`}
    >
      {selectedSkip?.id === skip.id && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full shadow-lg z-10">
          <Check size={16} />
        </div>
      )}

      <div className="p-6">
        {getSkipImage(skip.size, skip.allowed_on_road, skip.allows_heavy_waste)}
      </div>

      <div className="px-6 pb-6">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}>
          {skip.size} Yard Skip
        </h3>

        <div className="text-center mb-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
            £{calculateFinalPrice(skip.price_before_vat, skip.vat)}
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {skip.hire_period_days} day hire period
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`p-1.5 rounded-full ${
                skip.allowed_on_road ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'
              }`}
            >
              <Truck size={16} className={skip.allowed_on_road ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} />
            </div>
            <span className={`text-sm ${skip.allowed_on_road ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              Road
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`p-1.5 rounded-full ${
                skip.allows_heavy_waste ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'
              }`}
            >
              <Shield size={16} className={skip.allows_heavy_waste ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} />
            </div>
            <span className={`text-sm ${skip.allows_heavy_waste ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              Heavy
            </span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSkipSelect(skip);
          }}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            selectedSkip?.id === skip.id
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30'
          } transform hover:scale-105`}
        >
          {selectedSkip?.id === skip.id ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} />
              Selected
            </span>
          ) : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;