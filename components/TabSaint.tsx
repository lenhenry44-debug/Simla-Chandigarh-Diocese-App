import React from 'react';
import { DailyContent, Language } from '../types';
import { UI_TEXT } from '../constants';

interface TabSaintProps {
  content: DailyContent | null;
  loading: boolean;
  language: Language;
}

const TabSaint: React.FC<TabSaintProps> = ({ content, loading, language }) => {
    if (loading) {
        return (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-100 border-t-blue-600"></div>
          </div>
        );
      }
    
      if (!content) return null;

      // Use English name for search to ensure accurate results, fallback to localized name if missing
      const searchName = content.saint.englishName || content.saint.name;
      const saintNameEncoded = encodeURIComponent(searchName);
      
      // Removed "Icon" to get more realistic/standard portraits. 
      const dynamicSaintImage = `https://tse2.mm.bing.net/th?q=${saintNameEncoded}+Catholic+Saint&w=500&h=500&c=7&rs=1&p=0`;

  return (
    <div className="space-y-6 pb-24 animate-fade-in h-full">
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
            <div className="h-96 relative bg-slate-200">
                 <img 
                    src={dynamicSaintImage} 
                    alt={content.saint.name}
                    className="w-full h-full object-cover transition-opacity duration-700"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543791959-12b3f543282a?auto=format&fit=crop&q=80&w=1000";
                    }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                        {UI_TEXT[language].saintOfTheDay}
                    </span>
                    <h2 className="text-3xl font-bold text-white font-serif leading-tight drop-shadow-md">
                        {content.saint.name}
                    </h2>
                 </div>
            </div>
            <div className="p-8">
                <div className="flex items-center space-x-2 mb-6 text-blue-300 opacity-60">
                    <i className="fa-solid fa-cross"></i>
                    <div className="h-px bg-blue-100 flex-1"></div>
                </div>
                <p className="font-serif text-slate-600 leading-loose text-lg text-justify first-letter:text-4xl first-letter:text-blue-800 first-letter:font-bold first-letter:mr-2 float-none">
                    {content.saint.description}
                </p>
            </div>
        </div>
    </div>
  );
};

export default TabSaint;