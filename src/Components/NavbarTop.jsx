import React from 'react';

export default function NavbarTop({ aboutRef, workRef, contactRef }) {
  const handleScrollToSection = (section) => {
    if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'work') {
      workRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar fixed z-[10000] px-[10px] top-5 right-4 md:px-[30px] md:top-12 md:right-10 justify-between">
      <div style={{ fontFamily: "Montserrat" }} className="text-right uppercase">
        <div
          className="hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1"
          onClick={() => handleScrollToSection('about')}>
          About
        </div>
        <div className="hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1"
          onClick={() => handleScrollToSection('work')}>
          Work
        </div>
        <div
          className="hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1"
          onClick={() => handleScrollToSection('contact')}>
          Contact
        </div>
      </div>
    </div>
  );
}
