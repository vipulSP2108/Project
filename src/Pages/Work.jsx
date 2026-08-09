import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Home.css';
// import './Work.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Work({ imgSources, projectList, noImage = false, noNavigation = false }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const preview1Ref = useRef(null);
    const preview2Ref = useRef(null);
    const priviewRef = useRef(null);
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const navigate = useNavigate();

    const handleClick = (project) => {
        if (!noNavigation){
            return null
        }
        navigate('/ProjectDetails', { state: { project } });
    };

    // const menu = menuRef.current;
    // menu.addEventListener('mouseout', function () {
    //     gsap.to('#priviewimg img', {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //         duration: 1,
    //         ease: 'power3.out',
    //     });
    // })
    useEffect(() => {
        const menuItems = menuItemsRef.current;

        // Append duplicate p elements
        menuItems.forEach((item) => {
            const copyElements = item.querySelectorAll("#info, #name, #tag");
            copyElements.forEach((div) => {
                const copy = div.querySelector("p");
                if (copy && div.querySelectorAll("p").length === 1) {
                    const duplicatecopy = document.createElement('p');
                    duplicatecopy.textContent = copy.textContent;
                    duplicatecopy.textContent = copy.textContent;
                    duplicatecopy.style.color = 'white';
                    duplicatecopy.style.fontFamily = 'Montserrat',
                        duplicatecopy.style.textTransform = 'uppercase',
                        duplicatecopy.style.fontWeight = 800,
                        duplicatecopy.style.height = '100%',
                        div.appendChild(duplicatecopy);
                }
            });
        });
    }, []);

    // Append images and animate
    const appendImages = (src) => {
        const preview1 = preview1Ref.current;
        const preview2 = preview2Ref.current;
        if (!preview1 || !preview2) return;

        const img1 = document.createElement("img");
        const img2 = document.createElement("img");

        img1.src = src;
        img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        img2.src = src;
        img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        preview1.appendChild(img1);
        preview2.appendChild(img2);

        gsap.to([img1, img2], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: 'power3.out',
            onComplete: () => {
                removeExtraImage(preview1);
                removeExtraImage(preview2);
            }
        });
    };

    const removeExtraImage = (container) => {
        while (container.children.length > 10) {
            container.removeChild(container.firstChild);
        }
    };

    // Memoized handlers
    const handleMouseOver = useCallback((index) => {
        const item = menuItemsRef.current[index];
        gsap.to(item.querySelectorAll("p:nth-child(1)"), {
            top: "-100%",
            duration: 0.3,
        });
        gsap.to(item.querySelectorAll("p:nth-child(2)"), {
            top: "0%",
            duration: 0.3,
        });
        appendImages(projectList[index].VideoShowCase);
    }, [projectList]);

    const handleMouseOut = useCallback((index) => {
        const item = menuItemsRef.current[index];
        gsap.to(item.querySelectorAll("p:nth-child(1)"), {
            top: "0%",
            duration: 0.3,
        });
        gsap.to(item.querySelectorAll("p:nth-child(2)"), {
            top: "100%",
            duration: 0.3,
        });
    }, []);

    useEffect(() => {
        const menuItems = menuItemsRef.current;

        // Add event listeners
        menuItems.forEach((item, index) => {
            item.addEventListener("mouseover", () => handleMouseOver(index));
            item.addEventListener("mouseout", () => handleMouseOut(index));
        });

        // Clean up event listeners
        // return () => {
        //     menuItems.forEach((item, index) => {
        //         item.removeEventListener("mouseover", () => handleMouseOver(index));
        //         item.removeEventListener("mouseout", () => handleMouseOut(index));
        //     });
        // };
    }, [handleMouseOver, handleMouseOut]);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(priviewRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                ease: 'power3.out'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // GSAP animation setup
        gsap.to("#name p", {
            backgroundPositionX: "0%",
            stagger: 1, // Shorter delay between each element's animation
            duration: 10, // Short duration for quick animation
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#name", // Change to the correct selector
                scrub: true,
                start: "top 100%",
                end: "bottom 10%",
                // markers: true // Set markers to true only for debugging
            }
        });
    }, []);

    return (
        <div id='containors'>
            {
                !noImage &&
                    <div ref={priviewRef} id="priview"
                        className={`pointer-events-none ${isMenuHovered ? 'grayscale-0' : 'grayscale'}`}
                        style={{
                            backgroundColor: 'white',
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                            transition: 'filter 300ms ease',
                        }}
                    >
                    <div className='priviewimg priviewimg1' ref={preview1Ref}></div>
                    <div className='priviewimg priviewimg2' ref={preview2Ref}></div>
                </div>
            }

            <div ref={menuRef} id='menu'
                onMouseEnter={() => setIsMenuHovered(true)}
                onMouseLeave={() => setIsMenuHovered(false)}
            // style={{
            //     padding:'0 4em',
            // }}
            >
                {projectList.map((project, index) => (
                    <div
                        ref={el => menuItemsRef.current[index] = el}
                        id='menuitem'
                        key={index}
                        style={{
                            overflow: 'hidden',
                            // backgroundColor: 'red',
                            borderBottomWidth: '1px',
                            borderTopWidth: index === 0 ? '1px' : '0',
                            borderColor: '#888888',
                            cursor: 'pointer',
                        }}
                        className='flex justify-between'
                        onClick={() => handleClick(project)}
                    >
                        {/* <span id='info'><p>{project.cat}</p></span> */}
                        <span id='info2'>{project.cat}</span>
                        <span id='name'><p
                            style={{ fontFamily: 'Montserrat', textTransform: 'uppercase', fontWeight: 800, }}
                        >{project.name}</p></span>
                        <span id='tag'><p>{project.role}</p></span>
                    </div>
                ))}

            </div>

        </div>
    );
}