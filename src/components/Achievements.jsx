import React, { useState } from 'react';

const achievements = [
  {
    id: '01',
    title: '1st Place in 3 College-Level Hackathons',
    event: 'Inter-College Hackathon Series',
    year: '2025 – 2026',
    category: 'Hackathon Winner',
    metric: '1st Place',
    metricSub: '3 Consecutive Wins',
    color: '#F5EBDD',
    accent: '#d97706',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004 0A5.625 5.625 0 0 0 18 8.625c0-1.879-.92-3.543-2.344-4.568M8.996 14.25A5.625 5.625 0 0 1 6 8.625c0-1.879.92-3.543 2.344-4.568m0 0A5.62 5.62 0 0 1 12 3c1.29 0 2.477.434 3.424 1.164m-6.848 0C9.488 4.792 10.68 5.25 12 5.25c1.32 0 2.513-.458 3.424-1.086" />
      </svg>
    ),
    description:
      'Secured 1st Place across three separate college-level hackathons for ideating, designing, and developing MediRoute — a real-time IoT and GPS-enabled emergency ambulance corridor coordination platform.',
    highlights: [
      'Built functional real-time prototype under 24-48 hour hackathon sprints',
      'Implemented IoT-based traffic signal automation logic',
      'Pitched to industry juries and evaluated on innovation & feasibility',
    ],
    tags: ['1st Prize (3x)', 'MediRoute', 'IoT', 'Emergency Response', 'Hackathons'],
  },
  {
    id: '02',
    title: 'Smart India Hackathon (SIH) 2025 Pre-Finalist',
    event: 'Ministry of Education & Central Govt. of India',
    year: '2025',
    category: 'SIH Pre-Finalist',
    metric: 'Pre-Finalist',
    metricSub: 'Top 53 / 300 Teams',
    color: '#EEF4FF',
    accent: '#2563eb',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    description:
      'Selected as a Pre-Finalist in the prestigious Smart India Hackathon (SIH) 2025 Central Government Round for CivicConnect, ranking among the top 53 teams out of 300 competitive teams nationwide.',
    highlights: [
      'Pre-Finalist for national-level problem statement under Central Government',
      'Engineered citizen grievance tracking workflows with real-time status updates',
      'Recognized for scalable system architecture and community impact',
    ],
    tags: ['SIH 2025', 'Pre-Finalist', 'CivicConnect', 'Govt of India', 'Top 53 / 300'],
  },
  {
    id: '03',
    title: 'Selected for Elite PACC Training Program',
    event: 'GeeksforGeeks (GFG)',
    year: '2025',
    category: 'Competitive Selection',
    metric: 'Top 80',
    metricSub: 'From 2,000+ Participants',
    color: '#F0FDF4',
    accent: '#16a34a',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      'Ranked among the Top 80 students out of 2,000+ competitive participants nationwide to gain direct entry into the prestigious Elite PACC (Placement & Advanced Coding Curriculum) program by GeeksforGeeks.',
    highlights: [
      'Top 4% selection rate through rigorous problem-solving assessments',
      'Advanced training in Data Structures, Algorithms, and System Design',
      'Mentorship from top software architects and competitive programmers',
    ],
    tags: ['GeeksforGeeks', 'Top 80 / 2000+', 'DSA', 'Algorithms', 'Competitive Coding'],
  },
  {
    id: '04',
    title: 'IIT Bombay Online Hackathon Participant',
    event: 'Indian Institute of Technology, Bombay',
    year: '2025',
    category: 'Premier National Hackathon',
    metric: 'National',
    metricSub: 'IIT Bombay Event',
    color: '#FAF5FF',
    accent: '#9333ea',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    description:
      'Competed in the prestigious IIT Bombay Online Hackathon, collaborating to design, build, and present cutting-edge software solutions in a fast-paced, highly competitive national environment.',
    highlights: [
      'Collaborated with cross-functional talent under tight sprint constraints',
      'Engineered rapid full-stack proof-of-concept solutions',
      'Presented architectural solutions to an elite national technical panel',
    ],
    tags: ['IIT Bombay', 'National Hackathon', 'Prototyping', 'Team Leadership'],
  },
  {
    id: '05',
    title: 'Multi-Event Technical Innovator & Competitor',
    event: 'PoC · Ideathon · Madathon · Balance Bytes · Byte Rush',
    year: '2024 – 2026',
    category: 'Ideathons & Coding Sprints',
    metric: '5+ Events',
    metricSub: 'Active Competitor',
    color: '#FFF7ED',
    accent: '#ea580c',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" />
      </svg>
    ),
    description:
      'Active participant and finalist across multiple technical competitions including Proof of Concept (PoC), Ideathons, Madathon, Balance Bytes, and Byte Rush, showcasing problem-solving and rapid software delivery.',
    highlights: [
      'Demonstrated consistent technical execution and architectural innovation',
      'Pitched proof-of-concepts across health tech, civic tools, and algorithms',
      'High-velocity code delivery and effective team synergy',
    ],
    tags: ['PoC', 'Ideathon', 'Madathon', 'Balance Bytes', 'Byte Rush'],
  },
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="w-full bg-[#F9F9F7] py-20 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div data-aos="fade-up">
            <span className="text-black/50 text-xs font-bold tracking-widest uppercase mb-3 block">
              — Recognition & Honors
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-black">
              Prizes & Achievements
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="150" className="text-black/50 text-sm md:text-base font-medium max-w-xs md:text-right leading-relaxed">
            Hackathon victories, national qualifiers, and competitive programming milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {achievements.map((item, index) => {
            const isFeatured = index === 0 || index === 1;
            const colSpan = isFeatured ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => setSelectedAchievement(item)}
                className={`${colSpan} group rounded-[28px] p-7 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}
                style={{ backgroundColor: item.color }}
              >
                {/* Top Row: Category + Metric Stat */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <span
                          className="text-[10px] font-black tracking-widest uppercase block"
                          style={{ color: item.accent }}
                        >
                          {item.category}
                        </span>
                        <span className="text-[11px] font-semibold text-black/40">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Metric Badge */}
                    <div className="text-right">
                      <span className="text-xl md:text-2xl font-black text-black tracking-tight block">
                        {item.metric}
                      </span>
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-wider block">
                        {item.metricSub}
                      </span>
                    </div>
                  </div>

                  {/* Title & Event */}
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-black/50 uppercase tracking-wider mb-4">
                    {item.event}
                  </p>

                  {/* Description */}
                  <p className="text-black/75 text-sm leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Tags & Certificate Status */}
                <div className="pt-4 border-t border-black/8 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[10px] font-bold rounded-full"
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-black/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Certificate verified</span>
                    </span>

                    <span
                      className="font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      style={{ color: item.accent }}
                    >
                      <span>Details</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedAchievement(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-xl bg-white rounded-[28px] overflow-hidden shadow-2xl p-7 md:p-9"
            style={{ animation: 'slideUp 0.3s cubic-bezier(0.16,1,0.3,1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full absolute top-0 left-0" style={{ backgroundColor: selectedAchievement.accent }} />

            <div className="flex items-start justify-between mb-4 mt-2">
              <div>
                <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: selectedAchievement.accent }}>
                  {selectedAchievement.category} • {selectedAchievement.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight mt-1">
                  {selectedAchievement.title}
                </h3>
                <p className="text-xs font-bold text-black/50 uppercase tracking-wider mt-1">
                  {selectedAchievement.event}
                </p>
              </div>

              <button
                onClick={() => setSelectedAchievement(null)}
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Score Highlight Box */}
            <div
              className="p-4 rounded-2xl mb-6 flex items-center justify-between"
              style={{ backgroundColor: `${selectedAchievement.accent}12` }}
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: selectedAchievement.accent }}>
                  Achievement Standing
                </p>
                <p className="text-2xl font-black text-black">
                  {selectedAchievement.metric}
                </p>
              </div>
              <span className="text-xs font-bold text-black/60 bg-white/80 px-3 py-1.5 rounded-full shadow-2xs">
                {selectedAchievement.metricSub}
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase mb-2">Overview</p>
              <p className="text-sm text-black/75 leading-relaxed font-medium">
                {selectedAchievement.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <p className="text-[11px] font-black tracking-widest text-black/40 uppercase mb-2.5">Key Highlights</p>
              <ul className="space-y-2">
                {selectedAchievement.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-black/80 font-medium">
                    <span className="text-sm" style={{ color: selectedAchievement.accent }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate placeholder notice */}
            <div className="p-4 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-base">📜</span>
                <div>
                  <p className="text-xs font-bold text-black">Certificate Verification</p>
                  <p className="text-[11px] text-black/50">Official certificate document will be attached shortly</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
                Pending Upload
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
