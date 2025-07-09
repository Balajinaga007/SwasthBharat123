import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const totalSlides = 3;
    const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const imageRefs = useRef([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 4000); // Change slide every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);
    useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
  };

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        img.style.opacity = index === currentSlide ? "1" : "0";
        img.style.zIndex = index === currentSlide ? "1" : "0";
      }
    });
  }, [currentSlide]);

  return (
    <section ref={heroRef} className="relative md:h-[200vh] bg-[#f7f7f7]">
      <div className="sticky top-0   h-[12.5rem] md:h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Left Arrow */}
          <button
            onClick={() => {
              clearInterval(intervalRef.current); 
              setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
               startAutoSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Previous Slide"
            style={{fontSize: 28, lineHeight: 1}}
          >
            &#60;
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => {
                 clearInterval(intervalRef.current); 
              setCurrentSlide((prev) => (prev + 1) % totalSlides)
                 startAutoSlide();}}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Next Slide"
            style={{fontSize: 28, lineHeight: 1}}
          >
            &#62;
          </button>
          {[1, 2, 3].map((slideNumber, index) => (
            <img
              key={slideNumber}
              ref={(el) => (imageRefs.current[index] = el)}
              src={`/images/Slide${slideNumber}.jpg`}
              alt={`Slide ${slideNumber}`}
              className="absolute inset-0 w-full object-contain transition-opacity duration-1000 ease-in-out "
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                zIndex: index === currentSlide ? 1 : 0,
              }}
            />
          ))}
          {/* Blinking Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {[0, 1, 2].map((idx) => (
              <span
                key={idx}
                className={`md:w-4 md:h-4 w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-black-700 animate-blink' : 'bg-gray-300'} block`}
                style={{
                  boxShadow: currentSlide === idx ? '0 0 8px 2px rgb(14, 14, 15)' : 'none',
                  opacity: currentSlide === idx ? 1 : 0.6,
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
