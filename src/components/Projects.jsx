import React, { useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'AI Chat Platform',
    category: 'Full Stack · AI',
    year: '2024',
    description: 'A real-time AI-powered chat platform built with React and Node.js, integrating OpenAI API for intelligent conversations. Features user authentication, chat history, and responsive design.',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    color: '#F5EBDD',
    link: '#',
  },
  {
    id: '02',
    title: 'E-Commerce Dashboard',
    category: 'Web App · UI Design',
    year: '2024',
    description: 'A full-featured admin dashboard for an e-commerce platform with analytics, product management, and order tracking. Built with React and integrated with a REST API backend.',
    tags: ['React', 'PHP', 'MySQL', 'Charts.js'],
    color: '#F5EBDD',
    link: '#',
  },
  {
    id: '03',
    title: 'Student Management System',
    category: 'Web App · Database',
    year: '2023',
    description: 'A comprehensive student management system with attendance tracking, grade management, and report generation. Developed using PHP and MySQL for a college-level project.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    color: '#F5EBDD',
    link: '#',
  },
  {
    id: '04',
    title: 'Portfolio Website',
    category: 'Frontend · Design',
    year: '2024',
    description: 'A modern personal portfolio built with React, Vite, and Tailwind CSS. Features smooth animations using GSAP and AOS, a dynamic hero section with video background, and a clean contact form.',
    tags: ['React', 'Vite', 'GSAP', 'AOS'],
    color: '#F5EBDD',
    link: '#',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="project" className="w-full min-h-screen bg-white py-20 md:py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none"
          >
            Projects
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-black/50 text-sm md:text-base font-medium max-w-xs text-right"
          >
            A selection of my recent work and personal builds.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: project.color }}
            >
              <div className="p-8 md:p-10 h-full flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
                
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-black/40 uppercase">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-black/40">{project.year}</span>
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="mt-auto">
                  <p className="text-xs font-bold tracking-widest text-black/30 uppercase mb-2">{project.id}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-black">{project.title}</h3>
                  
                  <p className={`text-sm text-black/70 leading-relaxed mb-5 max-w-sm transition-all duration-300 ${
                    hoveredId === project.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/10 text-black/70 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
