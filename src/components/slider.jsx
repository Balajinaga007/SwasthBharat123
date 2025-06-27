import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        img.style.opacity = index === currentSlide ? "1" : "0";
        img.style.zIndex = index === currentSlide ? "1" : "0";
      }
    });
  }, [currentSlide]);

  return (
    <section ref={heroRef} className="relative h-[200vh] bg-[#f7f7f7]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {[1, 2, 3].map((slideNumber, index) => (
            <img
              key={slideNumber}
              ref={(el) => (imageRefs.current[index] = el)}
              src={`/images/Slide${slideNumber}.jpg`}
              alt={`Slide ${slideNumber}`}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                zIndex: index === currentSlide ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
