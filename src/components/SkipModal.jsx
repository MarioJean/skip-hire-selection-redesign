import React from 'react';
import { 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Truck, 
  Shield, 
  Clock, 
  Star, 
  Info 
} from 'lucide-react';

const SkipModal = ({ 
  showModal, 
  modalSkip, 
  darkMode, 
  selectedSkip, 
  closeModal, 
  handleSkipSelect,
  calculateFinalPrice,
  getSkipImage 
}) => {
  if (!showModal || !modalSkip) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className={`relative ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white border-gray-200'} rounded-3xl max-w-lg w-full shadow-2xl border transition-all transform animate-in fade-in zoom-in duration-200`}>
        <button
          onClick={closeModal}
          className={`absolute -top-3 -right-3 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'} transition-colors p-2 rounded-full shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            {getSkipImage(modalSkip.size, modalSkip.allowed_on_road, modalSkip.allows_heavy_waste)}
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star size={16} />
              Popular Choice
            </div>
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              {modalSkip.size} Yard Skip
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
              Perfect for your project needs
            </p>
          </div>

          <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-800' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'} rounded-2xl p-6 mb-6 border`}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                £{calculateFinalPrice(modalSkip.price_before_vat, modalSkip.vat)}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                Including VAT ({modalSkip.vat}%)
              </div>
              <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} px-3 py-2 rounded-full text-sm font-medium shadow-sm`}>
                <Clock size={14} />
                <span>{modalSkip.hire_period_days} day hire period</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl p-4 border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${modalSkip.allowed_on_road ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                  <Truck size={18} className={modalSkip.allowed_on_road ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} />
                </div>
                <div>
                  <div className="font-semibold text-sm">Road Placement</div>
                  <div className={`text-xs ${modalSkip.allowed_on_road ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} font-medium`}>
                    {modalSkip.allowed_on_road ? 'Allowed' : 'Not Allowed'}
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl p-4 border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${modalSkip.allows_heavy_waste ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                  <Shield size={18} className={modalSkip.allows_heavy_waste ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} />
                </div>
                <div>
                  <div className="font-semibold text-sm">Heavy Waste</div>
                  <div className={`text-xs ${modalSkip.allows_heavy_waste ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} font-medium`}>
                    {modalSkip.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-xl p-4 mb-6`}>
            <div className="flex items-start gap-3">
              <Info size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-1`}>
                  What's Included
                </h4>
                <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  Delivery, collection, disposal, and all standard waste types included in the price.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                handleSkipSelect(modalSkip);
                closeModal();
              }}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                selectedSkip?.id === modalSkip.id
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30'
              } transform hover:scale-105`}
            >
              {selectedSkip?.id === modalSkip.id ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} />
                  Selected
                </span>
              ) : 'Select This Skip'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipModal;