
import React, { useState } from 'react'

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BiLeftArrow } from 'react-icons/bi';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StagesCarousel = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderReady, setSliderReady] = useState(false);


    // Check if device is mobile


    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        mode: "snap",
     
  defaultAnimation: {
    duration: 100, // milliseconds
    easing: (t) => t, // linear easing; you can customize
  },
        slides: {
            perView: 1,
          
        },
        created() {
            setSliderReady(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });



    const currentStep = data?.find((val, index) => index === currentSlide)
    return (
        <>
            <div className='relative items-center z-[0] flex flex-col  md:px-8 overflow-hidden w-full'>
                <div ref={sliderRef} className="relative  my-10 keen-slider z-[30] !overflow-visible  max-w-[calc(min(100vw,2000px)-1rem)] h-full">
                    {data?.map((stage, index) => (
                        <div
                            key={index}
                            className='keen-slider__slide flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-110 relative'

                        >
                            {/* Fixed height for title to align circles */}
                            <div style={{ minHeight: 70, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <p className={`text-center transition-all duration-300 mb-1 ${currentSlide === index ? "text-[green]" : "text-black"}`}>{stage.Title}</p>
                            </div>
                            <div
                                className={`w-28 h-28 rounded-full flex-shrink-0 ${currentSlide === index ? "text-[green] bg-[#9AD9B1]" : "text-ta-dark-brown bg-ta-beige"} flex items-center justify-center transition-all duration-300`}
                                style={{ position: 'relative', zIndex: 2 }}
                            >
                                <div
                                    className={`svg-container  ${currentSlide === index ? "text-[green]   w-[1.875rem] h-[2.5rem] " : "text-ta-dark-brown  w-[1.875rem] h-[2.5rem]"} transition-all duration-300 ease-in-out  `}

                                    dangerouslySetInnerHTML={{ __html: stage.icon }}
                                />


                            </div>



                        </div>

                    ))}
 {/* Navigation Buttons */}
                {sliderReady && instanceRef.current && (
                  
<>
                          <button
            onClick={() => {
         instanceRef.current?.prev()
           
            }}
            disabled={currentSlide===0}
            className="absolute left-2 bottom-[2rem] -translate-y-1/2 z-20 bg-white rounded-full w-[2rem] h-[2rem] shadow-lg focus:outline-none disabled:bg-gray-400 flex items-center justify-center"
            aria-label="Previous Slide"
            style={{fontSize: 10, lineHeight: 1}}
            
          >
        <ChevronLeft size={20}/>
          </button>
          {/* Right Arrow */}
          <button
             disabled={currentSlide===data?.length-1}
            onClick={() => {
                 instanceRef.current?.next()
           
             }}
            className="absolute right-2 bottom-[2rem] -translate-y-1/2 z-20 bg-white rounded-full w-[2rem] h-[2rem] shadow-lg focus:outline-none disabled:bg-gray-400 flex items-center justify-center"
            aria-label="Next Slide"
            style={{fontSize: 10, lineHeight: 1}}
          >
         <ChevronRight size={20}/>
          </button>
               </>    
                  
                )}
                    {/* Loader overlay */}
                    {(!sliderReady || !instanceRef.current) && (
                        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-100 z-50 w-full hidden md:flex">
                            <p className="text-18-scale font-[600] text-dark_gray">Loading...</p>
                        </div>
                    )}
                </div>
          
                    {/* Envisioned Health Ecosystem */}
                    <h2 className="text-xl font-bold  mt-2 mb-[2rem]">Envisioned Health Ecosystem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 w-full">
                        {currentStep?.health_ecosystem_items
                            ?.map((item, idx) => (
                                <a href={`/stageDetails/${currentStep?.documentId}/health_ecosystem/${item.documentId}`} key={idx} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col items-center">
                                    {/* <FontAwesomeIcon icon={item.icon} className="text-blue-700 text-2xl mb-2" /> */}
                                    <div
                                        className={`svg-container w-[1.5rem] h-[1.5rem] mb-2 text-blue-700`}

                                        dangerouslySetInnerHTML={{ __html: item.icon }}
                                    />

                                    <h3 className="text-base font-semibold text-gray-900 mb-1 text-center">{item.Title}</h3>
                                    <p className="text-gray-700 text-sm mb-2 text-center">{item.description}</p>
                                </a>
                            ))}
                    </div>

                    {/* Enabling Frontier Technologies */}
                    <h2 className="text-xl pt-7 font-bold   mt-2 mb-[2rem]">Enabling Frontier Technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4  w-full">
                        {currentStep?.frontier_technologies?.map((item, idx) => (
                            <a href={`/stageDetails/${currentStep?.documentId}/frontier_technologies/${item.documentId}`} key={idx} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col items-center">
                                {/* <FontAwesomeIcon icon={item.icon} className="text-blue-700 text-2xl mb-2" /> */}
                                <div
                                    className={`svg-container w-[1.5rem] h-[1.5rem] mb-2 text-blue-700`}

                                    dangerouslySetInnerHTML={{ __html: item.icon }}
                                />

                                <h3 className="text-base font-semibold text-gray-900 mb-1 text-center">{item.Title}</h3>
                                <p className="text-gray-700 text-sm mb-2 text-center">{item.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Navigation Buttons */}
                {/* {sliderReady && instanceRef.current && (
                    <div className='flex justify-between pb-[0.5rem] '>

                        <div className="flex flex-row z-[50] gap-[2.5rem] pt-[3.75rem] ">
                            <button
                                onClick={handlePrev}
                                disabled={!canGoPrev}
                                className="p-[0.5rem] buttonshadow rounded-full border border-[#F8F8F8] disabled:opacity-50 bg-white hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
                            >
                                <MdKeyboardArrowLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!canGoNext}
                                className="p-[0.5rem] buttonshadow rounded-full border border-[#F8F8F8] bg-white disabled:opacity-50 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
                            >
                                <MdKeyboardArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                )} */}
            

        </>
    )
}

export default StagesCarousel

