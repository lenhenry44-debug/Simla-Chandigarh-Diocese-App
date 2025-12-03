import React from 'react';
import { DailyContent, Language } from '../types';
import { UI_TEXT } from '../constants';

interface TabReflectionProps {
  content: DailyContent | null;
  loading: boolean;
  language: Language;
}

const TabReflection: React.FC<TabReflectionProps> = ({ content, loading, language }) => {
    if (loading) {
        return (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-100 border-t-blue-600"></div>
          </div>
        );
      }
    
      if (!content) return null;

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
       <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg shadow-blue-900/10 group">
            {/* Open Bible Image */}
            <img 
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1000" 
                alt="Open Bible" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent flex items-end p-8">
                <div>
                    <span className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2 block">Daily Inspiration</span>
                    <h2 className="text-3xl font-bold text-white font-serif">{UI_TEXT[language].reflectionTitle}</h2>
                </div>
            </div>
       </div>

       <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
           <i className="fa-solid fa-quote-left absolute top-6 left-6 text-4xl text-blue-100 -z-0"></i>
           <p className="font-serif text-slate-600 text-lg leading-loose relative z-10 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-2 float-none">
               {content.reflection}
           </p>
       </div>
    </div>
  );
};

export default TabReflection;