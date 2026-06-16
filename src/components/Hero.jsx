import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroVideo from '../assets/hero/hero.mp4';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  return (
    <div id="home" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content Overlay (Bottom-Left Aligned, Smaller Text) */}
      <div className="absolute bottom-0 left-0 z-20 w-full p-4 md:p-8 lg:p-10 pointer-events-none">
        <div className="max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto bg-black/60 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none p-5 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none">
          
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white md:text-black mb-1.5 md:mb-2 tracking-tight">
            Hi, I'm Navaneethan RS
          </h1>
          
          <h2 data-aos="fade-up" data-aos-delay="200" className="text-base md:text-lg lg:text-xl font-medium text-white/95 md:text-black/90 mb-2 md:mb-3 h-[24px] md:h-[28px] lg:h-[32px]">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI Enthusiast',
                2000,
                'Problem Solver',
                2000,
                'Web Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          
          <p data-aos="fade-up" data-aos-delay="300" className="text-xs md:text-sm lg:text-base font-medium text-white/80 md:text-black/80 mb-5 leading-relaxed">
            Building scalable web applications <br className="hidden sm:block" />
            and AI-powered solutions that <br className="hidden sm:block" />
            create real-world impact.
          </p>

          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap gap-3 md:gap-4 mt-2">
            <button className="group flex items-center gap-3 pl-5 pr-1.5 py-1.5 bg-black hover:bg-black/90 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] border border-white/20 md:border-transparent">
              <span>Contact Me</span>
              <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-white rounded-full transition-transform duration-300 group-hover:translate-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-3.5 h-3.5 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </div>
          
        </div>
      </div>

      {/* Right Side Half-Circle Rotating Skills */}
      <div data-aos="fade-left" data-aos-delay="500" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 200 200" width="300" height="300" className="animate-[spin_20s_linear_infinite]">
          <defs>
            <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
          </defs>
          <text fill="white" className="text-[12px] font-semibold tracking-[0.25em] uppercase">
            <textPath href="#circlePath" startOffset="0%">
              React JS • HTML • CSS • Javascript • React JS • HTML • CSS • Javascript • 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Play/Pause Toggle Button */}
      <button 
        onClick={togglePlay}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black/40 md:bg-black/10 hover:bg-black/60 md:hover:bg-black/20 backdrop-blur-md rounded-full text-white md:text-black transition-all duration-300 border border-white/20 md:border-black/10 shadow-lg cursor-pointer hover:scale-110"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
          </svg>
        ) : (
          // Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Hero;
