import React from 'react';

const certificates = [
  {
    id: '01',
    title: 'MATLAB Simulink Onramp',
    issuer: 'MathWorks Training Services',
    date: '2025',
    grade: '100% Course Completion',
    color: '#E8F4FF',
    accent: '#005f9e',
    icon: '🔷',
    description:
      'Covers building and simulating dynamic system models using Simulink — block diagrams, signal routing, subsystems, and model-based design principles used in control systems and embedded engineering.',
    skills: ['Simulink', 'Model-Based Design', 'Block Diagrams', 'Signal Routing', 'Control Systems'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
  {
    id: '02',
    title: 'MATLAB Onramp',
    issuer: 'MathWorks Training Services',
    date: '21 April 2025',
    grade: '100% Course Completion',
    color: '#F0F9FF',
    accent: '#0284c7',
    icon: '📊',
    description:
      'Introduces the MATLAB environment — scripts, functions, matrix operations, data visualization, and signal processing basics for a solid foundation in scientific computing.',
    skills: ['MATLAB', 'Matrix Operations', 'Data Visualization', 'Signal Processing', 'Numerical Computing'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
  {
    id: '03',
    title: 'Generative AI for Beginners',
    issuer: 'Simplilearn SkillUP',
    date: '13 July 2025',
    grade: 'Verified · Code: 8619621',
    color: '#FDF4FF',
    accent: '#9333ea',
    icon: '🤖',
    description:
      'Covers fundamentals of Generative AI — LLMs, prompt engineering, image generation, ChatGPT applications, and ethical considerations of AI for modern tech roles.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'ChatGPT', 'AI Ethics'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
  {
    id: '04',
    title: 'Certificate in Office Automation',
    issuer: 'Bharathidasan University — IECD',
    date: 'Feb / Mar 2018',
    grade: 'First Class with Distinction',
    color: '#EEF2FF',
    accent: '#4f46e5',
    icon: '🎓',
    description:
      'Awarded under the SUITS scheme by IECD, Bharathidasan University. Covers office productivity tools — word processing, spreadsheets, presentations, and digital communication workflows.',
    skills: ['MS Office', 'Word Processing', 'Spreadsheets', 'Presentations', 'Digital Communication'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
  {
    id: '05',
    title: 'Certificate in Programming Techniques',
    issuer: 'Bharathidasan University — IECD',
    date: 'February 2019',
    grade: 'First Class with Distinction',
    color: '#F0FDF4',
    accent: '#16a34a',
    icon: '💻',
    description:
      'Covers fundamental and intermediate programming concepts — logic building, structured programming, algorithms, and problem-solving techniques foundational to software development.',
    skills: ['Programming Logic', 'Algorithms', 'Structured Programming', 'Problem Solving', 'Data Structures'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
  {
    id: '06',
    title: 'C & C++ Programming',
    issuer: 'APT Computer Education',
    date: 'Apr – May 2024',
    grade: 'A+ Grade',
    color: '#FFF7ED',
    accent: '#ea580c',
    icon: '⚙️',
    description:
      'Mastered C and C++ programming — procedural C, OOP in C++, memory management, pointers, classes, inheritance, and polymorphism for a strong systems-programming foundation.',
    skills: ['C Programming', 'C++ / OOP', 'Pointers & Memory', 'Inheritance', 'Polymorphism'],
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
  },
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Certifications = () => {
  return (
    <section id="certifications" className="w-full bg-[#F9F9F7] py-20 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div data-aos="fade-up">
            <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3">— Credentials</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              Certifications
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="150" className="text-black/50 text-sm font-medium max-w-xs md:text-right leading-relaxed">
            {certificates.length} verified credentials across<br />programming, AI & engineering tools.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative rounded-[24px] overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: cert.color }}
            >
              {/* Top accent line */}
              <div className="h-1 w-full" style={{ backgroundColor: cert.accent }} />

              <div className="flex flex-col flex-1 p-6">

                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                    style={{ backgroundColor: `${cert.accent}18` }}
                  >
                    {cert.icon}
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-black/20">{cert.id}</span>
                </div>

                {/* Issuer + date */}
                <p className="text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: cert.accent }}>
                  {cert.issuer}
                </p>
                <p className="text-[10px] font-semibold text-black/35 mb-3">{cert.date}</p>

                {/* Title */}
                <h3 className="text-lg font-black tracking-tight text-black leading-snug mb-3 group-hover:translate-x-0.5 transition-transform duration-300">
                  {cert.title}
                </h3>

                {/* Grade badge */}
                <span
                  className="self-start inline-block px-2.5 py-1 text-[10px] font-black rounded-full tracking-wide mb-4"
                  style={{ backgroundColor: `${cert.accent}18`, color: cert.accent }}
                >
                  {cert.grade}
                </span>

                {/* Description */}
                <p className="text-xs text-black/60 leading-relaxed mb-5 flex-1">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-bold rounded-full"
                      style={{ backgroundColor: `${cert.accent}14`, color: cert.accent }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn CTA */}
                <a
                  href={cert.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl text-white text-xs font-bold tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-md mt-auto"
                  style={{ backgroundColor: '#0A66C2' }}
                >
                  <LinkedInIcon />
                  View on LinkedIn
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex flex-col items-center gap-3" data-aos="fade-up">
          <p className="text-sm text-black/40 font-medium">See all my credentials on LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/navaneethan-sankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: '#0A66C2' }}
          >
            <LinkedInIcon />
            <span>View LinkedIn Profile</span>
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-[#0A66C2] transition-transform duration-300 group-hover:translate-x-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
