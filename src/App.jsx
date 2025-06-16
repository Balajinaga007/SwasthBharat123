import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Stage1 from './svg/Stage1'
import Stage2 from './svg/Stage2'
import Stage3 from './svg/Stage3'
import Stage4 from './svg/Stage4'
import Stage5 from './svg/Stage5'
import Stage6 from './svg/Stage6'
import Stage7 from './svg/Stage7'
import Navbar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const stagesContainer=useRef()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [activeStep,setActiveStep]=useState(1)
  const heroRef = useRef()
  const typewriterRef = useRef()
  const navRef = useRef()
  const imageRefs = useRef([])
  const currentSlide = useRef(0)
useEffect(()=>{
if(activeStep){
  stagesContainer?.current?.scrollIntoView({
    behavior: "smooth",
    block: "nearest", // or "center" or "start"
  });
}
},[activeStep])
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
      if (heroRef.current && imageRefs.current.length >= 3) {
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
          end: "+=200%", // Scroll 2x the viewport height to see all slides
          pin: ".slideshow-container", // Pin the sticky container, not the entire section
          scrub: true, // Direct linking to scroll position
          onUpdate: (self) => {
            // Calculate which slide should be visible based on scroll progress
            const progress = self.progress
            const totalSlides = 3
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

const stageInfo=[
  {
    id:1,
    title: "Prenatal and Maternal Care",
    ageRange:"Before Birth",
    icon:()=><Stage1  width="40" height="50"/>
  },
  {
    id:2,
    "title": "Neonatal & Infant Care",
    "ageRange": "0-1 Year",
    icon:()=><Stage2  width="40" height="50"/>
  },
  {
    id:3,
    "title": "Early Childhood",
    "ageRange": "1 - 5 Years",
    icon:()=><Stage3  width="40" height="50"/>
  },{
    id:4,
   "title": "School Age & Adolescence",
      "ageRange": "5 - 18 Years",
    icon:()=><Stage4  width="40" height="50"/>
  },
  {
    id:5,
   "title": "Adulthood",
      "ageRange": "18 - 60 Years",
    icon:()=><Stage5  width="40" height="50"/>
  },
  {
    id:6,
    "title": "Elderly Care",
    "ageRange": "60+ Years",
    icon:()=><Stage6  width="40" height="50"/>
  },
  {
    id:7,
    "title": "End of the Life and Death Services",
      "ageRange": null,
    icon:()=><Stage7  width="40" height="50"/>
  }
  
]
  return (
    <Router>
    <div className="min-h-screen bg-ta-cream">
      {/* Navigation */}
     <Navbar/>

      {/* Main Title with extra spacing from navigation */}
      <div className="w-full bg-ta-cream text-center pt-24 pb-4">
        <h1 className="text-5xl md:text-7xl font-light mb-0 text-ta-dark-brown tracking-wide">
          Lifespan & Healthspan
        </h1>
      </div>
      <section className="bg-ta-cream text-center relative overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center">
        {/* Flex container for hero images */}
        <div className="flex flex-col md:flex-row w-full h-full relative z-0">
          {/* Left image and overlay */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[600px] flex items-center justify-center">
            <img
              src="/images/hero1.png"
              alt="Hero Background Left"
              className="w-full h-full object-contain object-center opacity-30 pointer-events-none select-none"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-bold text-ta-dark-brown text-center drop-shadow-sm">
                Lifespan
                <div className="text-base md:text-lg font-medium mt-1 text-ta-dark-brown opacity-90">
                  Total years lived from birth to death.
                </div>
              </div>
            </div>
          </div>
          {/* Right image and overlay */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[600px] flex items-center justify-center">
            <img
              src="/images/hero2.png"
              alt="Hero Background Right"
              className="w-full h-full object-contain object-center opacity-30 pointer-events-none select-none"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-bold text-ta-dark-brown text-center drop-shadow-sm">
                Healthspan
                <div className="text-base md:text-lg font-medium mt-1 text-ta-dark-brown opacity-90">
                  Years lived in good health.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifespan in India Section */}
      <section className="py-24 px-4 bg-ta-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-ta-dark-brown mb-6">
            Lifespan in India
          </h2>
          <p className="text-xl text-ta-brown max-w-2xl mx-auto font-light leading-relaxed">
          India's lifespan has increased by 23 years since 1975, with a significant rise in life expectancy at birth from 49 years to 72 years.
          </p>
        </div>
      </section>

      {/* Hero Section with Slideshow */}
      <section
        ref={heroRef}
        className="relative h-[300vh] bg-ta-cream"
      >
        <div className="slideshow-container sticky top-0 h-screen overflow-hidden">
          {/* Full Screen Slideshow Background */}
          {[1, 2, 3].map((slideNumber, index) => (
            <img
              key={slideNumber}
              ref={el => imageRefs.current[index] = el}
              src={`/images/slide${slideNumber}.png`}
              alt={`SwasthBharat Slide ${slideNumber}`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          ))}

        </div>
      </section>

      {/* Typewriter Section */}
      <section className="min-h-[600px] px-4 bg-ta-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <p
              ref={typewriterRef}
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ta-dark-brown text-left max-w-none break-words"
              style={{
                fontFamily: 'Kalam, cursive',
                fontWeight: '400',
                lineHeight: '1.8',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                overflowWrap: 'break-word'
              }}
            >
              Lifespan measures quantity; healthspan measures quality. Lifespan counts total years from birth to death, healthspan represents the period spent in good health, free from serious disease and disability.
            </p>
            <span
              id="typewriter-cursor"
              className="inline-block w-0.5 h-8 bg-ta-dark-brown ml-1 animate-pulse"
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Healthspan Infographic Section */}
      <section className="w-full">
        <img
          src="/images/slide6.png"
          alt="SwasthBharat Health Initiative"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Placeholder Section */}
      <section className="py-24 px-4 bg-ta-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-ta-dark-brown mb-6">
            Technology for Healthspan
          </h2>
          <p className="text-xl text-ta-brown max-w-2xl mx-auto font-light leading-relaxed">
            We are showcasing the frontier technologies that can help us bridge this gap for every life stage. 
          </p>
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="w-full py-16 px-4" style={{backgroundColor: '#29136C'}}>
        <div className="max-w-6xl mx-auto">
          {/* 7 Circles */}
          <div className="flex justify-between items-start mb-8" >
            {stageInfo.map((stage, index) => (
            <div  key={index} className='w-28  flex flex-col gap-2 cursor-pointer '
            onClick={()=>setActiveStep(stage?.id)}>
              <div
           
               
                className={`w-28 h-28  rounded-full ${activeStep===stage.id?"text-[green] bg-[#9AD9B1]":"text-ta-dark-brown bg-ta-beige"} flex items-center justify-center `}
              >

              {stage.icon?.()}
              </div>
              <p className={`text-center ${activeStep===stage.id?"text-[green]":"text-white"}`}>{stage.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl h-[500px] p-8 overflow-y-auto " ref={stagesContainer}>
            <div className="flex flex-wrap gap-3 justify-center items-start">
              {[
                {stageId:1,tag:'AI-powered risk prediction'},
                {stageId:1,tag:  'Heart Health'},
                  {stageId:1,tag:'Wearable monitoring devices'}, 
                  {stageId:1,tag: 'Telemedicine & mobile health apps'}, 
                  {stageId:1,tag: 'Blockchain for health records'},

                  {stageId:2,tag:'Smart incubators'},
                  {stageId:2,tag: 'Genomic screening & personalized medicine'},
                  {stageId:2,tag:'IoT-enabled vaccination tracking'}, 
                  {stageId:2,tag:'3D printing of medical devices'}, 

                  {stageId:3,tag:'AI-driven malnutrition detection'},
                  {stageId:3,tag: 'Digital health records'}, 
                   {stageId:3,tag:'Virtual reality (VR) for early learning'},
                  {stageId:3,tag:'Point-of-care diagnostics'}, 
                  
                   {stageId:4,tag:'AI-driven mental health chatbots'}, 
                   {stageId:4,tag:'Wearable biosensors'}, 
                   {stageId:4,tag: 'Blockchain-based health passports'},
                  {stageId:4,tag:'HPV self-sampling kits'}, 

                  {stageId:5,tag:'AI-driven chronic disease management'},
                  {stageId:5,tag:'Telemedicine & remote patient monitoring'},
                   {stageId:5,tag:'CRISPR & gene therapy'},
                  {stageId:5,tag:'Digital twins for personalized treatment'},
                  {stageId:5,tag:'Smart drug dispensers & biosensors'}, 

                  {stageId:6,tag:'AI-powered fall detection systems'},
                  {stageId:6,tag:'Brain-computer interfaces (BCIs)'},
                  {stageId:6,tag:'Personalized AI caregivers'}, 
                  {stageId:6,tag: 'Smart prosthetics & exoskeletons'},
                  {stageId:6,tag:'Wearable ECG & blood pressure monitors'},


                  {stageId:7,tag:'AI-powered palliative care decision support'},
                  {stageId:7,tag:'VR therapy for pain and anxiety'},
                  {stageId:7,tag:'Blockchain for digital wills & medical directives'},
                  {stageId:7,tag:'Biodegradable nanotech burial solutions'},

              ].map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 ${activeStep===tag.stageId?"bg-[green]":""} text-white text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 cursor-pointer`}
                  style={activeStep===tag.stageId ? {} : {backgroundColor: '#0F5757'}}
                >
                  {tag?.tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-16 px-4 bg-ta-dark-brown text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-ta-brown rounded-lg rotate-45 flex items-center justify-center mx-auto mb-6">
            <div className="w-6 h-6 bg-ta-cream rounded-sm -rotate-45"></div>
          </div>
          <p className="text-ta-beige mb-4">Built in India</p>
          <p className="text-ta-brown text-sm">© 2024 Niti Ayog. All rights reserved.</p>
        </div>
      </footer> */}
      <Footer/>
    </div>
    </Router>
  )
}

export default App