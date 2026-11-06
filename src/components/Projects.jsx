import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: '01',
    title: 'MediRoute',
    category: 'IoT · Web App',
    year: '2026',
    description: 'A smart ambulance traffic control and hospital coordination system using GPS, IoT-based signal automation, and real-time dashboards to create green corridors for ambulances.',
    overview: {
      problem: `Every year, thousands of patients die not because of a lack of medical care — but because the ambulance couldn't reach in time. Urban traffic congestion is one of the leading causes of delayed emergency response. Currently, there is no automated, integrated system that simultaneously clears traffic signals ahead of an ambulance and alerts hospitals to prepare resources before the patient even arrives. Manual coordination between ambulance drivers, traffic police, and hospitals is slow, error-prone, and life-threatening.`,
      solution: `MediRoute is an end-to-end smart emergency corridor system. The moment an ambulance is dispatched, its live GPS location is tracked on a central dashboard. IoT-connected traffic signals along the mapped route automatically switch to green, eliminating red-light stops without any manual intervention. Simultaneously, the nearest hospital receives a real-time alert with the patient's condition, estimated arrival time, and required resources — so doctors and operation theatres are ready the moment the ambulance pulls in. The system reduces average emergency response time significantly and removes human coordination overhead entirely.`,
      highlights: [
        'Live GPS tracking of ambulance with route mapping',
        'IoT-based automatic traffic signal override along the route',
        'Real-time hospital coordination dashboard with ETA updates',
        'Instant patient condition alerts pushed to hospital staff',
        'Route optimization engine for minimum response time',
        'Admin panel for dispatchers to manage multiple ambulances',
      ],
    },
    tags: ['React JS', 'Node.js', 'Express JS', 'MongoDB', 'Socket.io', 'IoT Sensors', 'GPS API', 'JavaScript', 'HTML5', 'CSS3'],
    color: '#E8F4F8',
    accent: '#2563eb',
    link: 'https://github.com/Navaneethanrs/MediRoute',
    liveUrl: null,
  },
  {
    id: '02',
    title: 'MindBlossom',
    category: 'AI · Mental Wellness',
    year: '2026',
    description: 'A mental wellness web app where users express emotions anonymously via text or voice, with AI support, stress-relief guidance, and mood-based song recommendations.',
    overview: {
      problem: `Mental health is a silent crisis — millions of people, especially youth and rural communities, suffer from anxiety, depression, and emotional exhaustion with no accessible support. Stigma prevents them from visiting therapists. Cost is a barrier for most. And existing mental health apps require account creation, which feels invasive and discourages honest expression. There is a critical need for a low-barrier, anonymous platform that offers immediate emotional support without judgment.`,
      solution: `MindBlossom removes every barrier to mental wellness support. Users open the platform with zero sign-up — no name, no email, completely anonymous. They can type or speak their feelings freely. An AI engine processes the input, recognizes emotional tone, and responds with empathetic, non-judgmental messages that feel human. Based on the detected mood, the platform recommends a curated playlist of Tamil songs to uplift or soothe the user. It also guides users through breathing exercises, grounding techniques, and stress-relief activities tailored to their current state. The goal is to give anyone a safe digital companion in their worst moments.`,
      highlights: [
        'Zero sign-up — fully anonymous emotional expression',
        'Text and voice input support via Web Speech API',
        'AI-powered empathetic response system',
        'Mood detection and emotion analysis engine',
        'Mood-based Tamil song playlist recommendations',
        'Guided breathing exercises and stress-relief techniques',
      ],
    },
    tags: ['React JS', 'Node.js', 'Express JS', 'Web Speech API', 'AI / NLP', 'JavaScript', 'HTML5', 'CSS3'],
    color: '#F0EBF8',
    accent: '#7c3aed',
    link: 'https://github.com/Navaneethanrs/MindBlossom',
    liveUrl: 'https://mind-blossom.vercel.app',
  },
  {
    id: '03',
    title: 'FoodSaver',
    category: 'Social Impact · Full Stack',
    year: '2025',
    description: 'A platform connecting food donors with nearby NGOs to reduce food wastage via geo-matching and automated email alerts for quick pickup and distribution.',
    overview: {
      problem: `India wastes approximately 68 million tonnes of food every year — at weddings, restaurants, canteens, and households — while over 190 million people go hungry. The core issue is a broken link: people with surplus food have no quick, reliable way to reach NGOs or food banks nearby. By the time manual coordination happens, the food has already spoiled. There is no structured, tech-enabled bridge between food surplus and food scarcity.`,
      solution: `FoodSaver is a two-sided web platform that makes food donation as easy as filling a form. Donors register their surplus food with quantity, type, packaging status, and their GPS location. The PHP backend runs a geo-matching algorithm that instantly identifies the nearest registered NGOs within a defined radius. It then fires automated email alerts via PHPMailer to those NGOs with all donation details and a pickup deadline. NGOs confirm acceptance through a simple click, and the system tracks the status — from donation listing, to pickup confirmed, to delivered. Donors and NGOs both get a history dashboard to monitor impact over time.`,
      highlights: [
        'Simple donor food registration form with GPS location',
        'Geo-matching algorithm to find nearest NGOs instantly',
        'Automated PHPMailer email alerts sent to matched NGOs',
        'NGO acceptance and pickup confirmation workflow',
        'Real-time donation status tracking for donors',
        'Admin dashboard to manage donors, NGOs, and deliveries',
      ],
    },
    tags: ['PHP', 'MySQL', 'PHPMailer', 'Google Maps API', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    color: '#FFF8E8',
    accent: '#d97706',
    link: 'https://github.com/Navaneethanrs/FOODSAVER',
    liveUrl: 'https://foodsaver-ngo.vercel.app',
  },
  {
    id: '04',
    title: 'MADC Attendance',
    category: 'Mobile · Flutter',
    year: '2026',
    description: 'A Flutter-based cross-platform mobile app for MADC with real-time attendance tracking, digital leave management, and reporting dashboards.',
    overview: {
      problem: `Organizations that rely on paper registers or basic spreadsheets for attendance tracking suffer from severe inefficiencies — buddy punching (proxy attendance), data loss, manual errors, delayed reporting, and an entirely manual leave approval process. HR teams spend hours every month compiling attendance reports. There is no real-time visibility for managers, and employees have no easy way to apply for leave or check their own attendance history without approaching HR physically.`,
      solution: `MADC Attendance is a cross-platform Flutter mobile application that digitizes the entire attendance and leave management lifecycle. Employees open the app, authenticate securely via Firebase, and mark their attendance with a single tap — the timestamp and location are recorded instantly. Leave applications are submitted digitally with reason and date range, and managers receive push notifications to approve or reject them in real time. The admin dashboard shows live attendance counts, absent lists, leave balances, and monthly summaries. All data syncs instantly across devices via Firebase Firestore, eliminating any manual compilation effort for HR.`,
      highlights: [
        'Single-tap daily attendance marking with timestamp',
        'Firebase Authentication for secure employee login',
        'Digital leave application with reason and date range',
        'Real-time push notifications for leave approvals',
        'Live admin dashboard with present/absent/leave counts',
        'Monthly attendance report export for HR processing',
      ],
    },
    tags: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Firebase Cloud Messaging', 'Provider', 'REST API'],
    color: '#FDF0F8',
    accent: '#db2777',
    link: 'https://github.com/Navaneethanrs/madc-attendance',
    liveUrl: null,
  },
  {
    id: '05',
    title: 'CPU Scheduling Visualizer',
    category: 'Education · Tool',
    year: '2026',
    description: 'An interactive web tool to visualize classic CPU scheduling algorithms with animated Gantt charts and detailed performance metrics.',
    overview: {
      problem: `CPU scheduling is one of the most fundamental yet abstract concepts in Operating Systems — and one of the hardest to truly understand from a textbook. Students can memorize the steps of FCFS, SJF, Round Robin, or Priority Scheduling, but without seeing how processes actually compete, wait, and execute over time, the intuition never forms. University labs rarely have interactive tools for this, leaving students to solve dry numerical problems without any visual feedback.`,
      solution: `The CPU Scheduling Visualizer is an interactive browser-based tool that transforms abstract algorithm theory into a live visual experience. Users input process data — arrival time, burst time, priority level, and time quantum for Round Robin. They select an algorithm, and the tool animates the Gantt chart step by step, highlighting the currently executing process in real time. After simulation, every process shows its individual waiting time and turnaround time. System-wide averages are computed and displayed, making it easy to compare algorithm efficiency. It supports all four major algorithms and runs entirely in the browser with no installation needed.`,
      highlights: [
        'Supports FCFS, SJF, Round Robin & Priority Scheduling',
        'Live animated Gantt chart rendered step by step',
        'Per-process waiting time and turnaround time display',
        'Average waiting time & turnaround time calculation',
        'Time quantum input for Round Robin configuration',
        'Fully browser-based — no installation or backend needed',
      ],
    },
    tags: ['React JS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Algorithm Design'],
    color: '#F5F0FF',
    accent: '#6d28d9',
    link: 'https://github.com/Navaneethanrs/Cpu-Scheduling',
    liveUrl: 'https://cpuscheduling-lemon.vercel.app',
  },
];

