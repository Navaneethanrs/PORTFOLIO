import React from 'react';

const certificates = [
  {
    id: '01',
    title: 'MATLAB Simulink Onramp',
    issuer: 'MathWorks Training Services',
    date: '2025',
    grade: '100% Course Completion',
    description:
      'Mastered dynamic system modeling and simulation using Simulink — block diagrams, signal routing networks, modular subsystems, and model-based design.',
    skills: ['Simulink', 'Model-Based Design', 'Block Diagrams', 'Signal Routing'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-13.5 0v-2.25Z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'MATLAB Onramp',
    issuer: 'MathWorks Training Services',
    date: '21 April 2025',
    grade: '100% Course Completion',
    description:
      'Mastered the MATLAB technical environment: scripts, function authoring, matrix computations, data visualization, and numerical computation automation.',
    skills: ['MATLAB', 'Matrix Operations', 'Data Visualization', 'Numerical Computing'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Generative AI for Beginners',
    issuer: 'Simplilearn SkillUP',
    date: '13 July 2025',
    grade: 'Verified · Code: 8619621',
    description:
      'Foundations of Generative AI, Large Language Models (LLMs), prompt engineering strategies, ChatGPT workflows, and ethical implications.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'ChatGPT'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Certificate in Office Automation',
    issuer: 'Bharathidasan University — IECD',
    date: 'Feb / Mar 2018',
    grade: 'First Class with Distinction',
    description:
      'Certified under the SUITS scheme. In-depth training on document engineering, data organization, spreadsheet analytics, and office digital workflows.',
    skills: ['MS Office', 'Spreadsheets', 'Documentation', 'Workflows'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'Programming Techniques',
    issuer: 'Bharathidasan University — IECD',
    date: 'February 2019',
    grade: 'First Class with Distinction',
    description:
      'Comprehensive foundation in programming paradigms: computational logic, structured code architecture, iterative problem-solving, and algorithms.',
    skills: ['Programming Logic', 'Algorithms', 'Structured Coding'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    id: '06',
    title: 'C & C++ Programming',
    issuer: 'APT Computer Education',
    date: 'Apr – May 2024',
    grade: 'A+ Grade',
    description:
      'Rigorous training in low-level systems programming and object-oriented principles. Covered memory models, pointers, inheritance, and polymorphism.',
    skills: ['C', 'C++', 'OOP', 'Pointers & Memory'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-[#F5EBDD]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    )
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full bg-white flex flex-col justify-center items-center py-16 md:py-24 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div data-aos="fade-up">
            <span className="text-black/50 text-xs font-bold tracking-widest uppercase mb-1.5 block">
              — Credentials & Badges
            </span>
            <h2 className="text-black text-3xl md:text-5xl font-bold tracking-tight">
              Certifications
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="text-black/60 text-xs md:text-sm font-medium max-w-xs md:text-right leading-relaxed">
            Verified credentials in systems programming, AI, and engineering tools.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-[#F5EBDD] rounded-[24px] p-6 md:p-7 flex flex-col justify-between h-full transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(245,235,221,0.35)] group relative"
            >
              {/* Top Row: Compact Badge & Link Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {cert.icon}
                </div>

                <a
                  href={cert.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} on LinkedIn`}
                  className="w-8 h-8 rounded-full bg-black/5 hover:bg-black text-black hover:text-white flex items-center justify-center transition-all duration-300 group/link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 justify-end">
                {/* ID & Date */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-black/50 text-xs font-semibold tracking-wider block">
                    {cert.id}
                  </span>
                  <span className="text-black/45 text-[10px] font-bold tracking-wider uppercase">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-1.5 tracking-tight leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer & Grade */}
                <p className="text-black/60 text-[11px] font-semibold mb-2.5">
                  {cert.issuer} • <span className="text-black font-bold">{cert.grade}</span>
                </p>

                {/* Description */}
                <p className="text-black/75 text-xs leading-relaxed font-normal mb-4">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-semibold bg-black/5 text-black/75 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                  <a
                    href={cert.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-black hover:opacity-70 transition-opacity"
                  >
                    <span>Verify on LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>

                  <span className="text-[9px] uppercase font-bold tracking-widest text-black/35">
                    Credential
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Profile CTA */}
        <div className="mt-12 flex flex-col items-center gap-2" data-aos="fade-up">
          <p className="text-xs text-black/50 font-medium">Explore all verified licenses & certifications</p>
          <a
            href="https://www.linkedin.com/in/navaneethan-sankar/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 pl-5 pr-1.5 py-1.5 bg-black hover:bg-black/85 text-white text-xs md:text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>View All on LinkedIn</span>
            <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-black transition-transform duration-300 group-hover:translate-x-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
