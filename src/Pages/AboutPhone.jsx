import React from 'react'
import Scroller from './Scroller'
import { FaLink } from 'react-icons/fa6';

const textItems = [
    // { src: 'https://i.pravatar.cc/150?img=1', alt: 'Avatar 1' },
    `UI/UX Developer`,
    'Web Design',
    'AppDesign',
    'App Developer',
    'Frontend Developer'
];
import { sampleDataSkills } from '../Data/sampleDataSkills';
import { useNavigate } from 'react-router-dom';

export default function AboutPhone() {

    // const navigate = useNavigate();

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    const randomizedSkills1 = shuffleArray([...sampleDataSkills]);
    const randomizedSkills2 = shuffleArray([...sampleDataSkills]);

    return (
        <div className='px-6 '>
            <div className="flex items-start justify-start mb-14 md:mb-12">
                <span
                    style={{ fontFamily: 'Montserrat' }}
                    className="text-xs font-semibold uppercase z-30 tracking-[5px]"
                >
                    Who Am I
                </span>
            </div>
            <div
                className='rounded-2xl flex flex-col justify-between'
            >
                <div className=' z-20'>
                    <div>
                        <text style={{ fontFamily: 'Montserrat' }} className='font-black'>AKA.</text>
                        <text className=' text-3xl font-black text-[#2272EF]'> Aayush.</text>
                    </div>
                    <h1 style={{ lineHeight: '20px' }} className="text-2xl text-[#888888] ">
                        I am currently pursuing a B.Tech in Computer Science and Engineering at IIT Gandhinagar. With two years of experience in web and app development, I have honed my skills particularly in React and React Native.
                    </h1>
                </div>
            </div>

            <div id=' gasss' className=' about-skills'>
                <div className=' mt-5 rounded-2xl flex overflow-hidden items-center pt-1'
                // id='glasses'
                >
                    <Scroller items={textItems} topbottom='false' direction="left" speed="fast" />
                </div>
            </div>


            <div className=' flex flex-col justify-center gap-4 h-full'>
                {/* <div
                    className=' bg-black rounded-2xl w-[100%] h-[11vh] flex flex-col justify-center items-center about-quote'
                // id='glasses'
                >
                    <text className=' text-[#888888] mt-1'>'Stay Happy, Not Depressed!'</text>
                </div> */}
                <div
                    className='rounded-lg mt-10 h-[15vh] about-techstack'
                    id='glasses'
                >
                    <div onClick={() => navigate('/Skills')} className='cursor-pointer p-3 flex justify-end h-full overflow-hidden gap-6'>
                        <div className='z-40 absolute flex flex-col bottom-2 left-2 '>
                            {/* <div className=' text-xl flex gap-1 items-center '>
                                <text className='text-base text-[#888888] capitalize'>Details </text>
                                <div className=' flex items-center justify-center'>
                                    <FaLink size={12} color='#888888' />
                                </div>
                            </div> */}
                            {/* <text className=' text-[#888888] capitalize'>View <FiExternalLink size={18} color='#888888' /></text> */}
                            <text className=' text-xl text-[#888888] capitalize'>currenty using,</text>
                            <text style={{ fontFamily: 'Montserrat' }} className=' text-xl font-black -mt-1'>Tech I ♥️</text>
                        </div>

                        <div className=' opacity-90 grayscale hover:grayscale-0 transition-all duration-300'>
                            <Scroller items={randomizedSkills1} topbottom='true' direction="bottom" speed="slow" />
                        </div>
                        <div className=' opacity-90 grayscale hover:grayscale-0 transition-all duration-300'>
                            <Scroller items={randomizedSkills2} topbottom='true' direction="top" speed="slow" />
                        </div>
                    </div>

                    {/* <text style={{ lineHeight: 0.9 }} className=' text-[#888888]'>
                            {`UI/UX Devloper`}<br />
                            {`Web Design`}<br />
                            {`App Design`}<br />
                            {`App Devloper`}<br />
                            {`Frontent Devloper`}<br />
                        </text> */}
                </div>
            </div>
        </div>
    )
}
