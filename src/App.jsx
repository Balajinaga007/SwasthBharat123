import { useEffect, useRef, useState } from 'react'
import './App.css';
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
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom'
import L1page from './pages/l1page'
import Ls2 from './pages/l2page'
import Ls3 from './pages/l3page'
import Ls4 from './pages/l4page'
import Ls5 from './pages/l5page'
import Ls6 from './pages/l6page'
import Ls7 from './pages/l7page'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShieldAlt, faMobileAlt, faHeartbeat, faBook, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import l1 from './assets/l1.svg'
import WhyImportantSection from "./components/WhyImportantSection";
import HeroSection from './components/slider'
import { getStages } from './services/content'
import StageDetails from './pages/StageDetails';
import Loader from './svg/Loader';
import StagesInfo from './pages/StagesInfo';
import StagesCarousel from './components/StagesCarousel';



// import HealthEcosystemTimeline from './lifestages'

gsap.registerPlugin(ScrollTrigger)


function MainContent() {
  const [stagesData, setStagesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const stagesContainer = useRef()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [activeStep, setActiveStep] = useState()
  const heroRef = useRef()
  const typewriterRef = useRef()
  const navRef = useRef()
  const imageRefs = useRef([])
  const currentSlide = useRef(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (activeStep) {
      stagesContainer?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // or "center" or "start"
      });
    }
  }, [activeStep])
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

  const fetchStages = async () => {
    setLoading(true)
    try {
      const data = await getStages()

      setStagesData(data?.data)
    } catch (err) {
      console.log(err.message)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchStages()
  }, [])

  const currentStep = stagesData?.find(val => val.id === activeStep)?.health_ecosystem_items?.length ? stagesData?.find(val => val.id === activeStep) : stagesData[0]

  return (
    <div className="min-h-screen bg-ta-cream">
      {/* Navigation */}
      <Navbar />

      {/* Main Title with extra spacing from navigation */}
      <div className="w-full bg-ta-cream text-center pt-10 pb-4">
        <h1 className="text-4xl md:text-6xl font-dark mb-0 text-ta-dark-brown tracking-wide">
          Increase your Healthspan with Lifespan
        </h1>
      </div>
      <section className="bg-ta-cream text-center relative overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center pb-10">
        {/* Flex container for hero images */}
        <div className="flex flex-col md:flex-row w-full h-full relative z-0">
          {/* Left image and overlay */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[600px] flex items-center justify-center md:pb-0 pb-20">
            <img
              src="/images/hero1.jpg"
              alt="Hero Background Left"
              className="w-full h-full object-fit object-center opacity-40 pointer-events-none select-none"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[55%] flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-bold text-ta-dark-brown text-center drop-shadow-sm">
                Lifespan
                <div className="text-base md:text-lg font-medium mt-0 text-ta-dark-brown opacity-90">
                  Total years lived from birth to death.
                </div>
              </div>
            </div>
          </div>
          {/* Right image and overlay */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[600px] flex items-center justify-center md:pb-0 pb-20">
            <img
              src="/images/hero2.jpg"
              alt="Hero Background Right"
              className="w-full h-full object-fit object-center opacity-40 pointer-events-none select-none"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-bold text-ta-dark-brown text-center drop-shadow-sm">
                Healthspan
                <div className="text-base md:text-lg font-medium mt-0 text-ta-dark-brown opacity-90">
                  Years lived in good health.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifespan in India Section */}
      <section className="py-10 px-4 bg-ta-white flex items-center justify-center">
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

      <HeroSection />



      {/* Typewriter Section */}
      <section className="py-0 my-0 px-4 bg-ta-white flex items-center justify-center ]">
        <div className="max-w-6xl mx-auto text-center m-0 pt-5 md:p-0">
          <div className="relative m-0 p-0">
            <p
              ref={typewriterRef}
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ta-dark-brown text-left m-0 p-0"
              style={{
                fontFamily: 'Kalam, cursive',
                fontWeight: '400',
                lineHeight: '1.8',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.05em',
              }}
            >
              Lifespan measures quantity; healthspan measures quality. Lifespan counts total years from birth to death, healthspan represents the period spent in good health, free from serious disease and disability.
            </p>
          </div>
        </div>
      </section>


      {/* Healthspan Infographic Section */}
      <section className="w-full">
        <img
          src="/images/slide6.jpg"
          alt="SwasthBharat Health Initiative"
          className="w-full h-auto object-cover"
        />
      </section>


      {/* Placeholder Section */}
      <WhyImportantSection />

      {/* Tag Cloud Section */}
      {!loading ?
        <>

          <section className=" py-8  font-work-sans " style={{ backgroundColor: ' #CDCFF7', fontFamily: 'Work Sans, sans-serif' }}>
            <section className="pt-0 md:pb-16 px-4  flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center ">
                <h2 className="text-3xl md:text-4xl font-light  mb-6">
                  Technology for Healthspan
                </h2>
                <p className="text-xl  max-w-1xl mx-auto  leading-relaxed">
                  We are showcasing the frontier technologies that can help us bridge this gap for every life stage.
                </p>
              </div>
            </section>
            <div className='md:hidden'>
              <StagesCarousel data={stagesData} />
            </div>
            <div className=' hidden md:block'>
              <div className="md:max-w-6xl mx-auto relative w-6xl ">
                {/* 7 Circles */}
                <div className="flex justify-between items-start mb-8 relative">
                  {stagesData?.map((stage, index) => (
                    <div
                      key={index}
                      className='keen-slider__slide  w-28 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-110 relative'
                      onMouseEnter={() => setActiveStep(stage?.id)}

                      onClick={() => navigate(`/stageDetails/${stage.documentId}`)}
                    >
                      {/* Fixed height for title to align circles */}
                      <div style={{ minHeight: 70, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <p className={`text-center transition-all duration-300 mb-1 ${activeStep === stage.id ? "text-[green]" : "text-black"}`}>{stage.Title}</p>
                      </div>
                      <div
                        className={`w-28 h-28 rounded-full flex-shrink-0 ${activeStep === stage.id ? "text-[green] bg-[#9AD9B1]" : "text-ta-dark-brown bg-ta-beige"} flex items-center justify-center transition-all duration-300`}
                        style={{ position: 'relative', zIndex: 2 }}
                      >
                        <div
                          className={`svg-container  ${activeStep === stage.id ? "text-[green]   w-[1.875rem] h-[2.5rem] " : "text-ta-dark-brown  w-[1.875rem] h-[2.5rem]"} transition-all duration-300 ease-in-out  `}

                          dangerouslySetInnerHTML={{ __html: stage.icon }}
                        />


                      </div>
                      {activeStep === stage.id && (
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 4 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '100%',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                          }}
                        >
                          <line x1="2" y1="0" x2="2" y2="110" stroke="white" strokeWidth="10" />
                          <polygon points="0,110 4,110 2,120" fill="white" />
                        </svg>
                      )}


                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl h-[600px] p-3.5 flex flex-col gap-1 overflow-y-auto" ref={stagesContainer}>
                  {/* Envisioned Health Ecosystem */}
                  <h2 className="text-xl font-bold text-gray-900">Envisioned Health Ecosystem</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <h2 className="text-xl pt-7 font-bold text-gray-900 mt-2">Enabling Frontier Technologies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              </div>
            </div>
          </section>    </> : <div className='flex spin-pause h-[500px] flex items-center justify-center'><Loader /></div>}

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/stage1" element={<L1page />} />
        <Route path="/stage2" element={<Ls2 />} />
        <Route path="/stage3" element={<Ls3 />} />
        <Route path="/stage4" element={<Ls4 />} />
        <Route path="/stage5" element={<Ls5 />} />
        <Route path="/stage6" element={<Ls6 />} />
        <Route path="/stage7" element={<Ls7 />} />
        <Route path="/StageDetails/:id" element={<StageDetails />} />
        <Route path="/stageDetails/:stageid/:type/:id" element={<StagesInfo />} />
      </Routes>
    </Router>
  )
}

export default App