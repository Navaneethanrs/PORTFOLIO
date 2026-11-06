import React, { useState, useMemo } from 'react';
import isroCert from '../assets/certificates/isro-hackathon-2026.jpg';
import vitCert from '../assets/certificates/vit-dataquest-hackathon.jpg';
import wasteCert from '../assets/certificates/waste-to-purpose-kec.jpg';
import startupCert from '../assets/certificates/startup-legal-ethical-kec.jpg';
import figmaCert from '../assets/certificates/figma-uiux-certification.jpg';

const events = [
  {
    id: '01',
    title: 'Bharatiya Antariksh Hackathon 2026',
    organizer: 'ISRO & Hack2skill',
    type: 'Hackathon',
    badge: 'National Hackathon',
    status: 'Participant · Idea Submission',
    date: '2026',
    credentialId: '2026H2S06BAH-P30962',
    certificateImg: isroCert,
    downloadUrl: '/certificates/isro-hackathon-2026.jpg',
    accent: '#EA580C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    description:
      'Participated and successfully submitted innovative space-tech solutions in the national hackathon by ISRO and Hack2skill tackling space exploration challenges.',
    tags: ['ISRO', 'Space Tech', 'Hack2skill', 'Idea Submission'],
  },
  {
    id: '02',
    title: 'DataQuest 3 Hackathon',
    organizer: 'VIT Chennai · ECDS',
    type: 'Hackathon',
    badge: 'Inter-College Hackathon',
    status: 'Participant',
    date: 'Oct 2026',
    credentialId: null,
    certificateImg: vitCert,
    downloadUrl: '/certificates/vit-dataquest-hackathon.jpg',
    accent: '#4F46E5',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    description:
      'Competed in DataQuest 3, a 2-day offline hackathon at VIT Chennai, prototyping real-time data-driven applications within sprint deadlines.',
    tags: ['VIT Chennai', 'DataQuest 3', 'Data Science', 'Sprint'],
  },
  {
    id: '03',
    title: 'Waste-to-Purpose: Sustainable Bharat',
    organizer: "Kongu Engineering College · E-Horyzon 2K26",
    type: 'Presentation',
    badge: 'Paper / Project Presentation',
    status: 'Participant & Presenter',
    date: 'Feb 2026',
    credentialId: null,
    certificateImg: wasteCert,
    downloadUrl: '/certificates/waste-to-purpose-kec.jpg',
    accent: '#059669',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
    description:
      'Presented sustainable engineering methodologies and resource conversion models under the IEF E-Horyzon competition for green youth empowerment.',
    tags: ['Sustainability', 'Paper Presentation', 'E-Horyzon 2K26'],
  },
  {
    id: '04',
    title: 'Startup Legal and Ethical Steps',
    organizer: "Kongu Engineering College · E-Horyzon 2K26",
    type: 'Presentation',
    badge: 'Entrepreneurship & Law',
    status: 'Participant',
    date: 'Feb 2026',
    credentialId: null,
    certificateImg: startupCert,
    downloadUrl: '/certificates/startup-legal-ethical-kec.jpg',
    accent: '#D97706',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v2.632c0 .927-.648 1.724-1.554 1.916a48.44 48.44 0 0 1-5.196.532m0 0a48.44 48.44 0 0 1-5.196-.532A1.944 1.944 0 0 1 5.25 7.602V4.97m0 0A48.772 48.772 0 0 0 2.25 5.49" />
      </svg>
    ),
    description:
      'Explored compliance roadmaps, intellectual property protections, founder agreements, and ethical dimensions for tech-driven startup ventures.',
    tags: ['Startup', 'IPR & Legal', 'Ethics', 'TBI-KEC'],
  },
  {
    id: '05',
    title: 'Figma for UI/UX Design (30h)',
    organizer: 'Department of IT · Kongu Engineering College',
    type: 'Course',
    badge: 'Design Certification',
    status: 'Course Completion',
    date: 'Dec 2025 – Feb 2026',
    credentialId: 'Academic Year 2025-26',
    certificateImg: figmaCert,
    downloadUrl: '/certificates/figma-uiux-certification.jpg',
    accent: '#7C3AED',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    description:
      'Completed a 30-hour specialized curriculum in Figma mastering design systems, Auto Layout, component architectures, and responsive prototypes.',
    tags: ['Figma', 'UI/UX', 'Design Systems', '30 Hours'],
  },
];