const techStack = [
  { name: 'React JS',   icon: '⚛️' },
  { name: 'Express JS', icon: '🚀' },
  { name: 'Node.js',    icon: '🟢' },
  { name: 'MongoDB',    icon: '🍃' },
  { name: 'Flutter',    icon: '💙' },
  { name: 'Dart',       icon: '🎯' },
  { name: 'PHP',        icon: '🐘' },
  { name: 'MySQL',      icon: '🗄️' },
  { name: 'Firebase',   icon: '🔥' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'HTML',       icon: '🌐' },
  { name: 'CSS',        icon: '🎨' },
];

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke={color} className="w-4 h-4 shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ── Modal ── */
const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full md:max-w-2xl max-h-[94vh] md:max-h-[88vh] overflow-y-auto rounded-t-[32px] md:rounded-[28px] bg-white shadow-2xl"
        style={{ animation: 'slideUp 0.35s cubic-bezier(0.16,1,0.3,1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="h-1.5 w-full rounded-t-[28px]" style={{ backgroundColor: project.accent }} />

        <div className="p-7 md:p-10">

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: project.accent }}>
                {project.category} · {project.year}
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black mt-1">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="ml-4 mt-1 w-9 h-9 rounded-full bg-black/6 hover:bg-black/12 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Badges row: Project Number + Live Demo if available */}
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
              style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
            >
              Project {project.id}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Demo Available</span>
                <ExternalIcon />
              </a>
            )}
          </div>

          {/* Problem */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase">Problem Statement</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-4">
              <p className="text-sm text-black/75 leading-7">{project.overview.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase">Proposed Solution</p>
            </div>
            <div
              className="rounded-2xl px-5 py-4 border"
              style={{ backgroundColor: `${project.accent}0d`, borderColor: `${project.accent}30` }}
            >
              <p className="text-sm text-black/75 leading-7">{project.overview.solution}</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">✨</span>
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase">Key Highlights</p>
            </div>
            <ul className="space-y-3">
              {project.overview.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/75 font-medium leading-relaxed">
                  <CheckIcon color={project.accent} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🛠</span>
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase">Tech Stack Used</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-bold rounded-full tracking-wide"
                  style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs: Live Demo + GitHub */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:flex-1 py-3.5 rounded-2xl text-white text-sm font-bold tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: project.accent }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Visit Live Demo</span>
                <ExternalIcon />
              </a>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2.5 w-full ${project.liveUrl ? 'sm:flex-1 bg-black/5 hover:bg-black text-black hover:text-white border border-black/10' : 'bg-black text-white hover:bg-black/90'} py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
            >
              <GitHubIcon />
              <span>View Source on GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section id="project" className="w-full min-h-screen bg-[#F9F9F7] py-20 md:py-32 px-4 md:px-12 lg:px-24">
        <div className="w-full max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div data-aos="fade-up">
              <p className="text-xs font-bold tracking-widest text-black/40 uppercase mb-3">— Work</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">Projects</h2>
            </div>
            <p data-aos="fade-up" data-aos-delay="150" className="text-black/50 text-sm font-medium max-w-xs md:text-right leading-relaxed">
              Explore working demos & codebases.<br />Click any project for deep overview.
            </p>
          </div>

          {/* Tech Stack */}
          <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
            <p className="text-[10px] font-black tracking-widest text-black/35 uppercase mb-3">Tech Stack · Priority Order</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 40}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/8 rounded-full text-xs font-semibold text-black/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                  <span className="ml-0.5 text-[9px] font-black text-black/25">#{i + 1}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-black/8 mb-12" />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                onClick={() => setActiveProject(project)}
                className={`group relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 0 ? 'md:col-span-2' : ''}`}
                style={{ backgroundColor: project.color }}
              >
                <div className={`p-7 md:p-10 h-full flex flex-col justify-between ${index === 0 ? 'min-h-[200px] md:min-h-[220px]' : 'min-h-[240px]'}`}>

                  {/* Top Bar on Card */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: project.accent }}>
                        {project.category}
                      </span>
                      <span className="text-[10px] font-semibold text-black/35">{project.year}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Live Demo Pill on card if available */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open live demo in new tab"
                          className="flex items-center gap-1.5 px-3 py-1 bg-white/80 hover:bg-black text-black hover:text-white border border-black/10 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 shadow-2xs hover:scale-105"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>Live Demo</span>
                          <ExternalIcon />
                        </a>
                      )}

                      {/* Overview hint */}
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                        <span className="text-[10px] font-bold hidden sm:inline" style={{ color: project.accent }}>
                          Overview
                        </span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black" style={{ backgroundColor: project.accent }}>
                          ↗
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content on Card */}
                  <div className="mt-auto pt-6">
                    <p className="text-[10px] font-black tracking-widest text-black/25 uppercase mb-1.5">{project.id}</p>
                    <h3 className={`font-black tracking-tight mb-2.5 text-black group-hover:translate-x-1 transition-transform duration-300 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-black/55 leading-relaxed mb-4 max-w-lg line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-[10px] font-bold rounded-full tracking-wide" style={{ backgroundColor: `${project.accent}18`, color: project.accent }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-14 flex flex-col items-center gap-4" data-aos="fade-up">
            <p className="text-sm text-black/40 font-medium">Want to see more of my work?</p>
            <a
              href="https://github.com/Navaneethanrs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-black hover:bg-black/85 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span>View More on GitHub</span>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black transition-transform duration-300 group-hover:translate-x-0.5">
                <GitHubIcon />
              </div>
            </a>
          </div>

        </div>
      </section>

      {activeProject && <Modal project={activeProject} onClose={() => setActiveProject(null)} />}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Projects;
