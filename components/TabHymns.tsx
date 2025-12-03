import React, { useState, useMemo } from 'react';
import { Hymn, Language, HymnCategory } from '../types';
import { HYMNS_DATA, UI_TEXT } from '../constants';

interface TabHymnsProps {
  language: Language;
}

const TabHymns: React.FC<TabHymnsProps> = ({ language }) => {
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const cats = new Set(HYMNS_DATA.map(h => h.category));
    return ['All', ...Array.from(cats).sort()];
  }, []);

  const filteredHymns = useMemo(() => {
    return HYMNS_DATA.filter(hymn => {
      const matchesLanguage = hymn.language === language;
      const matchesCategory = filterCategory === 'All' || hymn.category === filterCategory;
      const matchesSearch = hymn.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hymn.lyrics.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesLanguage && matchesCategory && matchesSearch;
    });
  }, [language, filterCategory, searchTerm]);

  if (selectedHymn) {
    return (
      <div className="pb-24 animate-slide-in">
        <button 
          onClick={() => setSelectedHymn(null)}
          className="flex items-center space-x-2 text-blue-600 mb-6 font-bold hover:text-blue-800 transition px-2"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <span>{UI_TEXT[language].backToHymns}</span>
        </button>

        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden border border-slate-100">
           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-6 -mr-6 text-white/10 text-9xl transform rotate-12">
                 <i className="fa-solid fa-music"></i>
               </div>
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
               
               <h2 className="text-3xl font-bold font-serif mb-4 relative z-10">{selectedHymn.title}</h2>
               <div className="flex gap-2 relative z-10">
                 <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full border border-white/30 uppercase tracking-wide font-bold">
                   {selectedHymn.category}
                 </span>
                 <span className="inline-block bg-indigo-900/40 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wide font-bold">
                   {selectedHymn.language}
                 </span>
               </div>
           </div>
           <div className="p-8 bg-white min-h-[300px]">
             <pre className="font-serif text-slate-700 whitespace-pre-wrap leading-loose text-lg text-center font-sans">
               {selectedHymn.lyrics}
             </pre>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 space-y-5">
      {/* Search and Filter Area */}
      <div className="sticky top-0 bg-[#f0f4f8]/95 backdrop-blur-sm pt-2 pb-4 z-30 space-y-3">
        {/* Search */}
        <div className="relative group">
             <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-blue-500 transition-colors"></i>
             <input
                type="text"
                placeholder={UI_TEXT[language].hymnSearch}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-blue-100 ring-2 ring-transparent focus:ring-blue-200 focus:border-blue-400 bg-white outline-none transition-all shadow-sm text-blue-900 placeholder:text-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
        </div>
        
        {/* Category Filter Chips */}
        <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                        filterCategory === cat 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 transform scale-105' 
                        : 'bg-white text-slate-500 border border-slate-100 hover:border-blue-200 hover:text-blue-600 shadow-sm'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Hymn List */}
      <div className="grid gap-3">
        {filteredHymns.length > 0 ? (
          filteredHymns.map(hymn => (
            <button
                key={hymn.id}
                onClick={() => setSelectedHymn(hymn)}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 group text-left relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center space-x-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-inner">
                        <i className="fa-solid fa-music"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 group-hover:text-blue-900 transition font-serif text-lg">{hymn.title}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{hymn.category}</p>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-white text-gray-300 group-hover:text-blue-500 transition relative z-10">
                    <i className="fa-solid fa-chevron-right text-sm"></i>
                </div>
            </button>
          ))
        ) : (
          <div className="text-center py-16 text-slate-400">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <i className="fa-solid fa-music text-3xl opacity-30"></i>
            </div>
            <p className="font-medium">No hymns found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabHymns;