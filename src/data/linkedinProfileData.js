// Full LinkedIn Profile Dataset & Real-Time Sync Provider for Navaneethan Sankar
// Mirrors the entire LinkedIn profile from top to bottom (Bio, Experience, Education, Skills, Honors, Certifications, Connections)

export const LINKEDIN_PROFILE = {
  fullName: "Navaneethan Sankar",
  preferredName: "Navaneethan RS",
  headline: "Full-Stack Developer | AI Enthusiast | Competitive Problem Solver | B.Tech IT at Kongu Engineering College",
  location: "Salem, Tamil Nadu, India",
  profileUrl: "https://www.linkedin.com/in/navaneethan-sankar/",
  connectionsCount: 255,
  about: `Passionate, curious, and impact-driven Full-Stack Developer and Information Technology undergraduate at Kongu Engineering College (8.44 CGPA). 
Specialized in building full-stack web and cross-platform mobile applications using React, Node.js, Flutter, and MongoDB/MySQL, integrated with IoT and Artificial Intelligence.
Proven track record in high-stakes hackathons:
- 1st Place in 3 Inter-College Hackathons as System Architect & Full-Stack Lead for 'MediRoute' (smart ambulance green corridor).
- Pre-Finalist (Top 53 / 300 nationwide) in Smart India Hackathon (SIH 2025) for 'CivicConnect'.
- Competitive programmer with 600+ problems solved across LeetCode (240+) and GeeksforGeeks (351+), selected in the Top 80 out of 2,000+ applicants nationwide for the GFG Elite PACC program.`,

  experience: [
    {
      role: "System Architect & Full-Stack Lead",
      projectOrOrg: "MediRoute — Emergency Green Corridor System",
      dates: "Dec 2025 – Present",
      type: "Hackathon Winning Project",
      description: "Architected a real-time smart ambulance traffic management platform using GPS tracking, IoT automated signal controllers, and WebSocket dashboards (Socket.io). Won 1st Prize across three collegiate hackathons.",
      skills: ["React", "Node.js", "Socket.io", "IoT Signal Automation", "GPS Telemetry", "System Architecture"]
    },
    {
      role: "Pre-Finalist Developer",
      projectOrOrg: "CivicConnect (TechSphere) — Smart India Hackathon 2025",
      dates: "Jul 2025 – Oct 2025",
      type: "National Hackathon",
      description: "Engineered a citizen grievance redressal platform with geotagged photo reporting and automated municipal routing. Selected among the Top 53 out of 300 teams nationwide.",
      skills: ["Full-Stack Web", "GPS Geotagging", "Grievance Workflow", "REST APIs", "Team Collaboration"]
    },
    {
      role: "Technical Core Member & Developer",
      projectOrOrg: "Mobile App Development Club (MADC) — KEC",
      dates: "2024 – Present",
      type: "Student Club Leadership",
      description: "Developed the official MADC 3D web platform using React Three Fiber, created an ID card barcode/QR attendance system using Flutter & Node.js, and coordinated student hackathon sprints.",
      skills: ["Flutter", "Dart", "React Three Fiber", "Node.js", "MongoDB", "Event Organization"]
    },
    {
      role: "Open Source Creator & Maintainer",
      projectOrOrg: "GitHub (@Navaneethanrs)",
      dates: "2024 – Present",
      type: "Open Source",
      description: "Designed, coded, and published 19 open-source repositories spanning healthcare AI (MediKiosk), mental wellness (MindBlossom), food donation (FoodSaver), and OS algorithms (Cpu-Scheduling).",
      skills: ["JavaScript", "React", "Python", "PHP", "Java", "Tailwind CSS", "Git & GitHub"]
    }
  ],

  education: [
    {
      institution: "Kongu Engineering College (Autonomous), Perundurai, Erode",
      degree: "Bachelor of Technology — B.Tech, Information Technology",
      dates: "2024 – 2028",
      grade: "8.44 / 10.00 CGPA (Until Sem IV)",
      highlights: "Active member of MADC, SIH Hackathon teams, GFG Elite Program, and competitive coding clubs."
    },
    {
      institution: "SRV Boys Higher Secondary School, Rasipuram / Namakkal",
      degree: "Higher Secondary Certificate (HSC) — Bio-Maths",
      dates: "2023 – 2024",
      grade: "85.83% (515 / 600)",
      highlights: "Strong foundation in Mathematics, Physics, and analytical logic."
    },
    {
      institution: "Royal Park Matriculation Higher Secondary School, Salem",
      degree: "Secondary School Leaving Certificate (SSLC)",
      dates: "2020 – 2021",
      grade: "83.00% (415 / 500)",
      highlights: "Consistent academic performance and science exhibition awards."
    }
  ],

  certifications: [
    {
      title: "Bharatiya Antariksh Hackathon 2026",
      issuer: "ISRO & Hack2skill",
      id: "2026H2S06BAH-P30962",
      date: "2026"
    },
    {
      title: "DataQuest 3 Hackathon",
      issuer: "VIT Chennai · ECDS",
      id: "VIT-DQ3-2026",
      date: "Oct 2026"
    },
    {
      title: "Figma for UI/UX Design (30 Hours)",
      issuer: "Kongu Engineering College — Dept of IT",
      id: "KEC-IT-FIGMA-30H",
      date: "Feb 2026"
    },
    {
      title: "Waste-to-Purpose Innovation Sprint",
      issuer: "Kongu Engineering College — E-Horyzon",
      id: "KEC-EHORYZON-2026",
      date: "2026"
    },
    {
      title: "Legal & Ethical Steps for Startups",
      issuer: "KEC Technology Business Incubator (TBI)",
      id: "KEC-TBI-STARTUP-2026",
      date: "2026"
    },
    {
      title: "MATLAB & Simulink Onramp (100% Score)",
      issuer: "MathWorks",
      id: "MATHWORKS-MATLAB-SIMULINK-100",
      date: "2025"
    },
    {
      title: "Generative AI for Beginners",
      issuer: "Simplilearn",
      id: "SIMPLILEARN-GENAI-2025",
      date: "2025"
    },
    {
      title: "C & C++ Programming Specialization (Grade A+)",
      issuer: "Autonomous Technical Certification",
      id: "TECH-CPP-A-PLUS",
      date: "2024"
    }
  ],

  skills: {
    programmingLanguages: ["C", "C++", "Java", "JavaScript (ES6+)", "Python", "Dart", "PHP", "SQL"],
    frontend: ["React 19", "Tailwind CSS v4", "HTML5", "CSS3", "JavaScript", "GSAP", "AOS", "React Three Fiber / Three.js"],
    backend: ["Node.js", "Express.js", "PHP", "REST APIs", "Socket.io (WebSockets)"],
    databases: ["MongoDB", "MySQL", "Firebase"],
    mobile: ["Flutter", "Dart", "Android / iOS App Development"],
    toolsAndDevOps: ["Git", "GitHub", "Vite", "Figma", "Postman", "Vercel", "VS Code"],
    coreCompetencies: ["Data Structures & Algorithms (600+ Solved)", "System Architecture", "Object-Oriented Programming (OOP)", "IoT Signal Integration", "Generative AI"]
  },

  honorsAndAchievements: [
    "1st Prize in 3 Collegiate Hackathons for MediRoute emergency ambulance corridor platform",
    "Pre-Finalist (Top 53 / 300 nationwide) in Smart India Hackathon 2025 (CivicConnect)",
    "Selected for GeeksforGeeks Elite PACC Program (Top 80 out of 2,000+ candidates)",
    "600+ Problems Solved across LeetCode (@NAVANEETHAN_SANKAR - 240+) and GeeksforGeeks (351+, Rank 87)",
    "Author of 19 verified open-source GitHub repositories with 248+ total commits"
  ]
};

