// import React, { useEffect, useRef, useState } from "react";

// export default function HeroSection() {
//   const heroRef = useRef(null);
//   const totalSlides = 3;
//     const [currentSlide, setCurrentSlide] = useState(0);
//   const intervalRef = useRef(null);
//   const imageRefs = useRef([]);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   //   }, 4000); // Change slide every 4 seconds

//   //   return () => clearInterval(interval);
//   // }, []);
//     useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current); // Cleanup on unmount
//   }, []);

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 4000);
//   };

//   useEffect(() => {
//     imageRefs.current.forEach((img, index) => {
//       if (img) {
//         img.style.opacity = index === currentSlide ? "1" : "0";
//         img.style.zIndex = index === currentSlide ? "1" : "0";
//       }
//     });
//   }, [currentSlide]);

//   return (
//     <section ref={heroRef} className="relative md:h-[200vh] bg-[#f7f7f7]">
//       <div className="sticky top-0   h-[12.5rem] md:h-screen overflow-hidden">
//         <div className="relative w-full h-full">
//           {/* Left Arrow */}
//           <button
//             onClick={() => {
//               clearInterval(intervalRef.current); 
//               setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
//                startAutoSlide();
//             }}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none"
//             aria-label="Previous Slide"
//             style={{fontSize: 28, lineHeight: 1}}
//           >
//             &#60;
//           </button>
//           {/* Right Arrow */}
//           <button
//             onClick={() => {
//                  clearInterval(intervalRef.current); 
//               setCurrentSlide((prev) => (prev + 1) % totalSlides)
//             }}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg focus:outline-none"
//             aria-label="Next Slide"
//             style={{fontSize: 28, lineHeight: 1}}
//           >
//             &#62;
//           </button>
//           {[1, 2, 3].map((slideNumber, index) => (
//             <img
//               key={slideNumber}
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={`/images/Slide${slideNumber}.jpg`}
//               alt={`Slide ${slideNumber}`}
//               className="absolute inset-0 w-full object-contain transition-opacity duration-1000 ease-in-out "
//               style={{
//                 opacity: index === currentSlide ? 1 : 0,
//                 transition: "opacity 1s ease-in-out",
//                 zIndex: index === currentSlide ? 1 : 0,
//               }}
//             />
//           ))}
//           {/* Blinking Dots Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
//             {[0, 1, 2].map((idx) => (
//               <span
//                 key={idx}
//                 className={`md:w-4 md:h-4 w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-black-700 animate-blink' : 'bg-gray-300'} block`}
//                 style={{
//                   boxShadow: currentSlide === idx ? '0 0 8px 2px rgb(14, 14, 15)' : 'none',
//                   opacity: currentSlide === idx ? 1 : 0.6,
//                 }}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Slider=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const heroRef = useRef()
  const typewriterRef = useRef()
  const navRef = useRef()
  const imageRefs = useRef([])
  const currentSlide = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navigation animation
      gsap.from(navRef.current, {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power3.out"
      })

      // Typewriter effect animation
      if (typewriterRef.current) {
        const text = typewriterRef.current.textContent.trim()
        const chars = text.split('')
        const cursor = document.getElementById('typewriter-cursor')
        
        // Clear the original text and create spans for each character
        typewriterRef.current.innerHTML = ''
        chars.forEach(char => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space
          span.style.opacity = '0'
          typewriterRef.current.appendChild(span)
        })
        
        // Create timeline for typewriter effect
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: typewriterRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        })
        
        // Show cursor and animate typing
        tl.set(cursor, { display: 'inline-block' })
          .to(typewriterRef.current.children, {
            opacity: 1,
            duration: 0.02,
            stagger: {
              amount: 3, // Total time for all characters
              ease: "none"
            },
            ease: "none"
          })
          .to(cursor, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5
          })
      }

      // Hero slideshow scroll-hijacking animation with slide-in-from-right
      if (heroRef.current && imageRefs.current.length === 5) {
        // Initially position all slides - first slide visible, others positioned to the right
        imageRefs.current.forEach((img, index) => {
          if (img) {
            gsap.set(img, { 
              xPercent: index === 0 ? 0 : 100,
              zIndex: index === 0 ? 2 : 1
            })
          }
        })

        // Create ScrollTrigger for the hero slideshow section
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "+=400%", // Scroll 4x the viewport height to see all slides
          pin: ".slideshow-container", // Pin the sticky container, not the entire section
          scrub: true, // Direct linking to scroll position
          onUpdate: (self) => {
            // Calculate which slide should be visible based on scroll progress
            const progress = self.progress
            const totalSlides = 5
            const slideIndex = Math.min(Math.floor(progress * totalSlides), totalSlides - 1)
            
            if (slideIndex !== currentSlide.current) {
              const isMovingForward = slideIndex > currentSlide.current
              
              // Animate slide transitions with slide-in-from-right effect
              const tl = gsap.timeline()
              
              if (isMovingForward) {
                // Moving forward: new slide slides in from right
                if (imageRefs.current[slideIndex]) {
                  // Set new slide off-screen to the right
                  gsap.set(imageRefs.current[slideIndex], { 
                    xPercent: 100, 
                    zIndex: 3 
                  })
                  
                  // Slide new image in from right
                  tl.to(imageRefs.current[slideIndex], {
                    xPercent: 0,
                    duration: 0.8,
                    ease: "power2.out"
                  }, 0)
                  
                  // Slide current image out to left
                  if (imageRefs.current[currentSlide.current]) {
                    tl.to(imageRefs.current[currentSlide.current], {
                      xPercent: -100,
                      duration: 0.8,
                      ease: "power2.out"
                    }, 0)
                  }
                }
              } else {
                // Moving backward: current slide slides out to right, previous slides in from left
                if (imageRefs.current[slideIndex]) {
                  // Set target slide off-screen to the left
                  gsap.set(imageRefs.current[slideIndex], { 
                    xPercent: -100, 
                    zIndex: 3 
                  })
                  
                  // Slide target image in from left
                  tl.to(imageRefs.current[slideIndex], {
                    xPercent: 0,
                    duration: 0.8,
                    ease: "power2.out"
                  }, 0)
                  
                  // Slide current image out to right
                  if (imageRefs.current[currentSlide.current]) {
                    tl.to(imageRefs.current[currentSlide.current], {
                      xPercent: 100,
                      duration: 0.8,
                      ease: "power2.out"
                    }, 0)
                  }
                }
              }
              
              // Update z-index of old slide after animation
              tl.set(imageRefs.current[currentSlide.current], { zIndex: 1 }, 0.8)
              
              currentSlide.current = slideIndex
              setCurrentSlideIndex(slideIndex)
            }
          }
        })
      }

      // No parallax effect needed since we're using slideshow ScrollTrigger
    })

    return () => ctx.revert()
  }, [])


  return (
    <section 
        ref={heroRef}
        className="relative h-[500vh] bg-ta-white"
      >
        <div className="slideshow-container sticky top-0 h-screen overflow-hidden">
          {/* Full Screen Slideshow Background */}
          {[1, 2, 3, 4, 5].map((slideNumber, index) => (
            <img
              key={slideNumber}
              ref={el => imageRefs.current[index] = el}
              src={`/images/slide${slideNumber}.png`}
              alt={`SwasthBharat Slide ${slideNumber}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex justify-center space-x-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

  )
}

export default Slider
