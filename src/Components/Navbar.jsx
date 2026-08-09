import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaUser } from 'react-icons/fa6';
import './Navbar.css';
import logo from '../assets/misc/logo.png';
import { MagneticIcon } from './MagneticIcon';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const iconMap = {
  FaInstagram: FaInstagram,
  FaLinkedinIn: FaLinkedinIn,
  FaGithub: FaGithub,
};

const ContactInfo = [
  {
    iconName: "FaInstagram",
    size: "25",
    background: "linear-gradient(135deg, #8316FA, #FC17CA, #FDC61C)",
    scale: 0.7,
    link: "https://instagram.com/vipulsp_21?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
  },
  {
    iconName: "FaLinkedinIn",
    size: "25",
    background: "#1576B4",
    scale: 0.7,
    link: 'https://www.linkedin.com/in/vipul-patil-b76a65250',
  },
  {
    iconName: "FaGithub",
    size: "28",
    background: "#090909",
    scale: 0.7,
    link: "https://github.com/vipulSP2108",
  },
];

export default function Navbar() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollingUp(false); // Scrolling down
      } else {
        setScrollingUp(true);  // Scrolling up
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div className={`navbar ${scrollingUp ? 'show' : 'hide'} fixed z-50 p-[7px] top-12 right-10 justify-between rounded-full`} id='glasses'>
        <div style={{ fontFamily: "Zain" }} className='bg-white flex text-black p-1 gap-6 rounded-full items-center'>
          <div className='w-20 rounded-full h-9 p-1 bg-white overflow-hidden'>
            <img className='' src={logo} alt="Logo" />
          </div>
          <div className='text-lg text-[#131821]'>About</div>
          <div className='text-lg text-[#131821]'>Work</div>
          <div className='text-lg text-[#131821]'>Services</div>
          <div className='text-lg text-[#131821]'>Contact</div>
          <div className='bg-[#2272EF] w-20 rounded-full h-9 flex items-center justify-center'>
            <FaArrowUp color='#fff' />
          </div>
        </div>
      </div>

      {!scrollingUp && (
        <div className='fixed z-50 bottom-12 right-14 rounded-2xl' style={{ gap: '1px' }} >
          {/* 
           <div className='fixed z-50 bottom-12 right-14 rounded-2xl' style={{ gap: '1px' }} id='glasses'>
          {ContactInfo.map((item, index) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div key={index} style={{ transform: `scale(${0.7})` }} className='p-[7px] justify-between rounded-full'>
                <a target="_blank" rel="noopener noreferrer">
                  <MagneticIcon icon={IconComponent} size={item.size} background={item.background} />
                </a>
              </div>
            );
          })} 
           </div>*/}
          <div >
          {/* textOrientation: 'upright', */}
            <text style={{fontFamily:'Montserrat', writingMode: 'sideways-lr'}} className=' text-[#888888] uppercase text-sm font-medium pr-2'>Move to 
              <span className=' text-[#fff] font-bold'>  Top</span>
            </text>
          </div>
        </div>
      )}
    </>
  );
}