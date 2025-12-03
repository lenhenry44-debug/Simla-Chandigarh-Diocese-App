import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TabReadings from './components/TabReadings';
import TabReflection from './components/TabReflection';
import TabSaint from './components/TabSaint';
import TabHymns from './components/TabHymns';
import SplashScreen from './components/SplashScreen';
import { AppTab, DailyContent, Language } from './types';
import { fetchDailyContent } from './services/geminiService';
import { DATE_MIN, DATE_MAX } from './constants';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.READINGS);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.ENGLISH);
  
  // Initialize date logic
  const getInitialDate = () => {
    const today = new Date();
    const min = new Date(DATE_MIN);
    const max = new Date(DATE_MAX);
    // If today is within range, use today. Otherwise use min date (Dec 1, 2025).
    if (today >= min && today <= max) return today;
    return min;
  };
  
  const [selectedDate, setSelectedDate] = useState<Date>(getInitialDate());
  const [dailyContent, setDailyContent] = useState<DailyContent | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch content whenever language or date changes
    const loadContent = async () => {
      setLoading(true);
      // Reset content to show loading state effectively
      setDailyContent(null); 
      const content = await fetchDailyContent(currentLanguage, selectedDate);
      setDailyContent(content);
      setLoading(false);
    };

    // Delay initial load slightly to allow splash screen to render first
    if (!showSplash) {
        loadContent();
    } else {
        // Prefetch during splash
        loadContent();
    }
  }, [currentLanguage, selectedDate]);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 bg-[#f0f4f8] ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Header 
          currentLanguage={currentLanguage} 
          onLanguageChange={setCurrentLanguage}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />

        <main className="flex-1 max-w-md mx-auto w-full px-4 pt-6">
          {currentTab === AppTab.READINGS && (
              <TabReadings content={dailyContent} loading={loading} language={currentLanguage} />
          )}
          {currentTab === AppTab.REFLECTION && (
              <TabReflection content={dailyContent} loading={loading} language={currentLanguage} />
          )}
          {currentTab === AppTab.SAINT && (
              <TabSaint content={dailyContent} loading={loading} language={currentLanguage} />
          )}
          {currentTab === AppTab.HYMNS && (
              <TabHymns language={currentLanguage} />
          )}
        </main>

        <Navigation 
          currentTab={currentTab} 
          onTabChange={setCurrentTab} 
          language={currentLanguage}
        />
      </div>
    </>
  );
};

export default App;