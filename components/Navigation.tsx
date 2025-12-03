import React from 'react';
import { AppTab, Language } from '../types';
import { UI_TEXT } from '../constants';

interface NavigationProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, onTabChange, language }) => {
  const tabs = [
    { id: AppTab.READINGS, icon: 'fa-book-open' },
    { id: AppTab.REFLECTION, icon: 'fa-spa' },
    { id: AppTab.SAINT, icon: 'fa-user-graduate' }, // User-graduate often looks like a saint/scholar icon
    { id: AppTab.HYMNS, icon: 'fa-music' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-blue-100 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-50 rounded-t-2xl">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 px-2">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 transition-all duration-300 relative group`}
            >
              {/* Active Indicator Background */}
              {isActive && (
                <div className="absolute top-2 w-12 h-12 bg-blue-50 rounded-2xl -z-10 animate-fade-in"></div>
              )}
              
              <div className={`text-xl transition-all duration-300 ${isActive ? 'text-blue-600 -translate-y-1' : 'text-gray-400 group-hover:text-gray-500'}`}>
                <i className={`fa-solid ${tab.icon} ${isActive ? 'drop-shadow-sm' : ''}`}></i>
              </div>
              
              <span className={`text-[10px] font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-800' : 'text-gray-400'}`}>
                  {UI_TEXT[language][tab.id]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;