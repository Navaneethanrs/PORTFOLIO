import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: 'Freelance',
    duration: '2024 – Present',
    description: 'Designing and building responsive web apps using React, Node.js, and MongoDB. Delivered multiple client projects from scratch with a strong focus on performance and UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  },
  {
    year: '2023',
    role: 'Frontend Developer Intern',
    company: 'Tech Startup',
    duration: 'Jun 2023 – Dec 2023',
    description: 'Built interactive UI components using React and collaborated with backend teams to integrate REST APIs. Improved application load time by 40% through code optimization.',
    tags: ['React', 'REST API', 'CSS', 'JavaScript'],
  },
  {
    year: '2022',
    role: 'Web Development Trainee',
    company: 'Institute Project',
    duration: 'Jan 2022 – May 2022',
    description: 'Developed college-level projects using HTML, CSS, PHP, and MySQL. Created a student management system as part of the final year curriculum.',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line growing as you scroll
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

      // Animate each experience item one by one
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
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

        // Animate dots: unfilled → filled
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
      id="experience"
      ref={sectionRef}
      className="w-full min-h-screen bg-white flex flex-col justify-center py-20 md:py-32 px-4 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none"
          >
            Experience
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-black/50 text-sm md:text-base font-medium max-w-xs text-right"
          >
            A timeline of skills built through dedication and real-world projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical animated line */}
          <div
            ref={lineRef}
            className="absolute left-0 md:left-[130px] top-0 bottom-0 w-px bg-black origin-top"
            style={{ scaleY: 0 }}
          />
          {/* Faint background line */}
          <div className="absolute left-0 md:left-[130px] top-0 bottom-0 w-px bg-black/10" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative flex flex-col md:flex-row gap-4 md:gap-0 border-b border-black/10 py-10 pr-4 opacity-0"
              >
                {/* Year */}
                <div className="md:w-[130px] flex-shrink-0 pl-6 md:pl-0">
                  <span className="text-xs font-bold tracking-widest text-black/40 uppercase">
                    {exp.year}
                  </span>
                </div>

                {/* Animated dot */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  className="hidden md:block absolute left-[130px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-black z-10"
                  style={{ backgroundColor: 'white' }}
                />

                {/* Content */}
                <div className="pl-6 md:pl-12 flex flex-col md:flex-row flex-1 gap-4 md:gap-8 items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-black/50 text-sm font-semibold mb-3">
                      {exp.company} · {exp.duration}
                    </p>
                    <p className="text-black/70 text-sm leading-relaxed max-w-lg">
                      {exp.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[220px]">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-black/15 text-black/60 text-xs font-semibold rounded-full"
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

export default Experience;
