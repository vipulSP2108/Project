import React, { useEffect, useRef, useState } from "react";
import Cards from './Cards';
import { sampleDataSkills, spriteUrl } from "../Data/sampleDataSkills";
import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

function Skills(props) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [visible, setVisible] = useState(true);
  const [visibleType, setVisibleType] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleTypeClick = (type) => {
    setVisibleType(visibleType === type ? null : type);
  };

  const uniqueTypes = [...new Set(sampleDataSkills.map(item => item.type))];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative  h-screen w-full cursor-grab'>
      {visible ? (
        <div className="bg-black h-full w-full absolute top-0 left-0 flex items-center justify-center">
          <h1 className="font-extrabold text-[60px] text-center dot-animation">
            Click, hold, and drag to discover the change
          </h1>
        </div>
        // <h1 className='absolute font-extrabold text-[220px] text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Savvy</h1>
      ) : (
        <>
          <div className='p-10 absolute top-0 left-0 h-full w-full overflow-hidden gap-5'>
            {/* <div className="p-10 flex h-full w-full align-middle justify-center flex-wrap gap-5"> */}
            <div ref={ref1} className="p-10 w-full h-1/2 flex flex-wrap mb-3 justify-center">
              {uniqueTypes.map((type, index) => (
                <motion.div
                  drag
                  dragConstraints={ref1}
                  dragElastic={0.2}
                  whileHover={{ zIndex: 10, opacity: 100, scale: 1.1 }}
                  key={index}
                  onClick={() => handleTypeClick(type)}
                  className="absolute overflow-hidden h-[260px] w-[195px] rounded-xl backdrop-blur-lg bg-black/80 border border-white/40 text-white flex items-center cursor-pointer"
                  style={{
                    // top: `calc(130px)`,
                    zIndex: uniqueTypes.length - index, // Set z-index dynamically
                    left: `${index * 70}px`, // Set left position dynamically
                  }}
                >
                  <div className="w-0 mb-1 absolute transform -rotate-90 origin-bottom-left bottom-0 right-[18%] font-extrabold text-3xl uppercase">{type}</div>
                  <div className="absolute flex flex-col h-full w-[18%] right-0">
                    {sampleDataSkills.filter(item => item.type === type).map((item, index) => (
                      <div key={index} className={`${item.bgColor} flex-grow flex items-center justify-center`}>
                        <svg className={`h-16 w-16 mx-auto select-none pointer-events-none ${item.logoBg || ""}`}>
                           <use href={`${spriteUrl}#${item.logoId}`} />
                        </svg>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div ref={ref2} className="p-10 w-full h-1/2 flex flex-wrap gap-3 justify-center cursor-grab">
              {sampleDataSkills.filter(item => item.type === visibleType).map((item, index) => (
                <Cards key={index} index={index} data={item} reference={ref2} />
              ))}
            </div>
          </div>

          {/* Background */}
          <div className='h-full w-full'>
            {/* Info Icon */}
            <div
              className="absolute top-6 right-6 border-[2px] border-[#52525b] rounded-full h-11 w-11 flex items-center justify-center text-lg font-bold cursor-pointer"
              onMouseEnter={() => setIsPopupVisible(true)} // Show popup on hover
              onMouseLeave={() => setIsPopupVisible(false)} // Hide popup when hover ends
            >
              {/* <FaInfo size={14} color="#52525b" /> */}
              <FaInfoCircle />
            </div>
            

            {/* Popup */}
            {isPopupVisible && (
              <div
              onMouseEnter={() => setIsPopupVisible(true)} // Show popup on hover
              onMouseLeave={() => setIsPopupVisible(false)} // Hide popup when hover ends
               className="absolute top-14 right-6 p-4 bg-black text-white text-lg rounded-lg shadow-lg">
                <h1 className="font-bold text-xl">Instructions</h1>
                <h1 className="text-zinc-300">Hold and drag to move the cards.</h1>
                <h1 className="text-zinc-300">Click to open the detailed view of skills, languages, or tools.</h1>
              </div>
            )}
            <div className='p-[100px] w-full font-bold flex justify-center text-zinc-600 text-2xl'>Proficiencies.</div>
            <h1 className='absolute font-extrabold text-[220px] text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Savvy</h1>
          </div>
        </>
      )}

    </div>
  );
}

export default Skills;

