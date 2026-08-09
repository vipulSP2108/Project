import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { gallaryDataSample } from '../Data/GallaryData';

export default function Projects3D() {
    return (
        <div className="z-30 flex flex-col justify-center h-screen w-full overflow-hidden bg-[#111111]">
            <div className="w-full flex items-center mb-12 px-4 md:px-24">
                 <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888] text-base md:text-2xl'>Featured Projects</span>
            </div>

            <div className="w-full relative flex items-center justify-center">
                {/* Fade edges to blend the 3D carousel into the background */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={3500} // Controls the speed of the continuous movement
                    autoplay={{
                        delay: 0, // 0 delay creates continuous scrolling
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // Pauses perfectly on hover
                    }}
                    coverflowEffect={{
                        rotate: 35, // Angle of side slides
                        stretch: 0,
                        depth: 250, // Pushes the side slides further back in 3D space
                        modifier: 1, // Multiplier for effect
                        slideShadows: true, // Adds realistic 3D shadows to the curved sides
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper w-full py-12"
                >
                    {/* Render the items multiple times so the continuous loop never runs out of slides early */}
                    {[...gallaryDataSample, ...gallaryDataSample].map((item, index) => (
                        <SwiperSlide 
                            key={index}
                            className="bg-center bg-cover rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <div 
                                className="w-full h-full"
                                style={{
                                    background: `url(${item.Image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx="true">{`
                /* Critical: This overrides Swiper's default ease transition to a linear transition,
                   making the delay:0 autoplay perfectly continuous without "snapping" */
                .mySwiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                
                .swiper-slide {
                    width: 280px;
                    height: 180px;
                }
                @media (min-width: 1024px) {
                    .swiper-slide {
                        width: 500px;
                        height: 320px;
                    }
                }
            `}</style>
        </div>
    );
}
