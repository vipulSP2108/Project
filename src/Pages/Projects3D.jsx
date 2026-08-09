import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

import { EffectCoverflow, Autoplay, FreeMode } from 'swiper/modules';
import { gallaryDataSample } from '../Data/GallaryData';

export default function Projects3D() {
    return (
        <div className="z-30 flex flex-col justify-center h-screen w-full overflow-hidden bg-[#111111]">
            <div className="w-full flex items-center mb-12 px-4 md:px-24">
                {/* <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888] text-base md:text-2xl'>Featured Projects</span> */}
            </div>

            <div className="w-full relative flex items-center justify-center">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    freeMode={true}
                    speed={3500} // Controls the speed of the continuous movement
                    autoplay={{
                        delay: 0, // 0 delay creates continuous scrolling
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // Pauses perfectly on hover
                    }}
                    coverflowEffect={{
                        rotate: 15, // Flatter angle
                        stretch: 0,
                        depth: 120, // Pushed less deeply into the screen
                        modifier: 1, 
                        slideShadows: true, 
                    }}
                    modules={[EffectCoverflow, Autoplay, FreeMode]}
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
