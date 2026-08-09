import React, { useEffect, useRef } from 'react'
import '../App.css';
import imageMy from '../assets/My4.jpg';
import html from '../assets/images/html-5-logo-svg-1.svg';
import javascriptweb from '../assets/images/javascript-1.svg';
import react from '../assets/images/react-native.svg';
import tailwindcss from '../assets/images/tailwindcss.svg';
import Scroller from './Scroller';
import gsap from "gsap";

import { sampleDataSkills } from '../Data/sampleDataSkills';
import { useNavigate } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';


const textItems = [
    // { src: 'https://i.pravatar.cc/150?img=1', alt: 'Avatar 1' },
    `UI/UX Developer`,
    'Web Design',
    'AppDesign',
    'App Developer',
    'Frontend Developer'
];

const imageTechItems = [
    // 'WEB',
    { src: javascriptweb, alt: 'Avatar 1' },
];

const image2TechItems = [
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
];

//   const imageItems = [
//     { src: 'https://i.pravatar.cc/150?img=1', alt: 'Avatar 1' },
//     { src: 'https://i.pravatar.cc/150?img=2', alt: 'Avatar 2' },
//     { src: 'https://i.pravatar.cc/150?img=3', alt: 'Avatar 3' },
//     { src: 'https://i.pravatar.cc/150?img=4', alt: 'Avatar 4' },
//     { src: 'https://i.pravatar.cc/150?img=5', alt: 'Avatar 5' },
//     { src: 'https://i.pravatar.cc/150?img=6', alt: 'Avatar 6' }
//   ];
// gsap.from('#gasss', {
//     y: 90,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#gasss",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 3
//     }
// })



export default function About() {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    const randomizedSkills1 = shuffleArray([...sampleDataSkills]);
    const randomizedSkills2 = shuffleArray([...sampleDataSkills]);

    const containerRef = useRef(null);

    // main - scale
    // aka - left to right - no scale - opacity
    // quote be happy - bottom to top - no scale - opacity
    // techstack - right to left - no scale - opacity
    // skills - bottom to top - no scale - opacity

    useEffect(() => {
        const element = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger GSAP animations when the element is in view
                        // gsap.fromTo(
                        //     '.animate-text', 
                        //     { opacity: 0, y: 50 }, 
                        //     { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
                        // );

                        gsap.fromTo(
                            '.about-apk-box',
                            { opacity: 0, y: 50, scale: 0.5 },
                            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
                        );

                        // Once the animation has been triggered, stop observing
                        // observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        // if (!noNavigation){
        //     return null
        // }
        navigate('/Skills');
    };

    return (
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col px-16 my-12 h-screen'>
            <div
                ref={containerRef}
                className=' z-30 flex-1 flex flex-col justify-evenly rounded-2xl about-main h-full w-full p-[10vh]'
                id='glasses'
            >
                <div className=' flex items-center justify-center'>
                    <text style={{ fontFamily: 'Montserrat' }} className=' uppercase text-[#888888] mb-10'>Who I am</text>
                </div>
                <div className=' flex items-center justify-center gap-4 w-full h-full'>
                    <div className=' gap-4 flex flex-col justify-center items-end w-7/12 h-full'>
                        <div className='gap-4 flex flex-row items-center'>
                            <div
                                className=' rounded-2xl w-[45%] h-[50%] px-3 py-2 flex flex-col justify-between'
                                id='glasses'
                            >
                                <div>
                                    <div>
                                        <text style={{ fontFamily: 'Montserrat' }} className='font-black'>AKA.</text>
                                        <text className=' text-2xl font-black text-[#2272EF]'> Aayush.</text>
                                    </div>
                                    <h1 style={{ lineHeight: '20px' }} className="text-xl text-[#888888] ">
                                        I am currently pursuing a B.Tech in Computer Science and Engineering at IIT Gandhinagar. With two years of experience in web and app development, I have honed my skills particularly in React and React Native.
                                    </h1>
                                </div>
                            </div>
                            <div
                                className=' rounded-2xl w-[55%] h-[58vh] flex flex-col justify-between'
                                id='glasses'
                            // bg-[rgb(34,114,239)]
                            // style={{ background: 'rgba(34, 114, 239, 0.9)' }}
                            >
                                {/* <text style={{fontFamily: 'Montserrat'}} className='font-black'>Vipul Sunil Patil</text>
                            <text style={{ lineHeight: 0.9}} className=' text-[#888888]'>{`Hello there! 👋,`}<br />{`I'm versatile web and app developer, and designer with a passion for crafting engaging and user-friendly digital experiences.`}</text> */}

                                <div className=' overflow-hidden h-full w-full rounded-xl'>
                                    <img className=' h-full w-full' src={imageMy} alt="My Image" />
                                </div>
                                <div className=' absolute bottom-0 left-2 text-3xl font-black overflow-hidden w-full h-[20%] flex items-center p-1'>
                                    <text>Vipul Sunil Patil</text>
                                </div>
                            </div>
                        </div>
                        <div id=' gasss' className=' about-skills'>
                            <div className='bg-black rounded-2xl w-[35vw] h-[11vh] flex overflow-hidden items-center pt-1'
                            // id='glasses'
                            >
                                <Scroller items={textItems} topbottom='false' direction="left" speed="fast" />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center gap-4  w-5/12 h-full'>
                        <div
                            className=' bg-black rounded-2xl w-[100%] h-[11vh] flex flex-col justify-center items-center about-quote'
                        // id='glasses'
                        >
                            <text className=' text-[#888888] mt-1'>'Stay Happy, Not Depressed!'</text>
                        </div>
                        <div
                            className='rounded-2xl w-[70%] h-[40vh] about-techstack'
                            id='glasses'
                        >
                            <div onClick={() => handleClick()} className='cursor-pointer p-3 flex justify-end h-full overflow-hidden gap-6'>
                                <div className='z-40 absolute flex flex-col bottom-2 left-2 '>
                                    <div className=' text-xl flex gap-1 items-center '>
                                        <text className=' text-[#888888] capitalize'>Details </text>
                                        <div className=' flex -bottom-10'>
                                            <FaLink size={16} color='#888888' />
                                        </div>
                                    </div>
                                    {/* <text className=' text-[#888888] capitalize'>View <FiExternalLink size={18} color='#888888' /></text> */}
                                    <text className=' text-[#888888] capitalize'>currenty using,</text>
                                    <text style={{ fontFamily: 'Montserrat' }} className=' font-black'>Tech I ♥️</text>
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
            </div>
        </div>
    )
}


{/* <text style={{ fontFamily: 'Montserrat' }} className=' font-black h-full left-0 flex items-center justify-center p-4'> STACK</text>
                        <div className='  flex overflow-hidden'>
                            <div className=' h-[4rem] w-[4rem] flex items-center justify-center'>
                                <img src={javascriptweb} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={tailwindcss} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={react} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={html} alt="Logo" />
                            </div>
                        </div> */}