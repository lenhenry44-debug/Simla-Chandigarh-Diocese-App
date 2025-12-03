import React from 'react';
import { Language } from '../types';
import { LOGO_URL, UI_TEXT, DATE_MIN, DATE_MAX } from '../constants';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, selectedDate, onDateChange }) => {
  
  const inputDateValue = selectedDate.toISOString().split('T')[0];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onDateChange(new Date(e.target.value));
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md text-blue-900 sticky top-0 z-40 border-b border-blue-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-md mx-auto px-4 py-4 flex flex-col space-y-4">
        
        {/* Top Row: Logo and Title */}
        <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md flex-shrink-0 flex items-center justify-center">
                 <div className="bg-white w-[96%] h-[96%] rounded-[14px] flex items-center justify-center overflow-hidden">
                   <img 
                      src={LOGO_URL}
                      alt="Diocese Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Logo';
                      }}
                   />
                 </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-0.5">Diocese of</span>
                <span className="text-xl font-serif font-bold leading-none text-blue-900 drop-shadow-sm tracking-tight">Simla Chandigarh</span>
            </div>
        </div>

        {/* Bottom Row: Modern Controls */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Date Picker Pill */}
          <div className="relative flex-1 group">
             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-500 group-focus-within:text-blue-600 transition-colors">
                <i className="fa-regular fa-calendar-days text-sm"></i>
             </div>
             <input 
                type="date"
                min={DATE_MIN}
                max={DATE_MAX}
                value={inputDateValue}
                onChange={handleDateChange}
                className="w-full pl-10 pr-3 py-2.5 bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-2xl text-sm font-bold text-blue-900 focus:ring-2 focus:ring-blue-400/30 focus:border-blue-300 focus:outline-none appearance-none cursor-pointer transition-all shadow-sm"
             />
          </div>

          {/* Language Selector Pill */}
          <div className="relative group shrink-0">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-2xl shadow-md shadow-blue-500/20 text-sm font-bold transition-all transform active:scale-95">
              <i className="fa-solid fa-language text-blue-100"></i>
              <span>{currentLanguage}</span>
              <i className="fa-solid fa-chevron-down text-xs ml-1 opacity-70"></i>
            </button>
            
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl shadow-blue-900/10 overflow-hidden hidden group-hover:block border border-blue-50 animate-fade-in z-50 transform origin-top-right">
               <div className="bg-blue-50/80 px-4 py-2 text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                  {UI_TEXT[currentLanguage].selectLanguage}
               </div>
               {Object.values(Language).map((lang) => (
                  <button
                      key={lang}
                      onClick={() => onLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-3 text-sm transition hover:bg-blue-50 ${currentLanguage === lang ? 'bg-blue-50 font-bold text-blue-700 border-l-4 border-blue-600' : 'text-gray-600'}`}
                  >
                      {lang}
                  </button>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;