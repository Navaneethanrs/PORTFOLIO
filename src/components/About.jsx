import React, { useRef } from 'react';
import aboutImg from '../assets/about/about.png';

const About = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" ref={containerRef} className="relative w-full min-h-screen bg-white overflow-hidden flex justify-center items-center px-4 md:px-8 py-20 md:py-32">
      {/* Main Folder Container */}
      <div
        data-aos="fade-up"
        className="relative w-full max-w-6xl bg-[#F5EBDD] rounded-[32px] pt-8 px-8 md:pt-14 md:px-14 lg:pt-16 lg:px-16 pb-0 shadow-2xl border border-[#ebe0d1] flex flex-col md:flex-row items-stretch gap-10 md:gap-16"
      >
        {/* Inward Cut / Notch at Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-56 h-6 md:h-8 bg-white rounded-b-2xl md:rounded-b-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.02)] z-10" />

        {/* Left Side: About Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 z-20 pb-16 md:pb-24 self-start mt-4 md:mt-0">
          <h2 data-aos="fade-right" data-aos-delay="200" className="text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight">
            About Me
          </h2>

          <p data-aos="fade-right" data-aos-delay="300" className="text-base md:text-lg lg:text-xl text-black/80 font-medium leading-relaxed max-w-lg">
            Building scalable web applications and AI-powered solutions that create real-world impact.
          </p>

          {/* Infinite Marquee Tags */}
          <div data-aos="fade-right" data-aos-delay="400" className="w-full max-w-[90vw] md:max-w-md overflow-hidden flex flex-col gap-3 mt-4 lg:mt-8 relative mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            
            {/* Row 1 - Moves Left */}
            <div className="flex w-max animate-marquee-left gap-3">
              {[
                'HTML', 'CSS', 'Javascript', 'PHP',
                'HTML', 'CSS', 'Javascript', 'PHP'
              ].map((tag, index) => (
                <span
                  key={`r1-${index}`}
                  className="px-5 py-2 bg-transparent border border-black/20 text-black text-sm md:text-base font-medium rounded-full shadow-sm whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Row 2 - Moves Right */}
            <div className="flex w-max animate-marquee-right gap-3">
              {[
                'React JS', 'MongoDB', 'Nodejs', 'MySQL',
                'React JS', 'MongoDB', 'Nodejs', 'MySQL'
              ].map((tag, index) => (
                <span
                  key={`r2-${index}`}
                  className="px-5 py-2 bg-transparent border border-black/20 text-black text-sm md:text-base font-medium rounded-full shadow-sm whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div data-aos="zoom-in-up" data-aos-delay="300" className="relative w-full md:w-1/2 flex justify-center md:justify-end z-20 mt-8 md:mt-0 self-end overflow-visible">
          <img
            src={aboutImg}
            alt="About Navaneethan RS"
            className="w-[85%] md:w-full max-w-[500px] lg:max-w-[550px] object-contain object-bottom rounded-br-[32px] -mt-8 md:-mt-24 lg:-mt-36 transition-transform duration-500 ease-out hover:scale-[1.03] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
