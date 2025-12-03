import React from 'react';
import { DailyContent, Language } from '../types';
import { UI_TEXT } from '../constants';

interface TabReadingsProps {
  content: DailyContent | null;
  loading: boolean;
  language: Language;
}

const TabReadings: React.FC<TabReadingsProps> = ({ content, loading, language }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-100 border-t-blue-600"></div>
        <p className="text-sm font-medium animate-pulse">{UI_TEXT[language].loading}</p>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="space-y-6 animate-fade-in pb-24">
      <div className="text-center space-y-2 pb-2">
        <h2 className="text-2xl font-bold text-slate-800 font-serif">{content.date}</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-5">
        {/* First Reading */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-blue-900 border-l-4 border-blue-500 pl-3">
                {UI_TEXT[language].firstReading}
             </h3>
             <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">{content.reading1.source}</span>
          </div>
          <p className="font-serif text-slate-600 leading-loose text-lg text-justify">
            {content.reading1.text}
          </p>
        </div>

        {/* Psalm */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-50"></div>
           <div className="flex items-center justify-between mb-4 relative z-10">
             <h3 className="text-lg font-bold text-indigo-900 border-l-4 border-indigo-400 pl-3">
                {UI_TEXT[language].psalm}
             </h3>
             <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full">{content.psalm.source}</span>
          </div>
          <p className="font-serif text-indigo-900 leading-loose text-lg italic text-center relative z-10">
            "{content.psalm.text}"
          </p>
        </div>

        {/* Gospel */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-blue-900 border-l-4 border-blue-500 pl-3">
                {UI_TEXT[language].gospel}
             </h3>
             <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">{content.gospel.source}</span>
          </div>
          <p className="font-serif text-slate-600 leading-loose text-lg text-justify">
            {content.gospel.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabReadings;