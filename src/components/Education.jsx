import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationList = [
  {
    period: '2024 – 2028',
    degree: 'B.Tech — Information Technology',
    institution: 'Kongu Engineering College',
    score: 'CGPA: 8.44 / 10.00 (Untill IVth Sem)',
    status: 'Currently Pursuing',
    description:
      'Pursuing Bachelor of Technology in Information Technology. Focusing on Data Structures & Algorithms, Object-Oriented Programming, Full-Stack Web Development (React, Node.js, Express, MongoDB), Operating Systems, and AI-enabled software systems.',
    tags: ['B.Tech IT', 'CGPA: 8.44', 'Data Structures', 'Full Stack Dev', 'Kongu Eng. College'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    period: '2023 – 2024',
    degree: 'Higher Secondary Certificate (HSC) — Bio-Maths',
    institution: 'SRV Boys Higher Secondary School',
    score: 'Marks: 515 / 600 (85.83%)',
    status: 'Completed',
    description:
      'Completed Class XII in the Bio-Maths stream with 85.83%. Developed strong analytical foundation in advanced Mathematics, Physics, Chemistry, and computational logic.',
    tags: ['Class XII', 'Bio-Maths', 'Score: 85.83%', 'SRV Boys School', 'Mathematics'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate vertical timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );

      // Animate education items
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        if (dotRefs.current[index]) {
          gsap.fromTo(
            dotRefs.current[index],
            { backgroundColor: 'white', scale: 0.5 },
            {
              backgroundColor: 'black',
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 72%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="w-full min-h-screen bg-white flex flex-col justify-center py-20 md:py-32 px-4 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div data-aos="fade-up">
            <span className="text-black/50 text-xs font-bold tracking-widest uppercase mb-2 block">
              — Academic Background
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-black">
              Education
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-black/50 text-sm md:text-base font-medium max-w-xs md:text-right"
          >
            Academic qualifications and foundational learning journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-black origin-top"
            style={{ scaleY: 0 }}
          />
          {/* Faint background line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-black/10" />

          <div className="flex flex-col gap-0">
            {educationList.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative flex flex-col md:flex-row gap-4 md:gap-0 border-b border-black/10 py-12 pr-4 opacity-0"
              >
                {/* Period Column */}
                <div className="md:w-[140px] flex-shrink-0 pl-6 md:pl-0">
                  <span className="text-xs font-bold tracking-widest text-black/50 uppercase block mb-1">
                    {edu.period}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-black/5 text-black/70">
                    {edu.status}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  className="hidden md:flex absolute left-[140px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-black/20 bg-white items-center justify-center text-black z-10 shadow-sm"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                </div>

                {/* Content */}
                <div className="pl-6 md:pl-14 flex flex-col lg:flex-row flex-1 gap-6 lg:gap-10 items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight">
                        {edu.degree}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4 text-sm font-semibold">
                      <span className="text-black font-bold">{edu.institution}</span>
                      <span className="text-black/30">•</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5EBDD] text-black text-xs font-bold">
                        {edu.score}
                      </span>
                    </div>

                    <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                      {edu.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-[260px]">
                    {edu.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-black/15 text-black/75 text-xs font-semibold rounded-full shadow-2xs hover:border-black transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