const Hackathons = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filterTabs = [
    { label: 'All', count: events.length },
    { label: 'Hackathons', count: events.filter((e) => e.type === 'Hackathon').length },
    { label: 'Presentations', count: events.filter((e) => e.type === 'Presentation').length },
    { label: 'Courses', count: events.filter((e) => e.type === 'Course').length },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((item) => {
      const matchesFilter =
        activeFilter === 'All'
          ? true
          : activeFilter === 'Courses'
          ? item.type === 'Course'
          : item.type === activeFilter;

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="hackathons" className="w-full bg-[#F9F9F7] py-16 md:py-24 px-4 md:px-8 lg:px-16 border-t border-black/5">
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div data-aos="fade-up">
            <span className="text-black/50 text-xs font-bold tracking-widest uppercase mb-1.5 block">
              — Competitions & Engagements
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-black">
              Hackathons & Presentations
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-black/60 text-xs md:text-sm font-medium max-w-sm md:text-right leading-relaxed"
          >
            Active participation across national hackathons, technical symposiums, and innovation challenges. Click any entry to view the official verified certificate.
          </p>
        </div>

        {/* Filter Bar & Quick Search */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-black/8"
        >
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveFilter(tab.label)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-sm -translate-y-0.5'
                      : 'bg-white text-black/70 hover:bg-black/5 border border-black/8'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-black/8 text-black/60'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-60">
            <input
              type="text"
              placeholder="Search events, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-medium pl-8 pr-3 py-1.5 bg-white rounded-full border border-black/10 focus:border-black focus:outline-none transition-colors"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-black/40"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Compact Cards Grid (Clean, Sleek & Scalable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredEvents.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-black/8 hover:border-black/20 hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Top Accent Line */}
              <div
                className="h-1 w-full absolute top-0 left-0 rounded-t-2xl transition-all duration-300 opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: item.accent }}
              />

              <div>
                {/* Header: Icon + Category Badge + Date */}
                <div className="flex items-start justify-between gap-3 mb-3.5 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span
                        className="text-[9px] font-black uppercase tracking-wider block"
                        style={{ color: item.accent }}
                      >
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-bold text-black/40">{item.date}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50 shrink-0">
                    {item.status.split('·')[0].trim()}
                  </span>
                </div>

                {/* Title & Host */}
                <h3 className="text-base font-bold text-black tracking-tight leading-snug mb-1 group-hover:text-black/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] font-semibold text-black/50 mb-3 line-clamp-1">
                  {item.organizer}
                </p>

                {/* Short Description */}
                <p className="text-black/70 text-xs leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Compact Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[9px] font-semibold rounded-full bg-black/4 text-black/65"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded-full bg-black/4 text-black/45">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer: "View Certificate" Pill + Download */}
              <div className="pt-3 border-t border-black/6 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCertificate(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:opacity-70 transition-opacity cursor-pointer group/btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-black/60 group-hover/btn:text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span>View Certificate</span>
                </button>

                <div className="flex items-center gap-1">
                  <a
                    href={item.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-black/5 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200"
                    title="Download Certificate"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state for search */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-black/8">
            <p className="text-sm font-bold text-black/60 mb-1">No matching events found</p>
            <p className="text-xs text-black/40">Try clearing your search or switching filter categories.</p>
          </div>
        )}

      </div>

      {/* Certificate Modal Lightbox (Clean on-demand viewing) */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalScale 0.22s cubic-bezier(0.16,1,0.3,1)' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 md:px-6 py-3.5 border-b border-black/8 bg-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: selectedCertificate.accent }}
                />
                <div>
                  <h4 className="text-sm md:text-base font-bold text-black leading-tight">
                    {selectedCertificate.title}
                  </h4>
                  <p className="text-[10px] md:text-xs font-semibold text-black/50">
                    {selectedCertificate.organizer} • {selectedCertificate.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.downloadUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs font-bold bg-black text-white hover:bg-black/80 transition-colors flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download</span>
                </a>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black font-bold text-xs transition-colors cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Preview */}
            <div className="overflow-y-auto p-4 md:p-6 bg-[#0B0F17] flex items-center justify-center flex-1">
              <img
                src={selectedCertificate.certificateImg}
                alt={selectedCertificate.title}
                className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-5 md:px-6 py-3 bg-white border-t border-black/8 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black/50">Issued To:</span>
                <span className="font-bold text-black">NAVANEETHAN R S</span>
                {selectedCertificate.credentialId && (
                  <>
                    <span className="text-black/30">•</span>
                    <span className="font-mono text-[11px] font-bold text-black/70 bg-black/5 px-2 py-0.5 rounded">
                      ID: {selectedCertificate.credentialId}
                    </span>
                  </>
                )}
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                ✓ Verified Document
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hackathons;