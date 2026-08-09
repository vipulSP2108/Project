import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { spriteUrl } from "../Data/sampleDataSkills";


const Cards = (props, index) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  const maxMultiplier = 10;
  const numCards = props.data.length;


  return (
    <motion.div
      drag
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotateY: isFlipped ? 180 : 0, transition: { duration: 0.7 }, transformStyle: 'preserve-3d' }}
      dragConstraints={props.reference}
      dragElastic={0.2}
      className={` absolute gap-2 overflow-hidden ${props.data.textColor_first} h-[260px] w-[195px] rounded-xl backdrop-blur-lg bg-zinc-900/60 border border-white/10`}
      style={{ perspective: 1000, left: `${props.index * 70}px` }}
    >
      
      <div className="h-full w-full">
        <div className={`h-[82%] flex flex-col justify-center ${isFlipped ? 'hidden' : 'block'}`}>
          <svg className={`h-16 w-16 mx-auto select-none pointer-events-none ${props.data.logoBg || ""}`}>
             <use href={`${spriteUrl}#${props.data.logoId}`} />
          </svg>
          <div className="text-center">{props.data.logoName}</div>
        </div>
        {console.log(index)}
        <div className={`absolute bottom-0 w-full h-[18%] flex ${props.data.bgColor} ${props.data.textColor_second} justify-center font-semibold items-center ${isFlipped ? 'hidden' : 'block'}`}>
          <a href={`https://${props.data.logoLink}`} target="_blank" rel="noopener noreferrer" className="uppercase text-xs font-bold" onClick={(e) => e.stopPropagation()}>{props.data.logoLink}</a>
        </div>

        <div className={`back-face h-full w-full flex flex-col  justify-center ${isFlipped ? 'block' : 'hidden'}`} style={{ transform: "rotateY(180deg)" }}>
          <div className={`h-[30%] w-full bg-zinc-100/20 flex items-center `}>
            <svg className={`h-12 w-12 mx-auto select-none pointer-events-none ${props.data.logoBg || ""}`}>
               <use href={`${spriteUrl}#${props.data.logoId}`} />
            </svg>
          </div>
          <div className={` w-full h-[18%] flex ${props.data.bgColor} ${props.data.textColor_second} justify-center font-semibold items-center`}>
            <div className="text-center">{props.data.logoName}</div>
          </div>
          <div className="h-[52%] flex flex-col justify-center pl-4 text-sm gap-y-0.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                {/* <FontAwesomeIcon
                  icon={iconsProjects[Math.floor(Math.random() * iconsProjects.length)]}
                  className="h-4 w-4"
                /> */}
                <p className="text-left">Projects Projects Projects</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Cards;
