const setGap = 16;
const divideWidth = 7;
const divideHeight = 4;

import React, { useContext, useEffect, useRef, useState } from 'react';
import './Home.css';
import { GlobalStateContext } from '../Context/GlobalStateProvider';

export default function Home() {

  const { oneGap, setOneGap, oneCellHeight, setOneCellHeight, oneCellWidth, setOneCellWidth } = useContext(GlobalStateContext);

  // <------------------------- Context updation ------------------------->
  const [parentHeight, setParentHeight] = useState(window.innerHeight);
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentHeight(window.innerHeight);
      setParentWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setOneGap(setGap);
    setOneCellWidth((parentWidth / divideWidth) - (setGap))
    setOneCellHeight((parentHeight / divideHeight) - (setGap))
  }, [parentHeight, setGap]);

  // ---------------------------------
  const ReactTextRef = useRef(null);

  useEffect(() => {
    const ReactTextAnimation = () => {
      if (!ReactTextRef.current) return;

      const ReactElement = ReactTextRef.current;

      const animationDuration = 2; // Random duration between 5s and 15s
      const keyframes = `@keyframes ReactTextAnimation { ` +
        `0% { background-position: 0% 0%; } ` +
        `25% { background-position: 25% 25%; } ` +
        `50% { background-position: 50% 50%; } ` +
        `75% { background-position: 75% 75%; } ` +
        `100% { background-position: 100% 100%; } ` +
        `}`;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      ReactElement.style.animation = `ReactTextAnimation ${animationDuration}s infinite alternate`;
      // element.style.animation = `breathe 8s linear infinite`;
    };

    ReactTextAnimation();
    const intervalId = setInterval(ReactTextAnimation, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const body = document.body;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });

  return (
    <div
      className='z-0 mt-12 md:mt-0  flex flex-col items-center justify-center w-full h-screen text-center'
    >
      <div className=' z-30'>
        <div style={{ fontFamily: "Montserrat", userSelect: "none" }} className=' text-lg md:text-xl tracking-widest font-normal text-[#888888]'>
          NAMASKAR !!!
        </div>
      </div>
      {/* Building cool stuff since 2014. */}
      {/* Creating chaos with code since 2014. */}
      <div
        style={{ fontFamily: "Zain", userSelect: "none" }} // Zain
        className=' z-30 w-screen text-7xl md:text-8xl font-black'>
        <div>Building <span className=' block md:inline'></span>

          <span
            ref={ReactTextRef}
            style={{
              // display: 'inline-block', //
              background: 'linear-gradient(45deg, rgb(0, 255, 255),  rgb(0, 0, 255))',
              // backgroundClip: 'text', //
              WebkitBackgroundClip: 'text',
              // color: 'transparent',
              WebkitTextFillColor: 'transparent',
              // textFillColor: 'transparent', //
              backgroundSize: '1000% 1000%',
              // animation: 'gradient-animation 3s ease infinite',
            }}
          >
            cool stuff
          </span>
        </div>
        <div className=' pb-20 md:pb-0'>
          since <span className=' block md:inline'>2021</span>
        </div>
      </div>

      {/* <div
        style={{ fontFamily: "Zain", userSelect: "none" }} // Zain
        className=' z-30 w-screen text-6xl md:text-8xl font-black'>
        <div>Together, <span className=' block md:inline'>Let’s</span></div>
        <div>
          <span
            ref={ReactTextRef}
            style={{
              // display: 'inline-block', //
              background: 'linear-gradient(45deg, rgb(0, 255, 255),  rgb(0, 0, 255))',
              // backgroundClip: 'text', //
              WebkitBackgroundClip: 'text',
              // color: 'transparent',
              WebkitTextFillColor: 'transparent',
              // textFillColor: 'transparent', //
              backgroundSize: '1000% 1000%',
              // animation: 'gradient-animation 3s ease infinite',
            }}
          >
            React
          </span> to <span className=' block md:inline'>Your</span>Vision!
        </div>
      </div> */}
    </div>
  );
}



// import React from 'react';
// import gridSvg from '../assets/misc/grid.svg'; // Adjust the path if necessary

// const Home = () => {
//   const divStyle = {
//     backgroundImage: `url(${gridSvg})`,
//     backgroundSize: 'cover', // Adjust as needed
//     backgroundPosition: 'center', // Adjust as needed
//     height: '100vh', // Adjust as needed
//     width: '100%', // Adjust as needed
//   };

//   return (
//     <div style={divStyle}>
//       {/* Your other content */}
//     </div>
//   );
// };

// export default Home;
