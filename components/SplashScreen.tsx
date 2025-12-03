import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../constants';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const timer = setTimeout(() => {
      setFading(true);
    }, 2000);

    // Unmount after animation completes
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#f0f4f8] flex flex-col items-center justify-center transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative w-48 h-48 mb-8 animate-[pulse_3s_infinite]">
         {/* Decorative circle background */}
         <div className="absolute inset-0 rounded-full border-[1px] border-blue-500/30 scale-125 animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute inset-0 rounded-full border-[1px] border-indigo-900/10 scale-150"></div>
         
         <img 
           src={LOGO_URL} 
           alt="Diocese Logo" 
           className="w-full h-full object-contain relative z-10 drop-shadow-xl"
           onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=Diocese';
           }}
         />
      </div>
      
      <div className="text-center space-y-2 animate-slide-up">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">Diocese of</h2>
        <h1 className="text-3xl font-serif font-bold text-blue-900">Simla Chandigarh</h1>
      </div>

      <div className="absolute bottom-10 text-slate-400 text-xs tracking-widest opacity-50 font-medium">
         IN CARITATE PER VERBUM PER MARIAM
      </div>
    </div>
  );
};

export default SplashScreen;