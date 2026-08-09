import React, { useEffect, useRef } from 'react';
import './Scroller.css'; // Import the CSS file
import { spriteUrl } from '../Data/sampleDataSkills';

const Scroller = ({ items, direction = 'left', speed = 'fast', topbottom='true' }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
    }

    function addAnimation() {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div
      className="scroller"
      data-direction={direction}
      top-bottom={topbottom}
      data-speed={speed}
      ref={scrollerRef}
    >
      <div className="scroller__inner">
        {items.map((item, index) =>
          typeof item === 'string' ? (
            <>
            <div key={index} >
              {item}
            </div>
            {/* <div className=' self-center bg-white w-3 h-3 rounded-full' /> */}
           </>
          ) : (
            <svg key={index} className={`h-[6vh] w-[6vh] mx-auto select-none transition-all duration-300 cursor-pointer ${item.logoBg || ""}`}>
               <use href={`${spriteUrl}#${item.logoId}`} />
            </svg>
          )
        )}
      </div>
    </div>
  );
};

export default Scroller;
