import React from 'react';

export default function NavbarBottom() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed z-[10000] bottom-8 right-4 md:bottom-12 md:right-14 rounded-2xl cursor-pointer"
      style={{ gap: '1px' }}
      onClick={handleScrollToTop}
    >
      <text 
        style={{ fontFamily: 'Montserrat', writingMode: 'sideways-lr' }} 
        className="hover:text-[#fff] text-[#888888] uppercase text-xs md:text-sm font-bold pr-2"
      >
        Move to 
        
        <span className="text-[#fff] font-bold text-xs md:text-sm"> Top</span>
      </text>
    </div>
  );
}
