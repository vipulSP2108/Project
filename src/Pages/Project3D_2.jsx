import React, { useState } from 'react';
import { gallaryDataSample } from '../Data/GallaryData';

export default function Projects3D() {
    const [isHovered, setIsHovered] = useState(false);

    const numItems = gallaryDataSample.length;
    const angle = 360 / numItems;

    return (
        <div className="z-30 flex items-center justify-center h-screen w-full overflow-hidden bg-[#111111]">

            {/* 2D Wrapper with Mask for Edge Fading */}
            <div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                    // Creates a fade out effect on the left and right edges
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {/* Perspective Wrapper */}
                <div
                    className="relative flex items-center justify-center w-full h-full"
                    style={{ perspective: '1500px' }}
                >
                    {/* The rotating cylinder container */}
                    <div
                        className="rotating-cylinder relative flex items-center justify-center"
                        style={{
                            transformStyle: 'preserve-3d',
                            animation: `rotateCylinder 40s infinite linear`,
                            animationPlayState: isHovered ? 'paused' : 'running',
                        }}
                    >
                        {gallaryDataSample.map((item, index) => {
                            const currentAngle = angle * index;
                            return (
                                <div
                                    key={index}
                                    className="carousel-card absolute top-1/2 left-1/2 rounded-xl overflow-hidden shadow-2xl"
                                    style={{
                                        // Standard transform: rotate then translate outwards
                                        // translateZ(-var(--tz)) pushes cards away from center, facing inwards
                                        transform: `translate(-50%, -50%) rotateY(${currentAngle}deg) translateZ(calc(-1 * var(--tz)))`,
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden',
                                        background: `url(${item.Image})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        WebkitBoxReflect: 'below 10px linear-gradient(transparent, transparent, rgba(0,0,0,0.3))'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Invisible Hitbox in the Center for Hover Pausing */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
                >
                    <div
                        className="carousel-card pointer-events-auto"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ background: 'transparent' }}
                    />
                </div>
            </div>

            <style jsx="true">{`
                .rotating-cylinder {
                    width: 450px;
                    height: 250px;
                    --tz: 1100px; /* Increased radius to create noticeable gaps */
                }
                .carousel-card {
                    width: 450px;
                    height: 250px;
                }

                @keyframes rotateCylinder {
                    from {
                        transform: rotateY(0deg);
                    }
                    to {
                        transform: rotateY(-360deg);
                    }
                }
                
                /* Responsiveness via direct width/height and translateZ changes */
                @media (max-width: 1024px) {
                    .rotating-cylinder {
                        --tz: 750px;
                    }
                    .rotating-cylinder, .carousel-card {
                        width: 300px;
                        height: 180px;
                    }
                }
                
                @media (max-width: 768px) {
                    .rotating-cylinder {
                        --tz: 550px;
                    }
                    .rotating-cylinder, .carousel-card {
                        width: 220px;
                        height: 140px;
                    }
                }
            `}</style>
        </div>
    );
}