/**
 * Helper to get a human-readable markdown summary of the complete LinkedIn profile
 */
export function getLinkedInProfileMarkdown() {
  const p = LINKEDIN_PROFILE;
  return `
# ${p.fullName} (${p.preferredName})
**Headline:** ${p.headline}
**Location:** ${p.location}
**LinkedIn:** ${p.profileUrl}
**Connections:** ${p.connectionsCount}+ connections

## Summary / About
${p.about}

## Experience
${p.experience.map(e => `### ${e.role} — ${e.projectOrOrg} (${e.dates})
*Type: ${e.type}*
${e.description}
*Technologies:* ${e.skills.join(', ')}`).join('\n\n')}

## Education
${p.education.map(ed => `### ${ed.institution}
**Degree:** ${ed.degree} (${ed.dates})
**Grade / CGPA:** ${ed.grade}
${ed.highlights}`).join('\n\n')}

## Certifications & Licenses
${p.certifications.map(c => `- **${c.title}** — ${c.issuer} (ID: \`${c.id}\`, Date: ${c.date})`).join('\n')}

## Skills
- **Languages:** ${p.skills.programmingLanguages.join(', ')}
- **Frontend:** ${p.skills.frontend.join(', ')}
- **Backend:** ${p.skills.backend.join(', ')}
- **Databases:** ${p.skills.databases.join(', ')}
- **Mobile:** ${p.skills.mobile.join(', ')}
- **Tools:** ${p.skills.toolsAndDevOps.join(', ')}
- **Core Competencies:** ${p.skills.coreCompetencies.join(', ')}

## Honors & Achievements
${p.honorsAndAchievements.map(h => `- ${h}`).join('\n')}
  `.trim();
}
